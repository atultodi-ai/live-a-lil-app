-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('todo', 'ongoing', 'done', 'archived');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('travel', 'skill', 'experience', 'achievement', 'habit', 'relationship');

-- CreateEnum
CREATE TYPE "CostTier" AS ENUM ('free', 'low', 'moderate', 'high', 'very_high');

-- CreateEnum
CREATE TYPE "EffortTier" AS ENUM ('minimal', 'low', 'moderate', 'high', 'sustained');

-- CreateEnum
CREATE TYPE "TimeHorizon" AS ENUM ('immediate', 'short_term', 'long_term');

-- CreateEnum
CREATE TYPE "ItemSource" AS ENUM ('user', 'seed_library', 'ai_suggestion');

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "name" TEXT,
    "image" TEXT,
    "auth_provider" TEXT NOT NULL DEFAULT 'magic_link',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_active" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "onboarding_complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_situations" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_situations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bucket_list_items" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "priority" INTEGER NOT NULL DEFAULT 2,
    "status" "ItemStatus" NOT NULL DEFAULT 'todo',
    "type" "ItemType",
    "best_season" TEXT,
    "age_window_min" INTEGER,
    "age_window_max" INTEGER,
    "cost_estimate" "CostTier",
    "effort_level" "EffortTier",
    "time_horizon" "TimeHorizon",
    "constraints" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "doability_score" INTEGER,
    "ai_reasoning" TEXT,
    "image_url" TEXT,
    "completed_at" TIMESTAMP(3),
    "completion_photo_url" TEXT,
    "completion_note" TEXT,
    "source" "ItemSource" NOT NULL DEFAULT 'user',
    "seed_item_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bucket_list_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seed_library_items" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "ItemType" NOT NULL,
    "image_keyword" TEXT NOT NULL,
    "age_relevance_min" INTEGER NOT NULL DEFAULT 12,
    "age_relevance_max" INTEGER NOT NULL DEFAULT 89,
    "cost_tier" "CostTier" NOT NULL,
    "effort_tier" "EffortTier" NOT NULL,
    "time_horizon" "TimeHorizon" NOT NULL,
    "popularity_score" INTEGER NOT NULL,
    "best_season" TEXT NOT NULL DEFAULT 'any',
    "constraints" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "region_relevance" TEXT[] DEFAULT ARRAY['global']::TEXT[],

    CONSTRAINT "seed_library_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beta_signups" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "beta_signups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "user_situations_user_id_version_idx" ON "user_situations"("user_id", "version");

-- CreateIndex
CREATE INDEX "bucket_list_items_user_id_status_idx" ON "bucket_list_items"("user_id", "status");

-- CreateIndex
CREATE INDEX "bucket_list_items_user_id_doability_score_idx" ON "bucket_list_items"("user_id", "doability_score");

-- CreateIndex
CREATE INDEX "seed_library_items_type_idx" ON "seed_library_items"("type");

-- CreateIndex
CREATE INDEX "seed_library_items_popularity_score_idx" ON "seed_library_items"("popularity_score");

-- CreateIndex
CREATE UNIQUE INDEX "beta_signups_email_key" ON "beta_signups"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_situations" ADD CONSTRAINT "user_situations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bucket_list_items" ADD CONSTRAINT "bucket_list_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
