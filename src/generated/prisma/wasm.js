
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  emailVerified: 'emailVerified',
  name: 'name',
  image: 'image',
  authProvider: 'authProvider',
  createdAt: 'createdAt',
  lastActive: 'lastActive',
  onboardingComplete: 'onboardingComplete'
};

exports.Prisma.UserSituationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  version: 'version',
  data: 'data',
  createdAt: 'createdAt'
};

exports.Prisma.BucketListItemScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  title: 'title',
  description: 'description',
  priority: 'priority',
  status: 'status',
  type: 'type',
  bestSeason: 'bestSeason',
  ageWindowMin: 'ageWindowMin',
  ageWindowMax: 'ageWindowMax',
  costEstimate: 'costEstimate',
  effortLevel: 'effortLevel',
  timeHorizon: 'timeHorizon',
  constraints: 'constraints',
  doabilityScore: 'doabilityScore',
  aiReasoning: 'aiReasoning',
  imageUrl: 'imageUrl',
  completedAt: 'completedAt',
  completionPhotoUrl: 'completionPhotoUrl',
  completionNote: 'completionNote',
  source: 'source',
  seedItemId: 'seedItemId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SeedLibraryItemScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  type: 'type',
  imageKeyword: 'imageKeyword',
  imageUrl: 'imageUrl',
  ageRelevanceMin: 'ageRelevanceMin',
  ageRelevanceMax: 'ageRelevanceMax',
  costTier: 'costTier',
  effortTier: 'effortTier',
  timeHorizon: 'timeHorizon',
  popularityScore: 'popularityScore',
  bestSeason: 'bestSeason',
  constraints: 'constraints',
  tags: 'tags',
  regionRelevance: 'regionRelevance'
};

exports.Prisma.BetaSignupScalarFieldEnum = {
  id: 'id',
  email: 'email',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.ItemStatus = exports.$Enums.ItemStatus = {
  todo: 'todo',
  ongoing: 'ongoing',
  done: 'done',
  archived: 'archived'
};

exports.ItemType = exports.$Enums.ItemType = {
  travel: 'travel',
  skill: 'skill',
  experience: 'experience',
  achievement: 'achievement',
  habit: 'habit',
  relationship: 'relationship',
  other: 'other'
};

exports.CostTier = exports.$Enums.CostTier = {
  free: 'free',
  low: 'low',
  moderate: 'moderate',
  high: 'high',
  very_high: 'very_high'
};

exports.EffortTier = exports.$Enums.EffortTier = {
  minimal: 'minimal',
  low: 'low',
  moderate: 'moderate',
  high: 'high',
  sustained: 'sustained'
};

exports.TimeHorizon = exports.$Enums.TimeHorizon = {
  immediate: 'immediate',
  short_term: 'short_term',
  long_term: 'long_term'
};

exports.ItemSource = exports.$Enums.ItemSource = {
  user: 'user',
  seed_library: 'seed_library',
  ai_suggestion: 'ai_suggestion'
};

exports.Prisma.ModelName = {
  Account: 'Account',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  User: 'User',
  UserSituation: 'UserSituation',
  BucketListItem: 'BucketListItem',
  SeedLibraryItem: 'SeedLibraryItem',
  BetaSignup: 'BetaSignup'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/teddy/Desktop/Live-a-Lil/live-a-lil-app/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "/Users/teddy/Desktop/Live-a-Lil/live-a-lil-app/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// Live A Little — Prisma Schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\n// ─────────────────────────────────────────────\n// ENUMS\n// ─────────────────────────────────────────────\n\nenum ItemStatus {\n  todo\n  ongoing\n  done\n  archived\n}\n\nenum ItemType {\n  travel\n  skill\n  experience\n  achievement\n  habit\n  relationship\n  other\n}\n\nenum CostTier {\n  free\n  low\n  moderate\n  high\n  very_high\n}\n\nenum EffortTier {\n  minimal\n  low\n  moderate\n  high\n  sustained\n}\n\nenum TimeHorizon {\n  immediate\n  short_term\n  long_term\n}\n\nenum ItemSource {\n  user\n  seed_library\n  ai_suggestion\n}\n\n// ─────────────────────────────────────────────\n// NEXTAUTH TABLES\n// ─────────────────────────────────────────────\n\nmodel Account {\n  id                String  @id @default(cuid())\n  userId            String  @map(\"user_id\")\n  type              String\n  provider          String\n  providerAccountId String  @map(\"provider_account_id\")\n  refresh_token     String? @db.Text\n  access_token      String? @db.Text\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String? @db.Text\n  session_state     String?\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([provider, providerAccountId])\n  @@map(\"accounts\")\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique @map(\"session_token\")\n  userId       String   @map(\"user_id\")\n  expires      DateTime\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"sessions\")\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String\n  expires    DateTime\n\n  @@unique([identifier, token])\n  @@map(\"verification_tokens\")\n}\n\n// ─────────────────────────────────────────────\n// CORE APP TABLES\n// ─────────────────────────────────────────────\n\nmodel User {\n  id                 String    @id @default(uuid())\n  email              String    @unique\n  emailVerified      DateTime? @map(\"email_verified\")\n  name               String?\n  image              String?\n  authProvider       String    @default(\"magic_link\") @map(\"auth_provider\")\n  createdAt          DateTime  @default(now()) @map(\"created_at\")\n  lastActive         DateTime  @default(now()) @map(\"last_active\")\n  onboardingComplete Boolean   @default(false) @map(\"onboarding_complete\")\n\n  accounts        Account[]\n  sessions        Session[]\n  situations      UserSituation[]\n  bucketListItems BucketListItem[]\n\n  @@map(\"users\")\n}\n\n// Situation Knowledge Graph — append-only versioning.\n// Every update creates a new row. Latest version = current situation.\nmodel UserSituation {\n  id        String   @id @default(uuid())\n  userId    String   @map(\"user_id\")\n  version   Int      @default(1)\n  data      Json // Full SKG as JSONB\n  createdAt DateTime @default(now()) @map(\"created_at\")\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([userId, version])\n  @@map(\"user_situations\")\n}\n\nmodel BucketListItem {\n  id                 String       @id @default(uuid())\n  userId             String       @map(\"user_id\")\n  title              String\n  description        String?\n  priority           Int          @default(2) // 1=maybe 2=want_to_do 3=must_do\n  status             ItemStatus   @default(todo)\n  type               ItemType? // AI fills this\n  bestSeason         String?      @map(\"best_season\")\n  ageWindowMin       Int?         @map(\"age_window_min\")\n  ageWindowMax       Int?         @map(\"age_window_max\")\n  costEstimate       CostTier?    @map(\"cost_estimate\")\n  effortLevel        EffortTier?  @map(\"effort_level\")\n  timeHorizon        TimeHorizon? @map(\"time_horizon\")\n  constraints        String[]     @default([])\n  doabilityScore     Int?         @map(\"doability_score\") // 0-100\n  aiReasoning        String?      @map(\"ai_reasoning\")\n  imageUrl           String?      @map(\"image_url\")\n  completedAt        DateTime?    @map(\"completed_at\")\n  completionPhotoUrl String?      @map(\"completion_photo_url\")\n  completionNote     String?      @map(\"completion_note\") // max 280 chars\n  source             ItemSource   @default(user)\n  seedItemId         String?      @map(\"seed_item_id\")\n  createdAt          DateTime     @default(now()) @map(\"created_at\")\n  updatedAt          DateTime     @updatedAt @map(\"updated_at\")\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([userId, status])\n  @@index([userId, doabilityScore])\n  @@map(\"bucket_list_items\")\n}\n\nmodel SeedLibraryItem {\n  id              String      @id // e.g., \"seed_0001\"\n  title           String\n  description     String\n  type            ItemType\n  imageKeyword    String      @map(\"image_keyword\")\n  imageUrl        String?     @map(\"image_url\") // cached — shared across all users who add this seed\n  ageRelevanceMin Int         @default(12) @map(\"age_relevance_min\")\n  ageRelevanceMax Int         @default(89) @map(\"age_relevance_max\")\n  costTier        CostTier    @map(\"cost_tier\")\n  effortTier      EffortTier  @map(\"effort_tier\")\n  timeHorizon     TimeHorizon @map(\"time_horizon\")\n  popularityScore Int         @map(\"popularity_score\") // 1-100\n  bestSeason      String      @default(\"any\") @map(\"best_season\")\n  constraints     String[]    @default([])\n  tags            String[]    @default([])\n  regionRelevance String[]    @default([\"global\"]) @map(\"region_relevance\")\n\n  @@index([type])\n  @@index([popularityScore])\n  @@map(\"seed_library_items\")\n}\n\nmodel BetaSignup {\n  id        String   @id @default(uuid())\n  email     String   @unique\n  createdAt DateTime @default(now()) @map(\"created_at\")\n\n  @@map(\"beta_signups\")\n}\n",
  "inlineSchemaHash": "0fa6a9010ef7b30edcce54d701346da53d3e9386168b588105a97cba996a62f8",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Account\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provider\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"providerAccountId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"provider_account_id\"},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"access_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires_at\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"token_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"scope\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"id_token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"session_state\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AccountToUser\"}],\"dbName\":\"accounts\"},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"session_token\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"}],\"dbName\":\"sessions\"},\"VerificationToken\":{\"fields\":[{\"name\":\"identifier\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"expires\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"verification_tokens\"},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"emailVerified\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"email_verified\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authProvider\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"auth_provider\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"lastActive\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"last_active\"},{\"name\":\"onboardingComplete\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"onboarding_complete\"},{\"name\":\"accounts\",\"kind\":\"object\",\"type\":\"Account\",\"relationName\":\"AccountToUser\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"situations\",\"kind\":\"object\",\"type\":\"UserSituation\",\"relationName\":\"UserToUserSituation\"},{\"name\":\"bucketListItems\",\"kind\":\"object\",\"type\":\"BucketListItem\",\"relationName\":\"BucketListItemToUser\"}],\"dbName\":\"users\"},\"UserSituation\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"version\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"data\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"UserToUserSituation\"}],\"dbName\":\"user_situations\"},\"BucketListItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"priority\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ItemStatus\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"ItemType\"},{\"name\":\"bestSeason\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"best_season\"},{\"name\":\"ageWindowMin\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"age_window_min\"},{\"name\":\"ageWindowMax\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"age_window_max\"},{\"name\":\"costEstimate\",\"kind\":\"enum\",\"type\":\"CostTier\",\"dbName\":\"cost_estimate\"},{\"name\":\"effortLevel\",\"kind\":\"enum\",\"type\":\"EffortTier\",\"dbName\":\"effort_level\"},{\"name\":\"timeHorizon\",\"kind\":\"enum\",\"type\":\"TimeHorizon\",\"dbName\":\"time_horizon\"},{\"name\":\"constraints\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"doabilityScore\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"doability_score\"},{\"name\":\"aiReasoning\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"ai_reasoning\"},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"image_url\"},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"completed_at\"},{\"name\":\"completionPhotoUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"completion_photo_url\"},{\"name\":\"completionNote\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"completion_note\"},{\"name\":\"source\",\"kind\":\"enum\",\"type\":\"ItemSource\"},{\"name\":\"seedItemId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"seed_item_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"BucketListItemToUser\"}],\"dbName\":\"bucket_list_items\"},\"SeedLibraryItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"ItemType\"},{\"name\":\"imageKeyword\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"image_keyword\"},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"image_url\"},{\"name\":\"ageRelevanceMin\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"age_relevance_min\"},{\"name\":\"ageRelevanceMax\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"age_relevance_max\"},{\"name\":\"costTier\",\"kind\":\"enum\",\"type\":\"CostTier\",\"dbName\":\"cost_tier\"},{\"name\":\"effortTier\",\"kind\":\"enum\",\"type\":\"EffortTier\",\"dbName\":\"effort_tier\"},{\"name\":\"timeHorizon\",\"kind\":\"enum\",\"type\":\"TimeHorizon\",\"dbName\":\"time_horizon\"},{\"name\":\"popularityScore\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"popularity_score\"},{\"name\":\"bestSeason\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"best_season\"},{\"name\":\"constraints\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tags\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"regionRelevance\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"region_relevance\"}],\"dbName\":\"seed_library_items\"},\"BetaSignup\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"}],\"dbName\":\"beta_signups\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

