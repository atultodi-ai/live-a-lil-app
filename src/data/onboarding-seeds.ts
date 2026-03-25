// Static seed items shown during onboarding (screen 2).
// A curated mix of 40 items across all 6 categories.
// Used before the full SeedLibrary DB is populated.

export interface OnboardingSeed {
  id: string;
  title: string;
  type: "travel" | "skill" | "experience" | "achievement" | "habit" | "relationship";
  emoji: string;
}

export const ONBOARDING_SEEDS: OnboardingSeed[] = [
  // Travel
  { id: "s-travel-1", title: "See the Northern Lights", type: "travel", emoji: "🌌" },
  { id: "s-travel-2", title: "Road trip with no fixed plan", type: "travel", emoji: "🚗" },
  { id: "s-travel-3", title: "Live abroad for a month", type: "travel", emoji: "🌍" },
  { id: "s-travel-4", title: "Trek a famous trail", type: "travel", emoji: "🥾" },
  { id: "s-travel-5", title: "Sleep under the stars in a desert", type: "travel", emoji: "⭐" },
  { id: "s-travel-6", title: "Take a train across a continent", type: "travel", emoji: "🚂" },
  { id: "s-travel-7", title: "Visit all 7 continents", type: "travel", emoji: "🗺️" },

  // Skill
  { id: "s-skill-1", title: "Learn a second language", type: "skill", emoji: "🗣️" },
  { id: "s-skill-2", title: "Play an instrument", type: "skill", emoji: "🎸" },
  { id: "s-skill-3", title: "Cook a dish from every continent", type: "skill", emoji: "🍳" },
  { id: "s-skill-4", title: "Learn to paint or draw", type: "skill", emoji: "🎨" },
  { id: "s-skill-5", title: "Write a book or screenplay", type: "skill", emoji: "✍️" },
  { id: "s-skill-6", title: "Build something with my hands", type: "skill", emoji: "🔨" },
  { id: "s-skill-7", title: "Learn to dance salsa", type: "skill", emoji: "💃" },

  // Experience
  { id: "s-exp-1", title: "Go skydiving", type: "experience", emoji: "🪂" },
  { id: "s-exp-2", title: "Attend a world-class music festival", type: "experience", emoji: "🎶" },
  { id: "s-exp-3", title: "Watch a sunrise from a mountain top", type: "experience", emoji: "🌄" },
  { id: "s-exp-4", title: "Swim with wild dolphins", type: "experience", emoji: "🐬" },
  { id: "s-exp-5", title: "See a total solar eclipse", type: "experience", emoji: "🌑" },
  { id: "s-exp-6", title: "Eat at a Michelin-starred restaurant", type: "experience", emoji: "⭐" },
  { id: "s-exp-7", title: "Go on a silent meditation retreat", type: "experience", emoji: "🧘" },

  // Achievement
  { id: "s-ach-1", title: "Run a marathon", type: "achievement", emoji: "🏃" },
  { id: "s-ach-2", title: "Start a business or side project", type: "achievement", emoji: "🚀" },
  { id: "s-ach-3", title: "Publish something creative", type: "achievement", emoji: "📖" },
  { id: "s-ach-4", title: "Complete a 30-day challenge", type: "achievement", emoji: "📅" },
  { id: "s-ach-5", title: "Achieve financial independence", type: "achievement", emoji: "💰" },
  { id: "s-ach-6", title: "Learn to surf", type: "achievement", emoji: "🏄" },
  { id: "s-ach-7", title: "Climb a mountain above 4000m", type: "achievement", emoji: "⛰️" },

  // Habit
  { id: "s-hab-1", title: "Meditate daily for a year", type: "habit", emoji: "🧠" },
  { id: "s-hab-2", title: "Read 52 books in a year", type: "habit", emoji: "📚" },
  { id: "s-hab-3", title: "Exercise consistently for 6 months", type: "habit", emoji: "💪" },
  { id: "s-hab-4", title: "Journal every day", type: "habit", emoji: "📓" },
  { id: "s-hab-5", title: "Go screen-free for a month", type: "habit", emoji: "📵" },
  { id: "s-hab-6", title: "Cook at home every day for 90 days", type: "habit", emoji: "🥗" },

  // Relationship
  { id: "s-rel-1", title: "Tell everyone I love them more often", type: "relationship", emoji: "❤️" },
  { id: "s-rel-2", title: "Reconnect with a lost friend", type: "relationship", emoji: "🤝" },
  { id: "s-rel-3", title: "Travel with my parents before it's too late", type: "relationship", emoji: "👨‍👩‍👧" },
  { id: "s-rel-4", title: "Mentor someone younger", type: "relationship", emoji: "🌱" },
  { id: "s-rel-5", title: "Spend a week completely offline with family", type: "relationship", emoji: "🏕️" },
  { id: "s-rel-6", title: "Make a true new friend as an adult", type: "relationship", emoji: "✨" },
];

export const CATEGORY_ORDER = [
  "travel",
  "skill",
  "experience",
  "achievement",
  "habit",
  "relationship",
] as const;

export const CATEGORY_META: Record<
  OnboardingSeed["type"],
  { label: string; color: string }
> = {
  travel: { label: "Travel", color: "var(--color-category-travel)" },
  skill: { label: "Skill", color: "var(--color-category-skill)" },
  experience: { label: "Experience", color: "var(--color-category-experience)" },
  achievement: { label: "Achievement", color: "var(--color-category-achievement)" },
  habit: { label: "Habit", color: "var(--color-category-habit)" },
  relationship: { label: "Relationship", color: "var(--color-category-relationship)" },
};
