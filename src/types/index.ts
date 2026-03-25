// Live A Little — Shared TypeScript Types
// Single source of truth for all data shapes across the app.

// ─────────────────────────────────────────────
// ENUMS (mirrors Prisma enums)
// ─────────────────────────────────────────────

export type ItemStatus = "todo" | "ongoing" | "done" | "archived";

export type ItemType =
  | "travel"
  | "skill"
  | "experience"
  | "achievement"
  | "habit"
  | "relationship"
  | "other";

export type CostTier = "free" | "low" | "moderate" | "high" | "very_high";

export type EffortTier = "minimal" | "low" | "moderate" | "high" | "sustained";

export type TimeHorizon = "immediate" | "short_term" | "long_term";

export type ItemSource = "user" | "seed_library" | "ai_suggestion";

export type LifeStage =
  | "young_adult"    // 18-29
  | "early_prime"    // 30-39
  | "prime"          // 40-49
  | "experienced"    // 50-59
  | "wise"           // 60-69
  | "elder"          // 70+

// ─────────────────────────────────────────────
// USER
// ─────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  authProvider: string;
  createdAt: Date;
  lastActive: Date;
  onboardingComplete: boolean;
}

// ─────────────────────────────────────────────
// BUCKET LIST ITEM
// ─────────────────────────────────────────────

export interface BucketListItem {
  id: string;
  userId: string;
  title: string;
  description?: string | null;
  priority: 1 | 2 | 3; // 1=maybe, 2=want_to_do, 3=must_do
  status: ItemStatus;
  type?: ItemType | null;
  bestSeason?: string | null;
  ageWindowMin?: number | null;
  ageWindowMax?: number | null;
  costEstimate?: CostTier | null;
  effortLevel?: EffortTier | null;
  timeHorizon?: TimeHorizon | null;
  constraints: string[];
  doabilityScore?: number | null; // 0-100
  aiReasoning?: string | null;
  imageUrl?: string | null;
  completedAt?: Date | null;
  completionPhotoUrl?: string | null;
  completionNote?: string | null; // max 280 chars
  source: ItemSource;
  seedItemId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface BucketListItemCounts {
  todo: number;
  ongoing: number;
  done: number;
  archived: number;
  active: number; // todo + ongoing, for the 100-cap check
}

// ─────────────────────────────────────────────
// SITUATION KNOWLEDGE GRAPH (SKG)
// ─────────────────────────────────────────────

// Layer 1: Core — collected at onboarding, never changes much
export interface SKGCoreLayer {
  age: number;
  gender?: "male" | "female" | "non_binary" | "prefer_not_to_say" | null;
  city: string;
  country: string;
  latitude?: number | null;
  longitude?: number | null;
}

// Layer 2: Progressive — learned over time via questions
export interface SKGProgressiveLayer {
  economic_capacity?: "tight" | "comfortable" | "abundant" | null;
  family_status?: "single" | "partnered" | "married" | "divorced" | "widowed" | null;
  health_mobility?: "full" | "limited" | "restricted" | null;
  occupation_type?: "employed" | "self_employed" | "freelance" | "student" | "retired" | "unemployed" | null;
  children?: boolean | null;
  education_level?: "high_school" | "undergraduate" | "graduate" | "doctoral" | "other" | null;
  languages?: string[] | null;
  // Each field tracks how we learned it
  _sources?: Partial<Record<keyof Omit<SKGProgressiveLayer, "_sources">, "user_stated" | "inferred" | "updated">>;
}

// Layer 3: Contextual — changes seasonally or situationally
export interface SKGContextualLayer {
  current_season?: "spring" | "summer" | "autumn" | "winter" | null;
  upcoming_travel?: string | null;
  major_life_events?: string[] | null;
  current_mood?: "low_energy" | "motivated" | "adventurous" | "reflective" | null;
}

// Layer 4: Behavioral — computed from usage patterns, never set by user
export interface SKGBehavioralLayer {
  completion_rate?: number | null; // 0-1
  preferred_types?: ItemType[] | null;
  active_hours?: "morning" | "afternoon" | "evening" | null;
  engagement_pattern?: "burst" | "steady" | "seasonal" | "inactive" | null;
  last_completion_at?: string | null; // ISO date string
}

// Full SKG document stored in JSONB
export interface SKG {
  core: SKGCoreLayer;
  progressive: SKGProgressiveLayer;
  contextual: SKGContextualLayer;
  behavioral: SKGBehavioralLayer;
  // Derived (computed on read, not stored)
  life_stage?: LifeStage;
  summers_remaining?: number;
}

export interface UserSituation {
  id: string;
  userId: string;
  version: number;
  data: SKG;
  createdAt: Date;
}

// ─────────────────────────────────────────────
// SEED LIBRARY
// ─────────────────────────────────────────────

export interface SeedLibraryItem {
  id: string;
  title: string;
  description: string;
  type: ItemType;
  imageKeyword: string;
  ageRelevanceMin: number;
  ageRelevanceMax: number;
  costTier: CostTier;
  effortTier: EffortTier;
  timeHorizon: TimeHorizon;
  popularityScore: number;
  bestSeason: string;
  constraints: string[];
  tags: string[];
  regionRelevance: string[];
}

// ─────────────────────────────────────────────
// AI ENGINE RESPONSES
// ─────────────────────────────────────────────

export interface AIItemAnalysis {
  type: ItemType;
  cost_estimate: CostTier;
  effort_level: EffortTier;
  time_horizon: TimeHorizon;
  best_season: string;
  age_window_min: number;
  age_window_max: number;
  constraints: string[];
  doability_score: number;
  ai_reasoning: string;
}

export interface AIRerankResult {
  item_id: string;
  doability_score: number;
  ai_reasoning: string;
}

export interface AINudge {
  item_id: string;
  nudge_text: string;
  nudge_tone: "warm" | "direct" | "playful" | "reflective";
}

export interface AISurpriseResult {
  item_id: string;
  pitch_text: string;
}

export interface AISurpriseThreeResult {
  today: AISurpriseResult;
  this_week: AISurpriseResult;
  this_month: AISurpriseResult;
}

export interface AIQuestion {
  field_key: keyof SKGProgressiveLayer;
  question_text: string;
  options?: { value: string; label: string }[];
}

// ─────────────────────────────────────────────
// API RESPONSE SHAPES
// ─────────────────────────────────────────────

export interface ApiSuccess<T> {
  data: T;
  error?: never;
}

export interface ApiError {
  data?: never;
  error: string;
  code?: string;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

// ─────────────────────────────────────────────
// FRONTEND STATE
// ─────────────────────────────────────────────

export type SortOption = "doability" | "priority" | "created" | "type";

export interface ItemFilters {
  type?: ItemType;
  time_horizon?: TimeHorizon;
  cost?: CostTier[];
  status?: ItemStatus;
}

export interface OnboardingData {
  age: number;
  gender?: SKGCoreLayer["gender"];
  city: string;
  country: string;
  latitude?: number;
  longitude?: number;
  selectedSeedIds: string[];
  customItems: string[];
}
