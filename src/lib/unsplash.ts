// Unsplash photo fetching utility
// Server-side only — keeps the access key out of the browser.

const UNSPLASH_API = "https://api.unsplash.com";
const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

export interface UnsplashPhoto {
  id: string;
  url: string;           // regular size (~1080px wide)
  thumb: string;         // small thumbnail
  color: string;         // dominant color hex (for placeholder)
  alt: string;
  credit: {
    name: string;
    link: string;
  };
}

/**
 * Fetch a single relevant photo from Unsplash for a given keyword.
 * Returns null if no key is configured or the request fails.
 */
export async function fetchUnsplashPhoto(
  keyword: string
): Promise<UnsplashPhoto | null> {
  if (!ACCESS_KEY) return null;

  try {
    const params = new URLSearchParams({
      query: keyword,
      per_page: "5",
      orientation: "landscape",
      content_filter: "high",
    });

    const res = await fetch(`${UNSPLASH_API}/search/photos?${params}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
        "Accept-Version": "v1",
      },
      // Cache for 1 hour — same keyword returns same results
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    const results = json.results as UnsplashResult[];
    if (!results?.length) return null;

    // Pick randomly from top 5 so we get variety across users
    const photo = results[Math.floor(Math.random() * results.length)];

    return {
      id: photo.id,
      url: photo.urls.regular,
      thumb: photo.urls.thumb,
      color: photo.color ?? "#7a7570",
      alt: photo.alt_description ?? keyword,
      credit: {
        name: photo.user.name,
        link: `${photo.user.links.html}?utm_source=live_a_little&utm_medium=referral`,
      },
    };
  } catch {
    return null;
  }
}

/**
 * Build a keyword from an item title for Unsplash search.
 * Strips common words that don't help image search.
 */
export function buildImageKeyword(title: string, type?: string): string {
  const stopWords = new Set([
    "a", "an", "the", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "my", "your", "our", "their", "its", "all", "get",
    "go", "do", "make", "take", "have", "learn", "try", "see", "visit",
    "before", "after", "during", "through", "across", "around", "into",
    "someone", "something", "everything", "nothing", "somewhere", "i",
  ]);

  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w));

  // Take first 3 meaningful words + type hint for context
  const keyword = words.slice(0, 3).join(" ");
  return keyword || type || "adventure";
}

// ─────────────────────────────────────────────
// Internal Unsplash API types
// ─────────────────────────────────────────────

interface UnsplashResult {
  id: string;
  color: string;
  alt_description: string;
  urls: {
    regular: string;
    thumb: string;
  };
  user: {
    name: string;
    links: { html: string };
  };
}
