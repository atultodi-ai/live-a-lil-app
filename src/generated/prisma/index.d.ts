
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSituation
 * 
 */
export type UserSituation = $Result.DefaultSelection<Prisma.$UserSituationPayload>
/**
 * Model BucketListItem
 * 
 */
export type BucketListItem = $Result.DefaultSelection<Prisma.$BucketListItemPayload>
/**
 * Model SeedLibraryItem
 * 
 */
export type SeedLibraryItem = $Result.DefaultSelection<Prisma.$SeedLibraryItemPayload>
/**
 * Model BetaSignup
 * 
 */
export type BetaSignup = $Result.DefaultSelection<Prisma.$BetaSignupPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemStatus: {
  todo: 'todo',
  ongoing: 'ongoing',
  done: 'done',
  archived: 'archived'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const ItemType: {
  travel: 'travel',
  skill: 'skill',
  experience: 'experience',
  achievement: 'achievement',
  habit: 'habit',
  relationship: 'relationship',
  other: 'other'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]


export const CostTier: {
  free: 'free',
  low: 'low',
  moderate: 'moderate',
  high: 'high',
  very_high: 'very_high'
};

export type CostTier = (typeof CostTier)[keyof typeof CostTier]


export const EffortTier: {
  minimal: 'minimal',
  low: 'low',
  moderate: 'moderate',
  high: 'high',
  sustained: 'sustained'
};

export type EffortTier = (typeof EffortTier)[keyof typeof EffortTier]


export const TimeHorizon: {
  immediate: 'immediate',
  short_term: 'short_term',
  long_term: 'long_term'
};

export type TimeHorizon = (typeof TimeHorizon)[keyof typeof TimeHorizon]


export const ItemSource: {
  user: 'user',
  seed_library: 'seed_library',
  ai_suggestion: 'ai_suggestion'
};

export type ItemSource = (typeof ItemSource)[keyof typeof ItemSource]

}

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

export type CostTier = $Enums.CostTier

export const CostTier: typeof $Enums.CostTier

export type EffortTier = $Enums.EffortTier

export const EffortTier: typeof $Enums.EffortTier

export type TimeHorizon = $Enums.TimeHorizon

export const TimeHorizon: typeof $Enums.TimeHorizon

export type ItemSource = $Enums.ItemSource

export const ItemSource: typeof $Enums.ItemSource

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userSituation`: Exposes CRUD operations for the **UserSituation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSituations
    * const userSituations = await prisma.userSituation.findMany()
    * ```
    */
  get userSituation(): Prisma.UserSituationDelegate<ExtArgs>;

  /**
   * `prisma.bucketListItem`: Exposes CRUD operations for the **BucketListItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BucketListItems
    * const bucketListItems = await prisma.bucketListItem.findMany()
    * ```
    */
  get bucketListItem(): Prisma.BucketListItemDelegate<ExtArgs>;

  /**
   * `prisma.seedLibraryItem`: Exposes CRUD operations for the **SeedLibraryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeedLibraryItems
    * const seedLibraryItems = await prisma.seedLibraryItem.findMany()
    * ```
    */
  get seedLibraryItem(): Prisma.SeedLibraryItemDelegate<ExtArgs>;

  /**
   * `prisma.betaSignup`: Exposes CRUD operations for the **BetaSignup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BetaSignups
    * const betaSignups = await prisma.betaSignup.findMany()
    * ```
    */
  get betaSignup(): Prisma.BetaSignupDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    UserSituation: 'UserSituation',
    BucketListItem: 'BucketListItem',
    SeedLibraryItem: 'SeedLibraryItem',
    BetaSignup: 'BetaSignup'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "userSituation" | "bucketListItem" | "seedLibraryItem" | "betaSignup"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSituation: {
        payload: Prisma.$UserSituationPayload<ExtArgs>
        fields: Prisma.UserSituationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSituationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSituationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          findFirst: {
            args: Prisma.UserSituationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSituationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          findMany: {
            args: Prisma.UserSituationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>[]
          }
          create: {
            args: Prisma.UserSituationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          createMany: {
            args: Prisma.UserSituationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSituationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>[]
          }
          delete: {
            args: Prisma.UserSituationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          update: {
            args: Prisma.UserSituationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          deleteMany: {
            args: Prisma.UserSituationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSituationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSituationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSituationPayload>
          }
          aggregate: {
            args: Prisma.UserSituationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSituation>
          }
          groupBy: {
            args: Prisma.UserSituationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSituationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSituationCountArgs<ExtArgs>
            result: $Utils.Optional<UserSituationCountAggregateOutputType> | number
          }
        }
      }
      BucketListItem: {
        payload: Prisma.$BucketListItemPayload<ExtArgs>
        fields: Prisma.BucketListItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BucketListItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BucketListItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          findFirst: {
            args: Prisma.BucketListItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BucketListItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          findMany: {
            args: Prisma.BucketListItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>[]
          }
          create: {
            args: Prisma.BucketListItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          createMany: {
            args: Prisma.BucketListItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BucketListItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>[]
          }
          delete: {
            args: Prisma.BucketListItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          update: {
            args: Prisma.BucketListItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          deleteMany: {
            args: Prisma.BucketListItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BucketListItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BucketListItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BucketListItemPayload>
          }
          aggregate: {
            args: Prisma.BucketListItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBucketListItem>
          }
          groupBy: {
            args: Prisma.BucketListItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BucketListItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BucketListItemCountArgs<ExtArgs>
            result: $Utils.Optional<BucketListItemCountAggregateOutputType> | number
          }
        }
      }
      SeedLibraryItem: {
        payload: Prisma.$SeedLibraryItemPayload<ExtArgs>
        fields: Prisma.SeedLibraryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeedLibraryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeedLibraryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          findFirst: {
            args: Prisma.SeedLibraryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeedLibraryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          findMany: {
            args: Prisma.SeedLibraryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>[]
          }
          create: {
            args: Prisma.SeedLibraryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          createMany: {
            args: Prisma.SeedLibraryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeedLibraryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>[]
          }
          delete: {
            args: Prisma.SeedLibraryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          update: {
            args: Prisma.SeedLibraryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          deleteMany: {
            args: Prisma.SeedLibraryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeedLibraryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeedLibraryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeedLibraryItemPayload>
          }
          aggregate: {
            args: Prisma.SeedLibraryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeedLibraryItem>
          }
          groupBy: {
            args: Prisma.SeedLibraryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeedLibraryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeedLibraryItemCountArgs<ExtArgs>
            result: $Utils.Optional<SeedLibraryItemCountAggregateOutputType> | number
          }
        }
      }
      BetaSignup: {
        payload: Prisma.$BetaSignupPayload<ExtArgs>
        fields: Prisma.BetaSignupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetaSignupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetaSignupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          findFirst: {
            args: Prisma.BetaSignupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetaSignupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          findMany: {
            args: Prisma.BetaSignupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>[]
          }
          create: {
            args: Prisma.BetaSignupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          createMany: {
            args: Prisma.BetaSignupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetaSignupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>[]
          }
          delete: {
            args: Prisma.BetaSignupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          update: {
            args: Prisma.BetaSignupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          deleteMany: {
            args: Prisma.BetaSignupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetaSignupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetaSignupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetaSignupPayload>
          }
          aggregate: {
            args: Prisma.BetaSignupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetaSignup>
          }
          groupBy: {
            args: Prisma.BetaSignupGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetaSignupGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetaSignupCountArgs<ExtArgs>
            result: $Utils.Optional<BetaSignupCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    situations: number
    bucketListItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    situations?: boolean | UserCountOutputTypeCountSituationsArgs
    bucketListItems?: boolean | UserCountOutputTypeCountBucketListItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSituationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSituationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBucketListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketListItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    authProvider: string | null
    createdAt: Date | null
    lastActive: Date | null
    onboardingComplete: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    emailVerified: Date | null
    name: string | null
    image: string | null
    authProvider: string | null
    createdAt: Date | null
    lastActive: Date | null
    onboardingComplete: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    emailVerified: number
    name: number
    image: number
    authProvider: number
    createdAt: number
    lastActive: number
    onboardingComplete: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    authProvider?: true
    createdAt?: true
    lastActive?: true
    onboardingComplete?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    authProvider?: true
    createdAt?: true
    lastActive?: true
    onboardingComplete?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    emailVerified?: true
    name?: true
    image?: true
    authProvider?: true
    createdAt?: true
    lastActive?: true
    onboardingComplete?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    emailVerified: Date | null
    name: string | null
    image: string | null
    authProvider: string
    createdAt: Date
    lastActive: Date
    onboardingComplete: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    authProvider?: boolean
    createdAt?: boolean
    lastActive?: boolean
    onboardingComplete?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    situations?: boolean | User$situationsArgs<ExtArgs>
    bucketListItems?: boolean | User$bucketListItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    authProvider?: boolean
    createdAt?: boolean
    lastActive?: boolean
    onboardingComplete?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    emailVerified?: boolean
    name?: boolean
    image?: boolean
    authProvider?: boolean
    createdAt?: boolean
    lastActive?: boolean
    onboardingComplete?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    situations?: boolean | User$situationsArgs<ExtArgs>
    bucketListItems?: boolean | User$bucketListItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      situations: Prisma.$UserSituationPayload<ExtArgs>[]
      bucketListItems: Prisma.$BucketListItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      emailVerified: Date | null
      name: string | null
      image: string | null
      authProvider: string
      createdAt: Date
      lastActive: Date
      onboardingComplete: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    situations<T extends User$situationsArgs<ExtArgs> = {}>(args?: Subset<T, User$situationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findMany"> | Null>
    bucketListItems<T extends User$bucketListItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$bucketListItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastActive: FieldRef<"User", 'DateTime'>
    readonly onboardingComplete: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.situations
   */
  export type User$situationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    where?: UserSituationWhereInput
    orderBy?: UserSituationOrderByWithRelationInput | UserSituationOrderByWithRelationInput[]
    cursor?: UserSituationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSituationScalarFieldEnum | UserSituationScalarFieldEnum[]
  }

  /**
   * User.bucketListItems
   */
  export type User$bucketListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    where?: BucketListItemWhereInput
    orderBy?: BucketListItemOrderByWithRelationInput | BucketListItemOrderByWithRelationInput[]
    cursor?: BucketListItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BucketListItemScalarFieldEnum | BucketListItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSituation
   */

  export type AggregateUserSituation = {
    _count: UserSituationCountAggregateOutputType | null
    _avg: UserSituationAvgAggregateOutputType | null
    _sum: UserSituationSumAggregateOutputType | null
    _min: UserSituationMinAggregateOutputType | null
    _max: UserSituationMaxAggregateOutputType | null
  }

  export type UserSituationAvgAggregateOutputType = {
    version: number | null
  }

  export type UserSituationSumAggregateOutputType = {
    version: number | null
  }

  export type UserSituationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type UserSituationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    version: number | null
    createdAt: Date | null
  }

  export type UserSituationCountAggregateOutputType = {
    id: number
    userId: number
    version: number
    data: number
    createdAt: number
    _all: number
  }


  export type UserSituationAvgAggregateInputType = {
    version?: true
  }

  export type UserSituationSumAggregateInputType = {
    version?: true
  }

  export type UserSituationMinAggregateInputType = {
    id?: true
    userId?: true
    version?: true
    createdAt?: true
  }

  export type UserSituationMaxAggregateInputType = {
    id?: true
    userId?: true
    version?: true
    createdAt?: true
  }

  export type UserSituationCountAggregateInputType = {
    id?: true
    userId?: true
    version?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type UserSituationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSituation to aggregate.
     */
    where?: UserSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSituations to fetch.
     */
    orderBy?: UserSituationOrderByWithRelationInput | UserSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSituations
    **/
    _count?: true | UserSituationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSituationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSituationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSituationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSituationMaxAggregateInputType
  }

  export type GetUserSituationAggregateType<T extends UserSituationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSituation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSituation[P]>
      : GetScalarType<T[P], AggregateUserSituation[P]>
  }




  export type UserSituationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSituationWhereInput
    orderBy?: UserSituationOrderByWithAggregationInput | UserSituationOrderByWithAggregationInput[]
    by: UserSituationScalarFieldEnum[] | UserSituationScalarFieldEnum
    having?: UserSituationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSituationCountAggregateInputType | true
    _avg?: UserSituationAvgAggregateInputType
    _sum?: UserSituationSumAggregateInputType
    _min?: UserSituationMinAggregateInputType
    _max?: UserSituationMaxAggregateInputType
  }

  export type UserSituationGroupByOutputType = {
    id: string
    userId: string
    version: number
    data: JsonValue
    createdAt: Date
    _count: UserSituationCountAggregateOutputType | null
    _avg: UserSituationAvgAggregateOutputType | null
    _sum: UserSituationSumAggregateOutputType | null
    _min: UserSituationMinAggregateOutputType | null
    _max: UserSituationMaxAggregateOutputType | null
  }

  type GetUserSituationGroupByPayload<T extends UserSituationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSituationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSituationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSituationGroupByOutputType[P]>
            : GetScalarType<T[P], UserSituationGroupByOutputType[P]>
        }
      >
    >


  export type UserSituationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    version?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSituation"]>

  export type UserSituationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    version?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSituation"]>

  export type UserSituationSelectScalar = {
    id?: boolean
    userId?: boolean
    version?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type UserSituationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSituationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSituationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSituation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      version: number
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["userSituation"]>
    composites: {}
  }

  type UserSituationGetPayload<S extends boolean | null | undefined | UserSituationDefaultArgs> = $Result.GetResult<Prisma.$UserSituationPayload, S>

  type UserSituationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserSituationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserSituationCountAggregateInputType | true
    }

  export interface UserSituationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSituation'], meta: { name: 'UserSituation' } }
    /**
     * Find zero or one UserSituation that matches the filter.
     * @param {UserSituationFindUniqueArgs} args - Arguments to find a UserSituation
     * @example
     * // Get one UserSituation
     * const userSituation = await prisma.userSituation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSituationFindUniqueArgs>(args: SelectSubset<T, UserSituationFindUniqueArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserSituation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserSituationFindUniqueOrThrowArgs} args - Arguments to find a UserSituation
     * @example
     * // Get one UserSituation
     * const userSituation = await prisma.userSituation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSituationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSituationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserSituation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationFindFirstArgs} args - Arguments to find a UserSituation
     * @example
     * // Get one UserSituation
     * const userSituation = await prisma.userSituation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSituationFindFirstArgs>(args?: SelectSubset<T, UserSituationFindFirstArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserSituation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationFindFirstOrThrowArgs} args - Arguments to find a UserSituation
     * @example
     * // Get one UserSituation
     * const userSituation = await prisma.userSituation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSituationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSituationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserSituations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSituations
     * const userSituations = await prisma.userSituation.findMany()
     * 
     * // Get first 10 UserSituations
     * const userSituations = await prisma.userSituation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSituationWithIdOnly = await prisma.userSituation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSituationFindManyArgs>(args?: SelectSubset<T, UserSituationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserSituation.
     * @param {UserSituationCreateArgs} args - Arguments to create a UserSituation.
     * @example
     * // Create one UserSituation
     * const UserSituation = await prisma.userSituation.create({
     *   data: {
     *     // ... data to create a UserSituation
     *   }
     * })
     * 
     */
    create<T extends UserSituationCreateArgs>(args: SelectSubset<T, UserSituationCreateArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserSituations.
     * @param {UserSituationCreateManyArgs} args - Arguments to create many UserSituations.
     * @example
     * // Create many UserSituations
     * const userSituation = await prisma.userSituation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSituationCreateManyArgs>(args?: SelectSubset<T, UserSituationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSituations and returns the data saved in the database.
     * @param {UserSituationCreateManyAndReturnArgs} args - Arguments to create many UserSituations.
     * @example
     * // Create many UserSituations
     * const userSituation = await prisma.userSituation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSituations and only return the `id`
     * const userSituationWithIdOnly = await prisma.userSituation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSituationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSituationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserSituation.
     * @param {UserSituationDeleteArgs} args - Arguments to delete one UserSituation.
     * @example
     * // Delete one UserSituation
     * const UserSituation = await prisma.userSituation.delete({
     *   where: {
     *     // ... filter to delete one UserSituation
     *   }
     * })
     * 
     */
    delete<T extends UserSituationDeleteArgs>(args: SelectSubset<T, UserSituationDeleteArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserSituation.
     * @param {UserSituationUpdateArgs} args - Arguments to update one UserSituation.
     * @example
     * // Update one UserSituation
     * const userSituation = await prisma.userSituation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSituationUpdateArgs>(args: SelectSubset<T, UserSituationUpdateArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserSituations.
     * @param {UserSituationDeleteManyArgs} args - Arguments to filter UserSituations to delete.
     * @example
     * // Delete a few UserSituations
     * const { count } = await prisma.userSituation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSituationDeleteManyArgs>(args?: SelectSubset<T, UserSituationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSituations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSituations
     * const userSituation = await prisma.userSituation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSituationUpdateManyArgs>(args: SelectSubset<T, UserSituationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSituation.
     * @param {UserSituationUpsertArgs} args - Arguments to update or create a UserSituation.
     * @example
     * // Update or create a UserSituation
     * const userSituation = await prisma.userSituation.upsert({
     *   create: {
     *     // ... data to create a UserSituation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSituation we want to update
     *   }
     * })
     */
    upsert<T extends UserSituationUpsertArgs>(args: SelectSubset<T, UserSituationUpsertArgs<ExtArgs>>): Prisma__UserSituationClient<$Result.GetResult<Prisma.$UserSituationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserSituations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationCountArgs} args - Arguments to filter UserSituations to count.
     * @example
     * // Count the number of UserSituations
     * const count = await prisma.userSituation.count({
     *   where: {
     *     // ... the filter for the UserSituations we want to count
     *   }
     * })
    **/
    count<T extends UserSituationCountArgs>(
      args?: Subset<T, UserSituationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSituationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSituation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSituationAggregateArgs>(args: Subset<T, UserSituationAggregateArgs>): Prisma.PrismaPromise<GetUserSituationAggregateType<T>>

    /**
     * Group by UserSituation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSituationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSituationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSituationGroupByArgs['orderBy'] }
        : { orderBy?: UserSituationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSituationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSituationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSituation model
   */
  readonly fields: UserSituationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSituation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSituationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSituation model
   */ 
  interface UserSituationFieldRefs {
    readonly id: FieldRef<"UserSituation", 'String'>
    readonly userId: FieldRef<"UserSituation", 'String'>
    readonly version: FieldRef<"UserSituation", 'Int'>
    readonly data: FieldRef<"UserSituation", 'Json'>
    readonly createdAt: FieldRef<"UserSituation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSituation findUnique
   */
  export type UserSituationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter, which UserSituation to fetch.
     */
    where: UserSituationWhereUniqueInput
  }

  /**
   * UserSituation findUniqueOrThrow
   */
  export type UserSituationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter, which UserSituation to fetch.
     */
    where: UserSituationWhereUniqueInput
  }

  /**
   * UserSituation findFirst
   */
  export type UserSituationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter, which UserSituation to fetch.
     */
    where?: UserSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSituations to fetch.
     */
    orderBy?: UserSituationOrderByWithRelationInput | UserSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSituations.
     */
    cursor?: UserSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSituations.
     */
    distinct?: UserSituationScalarFieldEnum | UserSituationScalarFieldEnum[]
  }

  /**
   * UserSituation findFirstOrThrow
   */
  export type UserSituationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter, which UserSituation to fetch.
     */
    where?: UserSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSituations to fetch.
     */
    orderBy?: UserSituationOrderByWithRelationInput | UserSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSituations.
     */
    cursor?: UserSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSituations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSituations.
     */
    distinct?: UserSituationScalarFieldEnum | UserSituationScalarFieldEnum[]
  }

  /**
   * UserSituation findMany
   */
  export type UserSituationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter, which UserSituations to fetch.
     */
    where?: UserSituationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSituations to fetch.
     */
    orderBy?: UserSituationOrderByWithRelationInput | UserSituationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSituations.
     */
    cursor?: UserSituationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSituations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSituations.
     */
    skip?: number
    distinct?: UserSituationScalarFieldEnum | UserSituationScalarFieldEnum[]
  }

  /**
   * UserSituation create
   */
  export type UserSituationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSituation.
     */
    data: XOR<UserSituationCreateInput, UserSituationUncheckedCreateInput>
  }

  /**
   * UserSituation createMany
   */
  export type UserSituationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSituations.
     */
    data: UserSituationCreateManyInput | UserSituationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSituation createManyAndReturn
   */
  export type UserSituationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserSituations.
     */
    data: UserSituationCreateManyInput | UserSituationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSituation update
   */
  export type UserSituationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSituation.
     */
    data: XOR<UserSituationUpdateInput, UserSituationUncheckedUpdateInput>
    /**
     * Choose, which UserSituation to update.
     */
    where: UserSituationWhereUniqueInput
  }

  /**
   * UserSituation updateMany
   */
  export type UserSituationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSituations.
     */
    data: XOR<UserSituationUpdateManyMutationInput, UserSituationUncheckedUpdateManyInput>
    /**
     * Filter which UserSituations to update
     */
    where?: UserSituationWhereInput
  }

  /**
   * UserSituation upsert
   */
  export type UserSituationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSituation to update in case it exists.
     */
    where: UserSituationWhereUniqueInput
    /**
     * In case the UserSituation found by the `where` argument doesn't exist, create a new UserSituation with this data.
     */
    create: XOR<UserSituationCreateInput, UserSituationUncheckedCreateInput>
    /**
     * In case the UserSituation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSituationUpdateInput, UserSituationUncheckedUpdateInput>
  }

  /**
   * UserSituation delete
   */
  export type UserSituationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
    /**
     * Filter which UserSituation to delete.
     */
    where: UserSituationWhereUniqueInput
  }

  /**
   * UserSituation deleteMany
   */
  export type UserSituationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSituations to delete
     */
    where?: UserSituationWhereInput
  }

  /**
   * UserSituation without action
   */
  export type UserSituationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSituation
     */
    select?: UserSituationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSituationInclude<ExtArgs> | null
  }


  /**
   * Model BucketListItem
   */

  export type AggregateBucketListItem = {
    _count: BucketListItemCountAggregateOutputType | null
    _avg: BucketListItemAvgAggregateOutputType | null
    _sum: BucketListItemSumAggregateOutputType | null
    _min: BucketListItemMinAggregateOutputType | null
    _max: BucketListItemMaxAggregateOutputType | null
  }

  export type BucketListItemAvgAggregateOutputType = {
    priority: number | null
    ageWindowMin: number | null
    ageWindowMax: number | null
    doabilityScore: number | null
  }

  export type BucketListItemSumAggregateOutputType = {
    priority: number | null
    ageWindowMin: number | null
    ageWindowMax: number | null
    doabilityScore: number | null
  }

  export type BucketListItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    priority: number | null
    status: $Enums.ItemStatus | null
    type: $Enums.ItemType | null
    bestSeason: string | null
    ageWindowMin: number | null
    ageWindowMax: number | null
    costEstimate: $Enums.CostTier | null
    effortLevel: $Enums.EffortTier | null
    timeHorizon: $Enums.TimeHorizon | null
    doabilityScore: number | null
    aiReasoning: string | null
    imageUrl: string | null
    completedAt: Date | null
    completionPhotoUrl: string | null
    completionNote: string | null
    source: $Enums.ItemSource | null
    seedItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketListItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    priority: number | null
    status: $Enums.ItemStatus | null
    type: $Enums.ItemType | null
    bestSeason: string | null
    ageWindowMin: number | null
    ageWindowMax: number | null
    costEstimate: $Enums.CostTier | null
    effortLevel: $Enums.EffortTier | null
    timeHorizon: $Enums.TimeHorizon | null
    doabilityScore: number | null
    aiReasoning: string | null
    imageUrl: string | null
    completedAt: Date | null
    completionPhotoUrl: string | null
    completionNote: string | null
    source: $Enums.ItemSource | null
    seedItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BucketListItemCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    priority: number
    status: number
    type: number
    bestSeason: number
    ageWindowMin: number
    ageWindowMax: number
    costEstimate: number
    effortLevel: number
    timeHorizon: number
    constraints: number
    doabilityScore: number
    aiReasoning: number
    imageUrl: number
    completedAt: number
    completionPhotoUrl: number
    completionNote: number
    source: number
    seedItemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BucketListItemAvgAggregateInputType = {
    priority?: true
    ageWindowMin?: true
    ageWindowMax?: true
    doabilityScore?: true
  }

  export type BucketListItemSumAggregateInputType = {
    priority?: true
    ageWindowMin?: true
    ageWindowMax?: true
    doabilityScore?: true
  }

  export type BucketListItemMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    type?: true
    bestSeason?: true
    ageWindowMin?: true
    ageWindowMax?: true
    costEstimate?: true
    effortLevel?: true
    timeHorizon?: true
    doabilityScore?: true
    aiReasoning?: true
    imageUrl?: true
    completedAt?: true
    completionPhotoUrl?: true
    completionNote?: true
    source?: true
    seedItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketListItemMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    type?: true
    bestSeason?: true
    ageWindowMin?: true
    ageWindowMax?: true
    costEstimate?: true
    effortLevel?: true
    timeHorizon?: true
    doabilityScore?: true
    aiReasoning?: true
    imageUrl?: true
    completedAt?: true
    completionPhotoUrl?: true
    completionNote?: true
    source?: true
    seedItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BucketListItemCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    priority?: true
    status?: true
    type?: true
    bestSeason?: true
    ageWindowMin?: true
    ageWindowMax?: true
    costEstimate?: true
    effortLevel?: true
    timeHorizon?: true
    constraints?: true
    doabilityScore?: true
    aiReasoning?: true
    imageUrl?: true
    completedAt?: true
    completionPhotoUrl?: true
    completionNote?: true
    source?: true
    seedItemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BucketListItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketListItem to aggregate.
     */
    where?: BucketListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketListItems to fetch.
     */
    orderBy?: BucketListItemOrderByWithRelationInput | BucketListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BucketListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BucketListItems
    **/
    _count?: true | BucketListItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BucketListItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BucketListItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketListItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketListItemMaxAggregateInputType
  }

  export type GetBucketListItemAggregateType<T extends BucketListItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBucketListItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBucketListItem[P]>
      : GetScalarType<T[P], AggregateBucketListItem[P]>
  }




  export type BucketListItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BucketListItemWhereInput
    orderBy?: BucketListItemOrderByWithAggregationInput | BucketListItemOrderByWithAggregationInput[]
    by: BucketListItemScalarFieldEnum[] | BucketListItemScalarFieldEnum
    having?: BucketListItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketListItemCountAggregateInputType | true
    _avg?: BucketListItemAvgAggregateInputType
    _sum?: BucketListItemSumAggregateInputType
    _min?: BucketListItemMinAggregateInputType
    _max?: BucketListItemMaxAggregateInputType
  }

  export type BucketListItemGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    priority: number
    status: $Enums.ItemStatus
    type: $Enums.ItemType | null
    bestSeason: string | null
    ageWindowMin: number | null
    ageWindowMax: number | null
    costEstimate: $Enums.CostTier | null
    effortLevel: $Enums.EffortTier | null
    timeHorizon: $Enums.TimeHorizon | null
    constraints: string[]
    doabilityScore: number | null
    aiReasoning: string | null
    imageUrl: string | null
    completedAt: Date | null
    completionPhotoUrl: string | null
    completionNote: string | null
    source: $Enums.ItemSource
    seedItemId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BucketListItemCountAggregateOutputType | null
    _avg: BucketListItemAvgAggregateOutputType | null
    _sum: BucketListItemSumAggregateOutputType | null
    _min: BucketListItemMinAggregateOutputType | null
    _max: BucketListItemMaxAggregateOutputType | null
  }

  type GetBucketListItemGroupByPayload<T extends BucketListItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketListItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketListItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketListItemGroupByOutputType[P]>
            : GetScalarType<T[P], BucketListItemGroupByOutputType[P]>
        }
      >
    >


  export type BucketListItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    bestSeason?: boolean
    ageWindowMin?: boolean
    ageWindowMax?: boolean
    costEstimate?: boolean
    effortLevel?: boolean
    timeHorizon?: boolean
    constraints?: boolean
    doabilityScore?: boolean
    aiReasoning?: boolean
    imageUrl?: boolean
    completedAt?: boolean
    completionPhotoUrl?: boolean
    completionNote?: boolean
    source?: boolean
    seedItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketListItem"]>

  export type BucketListItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    bestSeason?: boolean
    ageWindowMin?: boolean
    ageWindowMax?: boolean
    costEstimate?: boolean
    effortLevel?: boolean
    timeHorizon?: boolean
    constraints?: boolean
    doabilityScore?: boolean
    aiReasoning?: boolean
    imageUrl?: boolean
    completedAt?: boolean
    completionPhotoUrl?: boolean
    completionNote?: boolean
    source?: boolean
    seedItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bucketListItem"]>

  export type BucketListItemSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    bestSeason?: boolean
    ageWindowMin?: boolean
    ageWindowMax?: boolean
    costEstimate?: boolean
    effortLevel?: boolean
    timeHorizon?: boolean
    constraints?: boolean
    doabilityScore?: boolean
    aiReasoning?: boolean
    imageUrl?: boolean
    completedAt?: boolean
    completionPhotoUrl?: boolean
    completionNote?: boolean
    source?: boolean
    seedItemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BucketListItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BucketListItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BucketListItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BucketListItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      priority: number
      status: $Enums.ItemStatus
      type: $Enums.ItemType | null
      bestSeason: string | null
      ageWindowMin: number | null
      ageWindowMax: number | null
      costEstimate: $Enums.CostTier | null
      effortLevel: $Enums.EffortTier | null
      timeHorizon: $Enums.TimeHorizon | null
      constraints: string[]
      doabilityScore: number | null
      aiReasoning: string | null
      imageUrl: string | null
      completedAt: Date | null
      completionPhotoUrl: string | null
      completionNote: string | null
      source: $Enums.ItemSource
      seedItemId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bucketListItem"]>
    composites: {}
  }

  type BucketListItemGetPayload<S extends boolean | null | undefined | BucketListItemDefaultArgs> = $Result.GetResult<Prisma.$BucketListItemPayload, S>

  type BucketListItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BucketListItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BucketListItemCountAggregateInputType | true
    }

  export interface BucketListItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BucketListItem'], meta: { name: 'BucketListItem' } }
    /**
     * Find zero or one BucketListItem that matches the filter.
     * @param {BucketListItemFindUniqueArgs} args - Arguments to find a BucketListItem
     * @example
     * // Get one BucketListItem
     * const bucketListItem = await prisma.bucketListItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BucketListItemFindUniqueArgs>(args: SelectSubset<T, BucketListItemFindUniqueArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BucketListItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BucketListItemFindUniqueOrThrowArgs} args - Arguments to find a BucketListItem
     * @example
     * // Get one BucketListItem
     * const bucketListItem = await prisma.bucketListItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BucketListItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BucketListItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BucketListItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemFindFirstArgs} args - Arguments to find a BucketListItem
     * @example
     * // Get one BucketListItem
     * const bucketListItem = await prisma.bucketListItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BucketListItemFindFirstArgs>(args?: SelectSubset<T, BucketListItemFindFirstArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BucketListItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemFindFirstOrThrowArgs} args - Arguments to find a BucketListItem
     * @example
     * // Get one BucketListItem
     * const bucketListItem = await prisma.bucketListItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BucketListItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BucketListItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BucketListItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BucketListItems
     * const bucketListItems = await prisma.bucketListItem.findMany()
     * 
     * // Get first 10 BucketListItems
     * const bucketListItems = await prisma.bucketListItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bucketListItemWithIdOnly = await prisma.bucketListItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BucketListItemFindManyArgs>(args?: SelectSubset<T, BucketListItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BucketListItem.
     * @param {BucketListItemCreateArgs} args - Arguments to create a BucketListItem.
     * @example
     * // Create one BucketListItem
     * const BucketListItem = await prisma.bucketListItem.create({
     *   data: {
     *     // ... data to create a BucketListItem
     *   }
     * })
     * 
     */
    create<T extends BucketListItemCreateArgs>(args: SelectSubset<T, BucketListItemCreateArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BucketListItems.
     * @param {BucketListItemCreateManyArgs} args - Arguments to create many BucketListItems.
     * @example
     * // Create many BucketListItems
     * const bucketListItem = await prisma.bucketListItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BucketListItemCreateManyArgs>(args?: SelectSubset<T, BucketListItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BucketListItems and returns the data saved in the database.
     * @param {BucketListItemCreateManyAndReturnArgs} args - Arguments to create many BucketListItems.
     * @example
     * // Create many BucketListItems
     * const bucketListItem = await prisma.bucketListItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BucketListItems and only return the `id`
     * const bucketListItemWithIdOnly = await prisma.bucketListItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BucketListItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BucketListItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BucketListItem.
     * @param {BucketListItemDeleteArgs} args - Arguments to delete one BucketListItem.
     * @example
     * // Delete one BucketListItem
     * const BucketListItem = await prisma.bucketListItem.delete({
     *   where: {
     *     // ... filter to delete one BucketListItem
     *   }
     * })
     * 
     */
    delete<T extends BucketListItemDeleteArgs>(args: SelectSubset<T, BucketListItemDeleteArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BucketListItem.
     * @param {BucketListItemUpdateArgs} args - Arguments to update one BucketListItem.
     * @example
     * // Update one BucketListItem
     * const bucketListItem = await prisma.bucketListItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BucketListItemUpdateArgs>(args: SelectSubset<T, BucketListItemUpdateArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BucketListItems.
     * @param {BucketListItemDeleteManyArgs} args - Arguments to filter BucketListItems to delete.
     * @example
     * // Delete a few BucketListItems
     * const { count } = await prisma.bucketListItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BucketListItemDeleteManyArgs>(args?: SelectSubset<T, BucketListItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BucketListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BucketListItems
     * const bucketListItem = await prisma.bucketListItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BucketListItemUpdateManyArgs>(args: SelectSubset<T, BucketListItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BucketListItem.
     * @param {BucketListItemUpsertArgs} args - Arguments to update or create a BucketListItem.
     * @example
     * // Update or create a BucketListItem
     * const bucketListItem = await prisma.bucketListItem.upsert({
     *   create: {
     *     // ... data to create a BucketListItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BucketListItem we want to update
     *   }
     * })
     */
    upsert<T extends BucketListItemUpsertArgs>(args: SelectSubset<T, BucketListItemUpsertArgs<ExtArgs>>): Prisma__BucketListItemClient<$Result.GetResult<Prisma.$BucketListItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BucketListItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemCountArgs} args - Arguments to filter BucketListItems to count.
     * @example
     * // Count the number of BucketListItems
     * const count = await prisma.bucketListItem.count({
     *   where: {
     *     // ... the filter for the BucketListItems we want to count
     *   }
     * })
    **/
    count<T extends BucketListItemCountArgs>(
      args?: Subset<T, BucketListItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketListItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BucketListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketListItemAggregateArgs>(args: Subset<T, BucketListItemAggregateArgs>): Prisma.PrismaPromise<GetBucketListItemAggregateType<T>>

    /**
     * Group by BucketListItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketListItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BucketListItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BucketListItemGroupByArgs['orderBy'] }
        : { orderBy?: BucketListItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BucketListItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketListItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BucketListItem model
   */
  readonly fields: BucketListItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BucketListItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BucketListItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BucketListItem model
   */ 
  interface BucketListItemFieldRefs {
    readonly id: FieldRef<"BucketListItem", 'String'>
    readonly userId: FieldRef<"BucketListItem", 'String'>
    readonly title: FieldRef<"BucketListItem", 'String'>
    readonly description: FieldRef<"BucketListItem", 'String'>
    readonly priority: FieldRef<"BucketListItem", 'Int'>
    readonly status: FieldRef<"BucketListItem", 'ItemStatus'>
    readonly type: FieldRef<"BucketListItem", 'ItemType'>
    readonly bestSeason: FieldRef<"BucketListItem", 'String'>
    readonly ageWindowMin: FieldRef<"BucketListItem", 'Int'>
    readonly ageWindowMax: FieldRef<"BucketListItem", 'Int'>
    readonly costEstimate: FieldRef<"BucketListItem", 'CostTier'>
    readonly effortLevel: FieldRef<"BucketListItem", 'EffortTier'>
    readonly timeHorizon: FieldRef<"BucketListItem", 'TimeHorizon'>
    readonly constraints: FieldRef<"BucketListItem", 'String[]'>
    readonly doabilityScore: FieldRef<"BucketListItem", 'Int'>
    readonly aiReasoning: FieldRef<"BucketListItem", 'String'>
    readonly imageUrl: FieldRef<"BucketListItem", 'String'>
    readonly completedAt: FieldRef<"BucketListItem", 'DateTime'>
    readonly completionPhotoUrl: FieldRef<"BucketListItem", 'String'>
    readonly completionNote: FieldRef<"BucketListItem", 'String'>
    readonly source: FieldRef<"BucketListItem", 'ItemSource'>
    readonly seedItemId: FieldRef<"BucketListItem", 'String'>
    readonly createdAt: FieldRef<"BucketListItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BucketListItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BucketListItem findUnique
   */
  export type BucketListItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter, which BucketListItem to fetch.
     */
    where: BucketListItemWhereUniqueInput
  }

  /**
   * BucketListItem findUniqueOrThrow
   */
  export type BucketListItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter, which BucketListItem to fetch.
     */
    where: BucketListItemWhereUniqueInput
  }

  /**
   * BucketListItem findFirst
   */
  export type BucketListItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter, which BucketListItem to fetch.
     */
    where?: BucketListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketListItems to fetch.
     */
    orderBy?: BucketListItemOrderByWithRelationInput | BucketListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketListItems.
     */
    cursor?: BucketListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketListItems.
     */
    distinct?: BucketListItemScalarFieldEnum | BucketListItemScalarFieldEnum[]
  }

  /**
   * BucketListItem findFirstOrThrow
   */
  export type BucketListItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter, which BucketListItem to fetch.
     */
    where?: BucketListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketListItems to fetch.
     */
    orderBy?: BucketListItemOrderByWithRelationInput | BucketListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BucketListItems.
     */
    cursor?: BucketListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketListItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BucketListItems.
     */
    distinct?: BucketListItemScalarFieldEnum | BucketListItemScalarFieldEnum[]
  }

  /**
   * BucketListItem findMany
   */
  export type BucketListItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter, which BucketListItems to fetch.
     */
    where?: BucketListItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BucketListItems to fetch.
     */
    orderBy?: BucketListItemOrderByWithRelationInput | BucketListItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BucketListItems.
     */
    cursor?: BucketListItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BucketListItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BucketListItems.
     */
    skip?: number
    distinct?: BucketListItemScalarFieldEnum | BucketListItemScalarFieldEnum[]
  }

  /**
   * BucketListItem create
   */
  export type BucketListItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BucketListItem.
     */
    data: XOR<BucketListItemCreateInput, BucketListItemUncheckedCreateInput>
  }

  /**
   * BucketListItem createMany
   */
  export type BucketListItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BucketListItems.
     */
    data: BucketListItemCreateManyInput | BucketListItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BucketListItem createManyAndReturn
   */
  export type BucketListItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BucketListItems.
     */
    data: BucketListItemCreateManyInput | BucketListItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BucketListItem update
   */
  export type BucketListItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BucketListItem.
     */
    data: XOR<BucketListItemUpdateInput, BucketListItemUncheckedUpdateInput>
    /**
     * Choose, which BucketListItem to update.
     */
    where: BucketListItemWhereUniqueInput
  }

  /**
   * BucketListItem updateMany
   */
  export type BucketListItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BucketListItems.
     */
    data: XOR<BucketListItemUpdateManyMutationInput, BucketListItemUncheckedUpdateManyInput>
    /**
     * Filter which BucketListItems to update
     */
    where?: BucketListItemWhereInput
  }

  /**
   * BucketListItem upsert
   */
  export type BucketListItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BucketListItem to update in case it exists.
     */
    where: BucketListItemWhereUniqueInput
    /**
     * In case the BucketListItem found by the `where` argument doesn't exist, create a new BucketListItem with this data.
     */
    create: XOR<BucketListItemCreateInput, BucketListItemUncheckedCreateInput>
    /**
     * In case the BucketListItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BucketListItemUpdateInput, BucketListItemUncheckedUpdateInput>
  }

  /**
   * BucketListItem delete
   */
  export type BucketListItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
    /**
     * Filter which BucketListItem to delete.
     */
    where: BucketListItemWhereUniqueInput
  }

  /**
   * BucketListItem deleteMany
   */
  export type BucketListItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BucketListItems to delete
     */
    where?: BucketListItemWhereInput
  }

  /**
   * BucketListItem without action
   */
  export type BucketListItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketListItem
     */
    select?: BucketListItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BucketListItemInclude<ExtArgs> | null
  }


  /**
   * Model SeedLibraryItem
   */

  export type AggregateSeedLibraryItem = {
    _count: SeedLibraryItemCountAggregateOutputType | null
    _avg: SeedLibraryItemAvgAggregateOutputType | null
    _sum: SeedLibraryItemSumAggregateOutputType | null
    _min: SeedLibraryItemMinAggregateOutputType | null
    _max: SeedLibraryItemMaxAggregateOutputType | null
  }

  export type SeedLibraryItemAvgAggregateOutputType = {
    ageRelevanceMin: number | null
    ageRelevanceMax: number | null
    popularityScore: number | null
  }

  export type SeedLibraryItemSumAggregateOutputType = {
    ageRelevanceMin: number | null
    ageRelevanceMax: number | null
    popularityScore: number | null
  }

  export type SeedLibraryItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ItemType | null
    imageKeyword: string | null
    imageUrl: string | null
    ageRelevanceMin: number | null
    ageRelevanceMax: number | null
    costTier: $Enums.CostTier | null
    effortTier: $Enums.EffortTier | null
    timeHorizon: $Enums.TimeHorizon | null
    popularityScore: number | null
    bestSeason: string | null
  }

  export type SeedLibraryItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.ItemType | null
    imageKeyword: string | null
    imageUrl: string | null
    ageRelevanceMin: number | null
    ageRelevanceMax: number | null
    costTier: $Enums.CostTier | null
    effortTier: $Enums.EffortTier | null
    timeHorizon: $Enums.TimeHorizon | null
    popularityScore: number | null
    bestSeason: string | null
  }

  export type SeedLibraryItemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    imageKeyword: number
    imageUrl: number
    ageRelevanceMin: number
    ageRelevanceMax: number
    costTier: number
    effortTier: number
    timeHorizon: number
    popularityScore: number
    bestSeason: number
    constraints: number
    tags: number
    regionRelevance: number
    _all: number
  }


  export type SeedLibraryItemAvgAggregateInputType = {
    ageRelevanceMin?: true
    ageRelevanceMax?: true
    popularityScore?: true
  }

  export type SeedLibraryItemSumAggregateInputType = {
    ageRelevanceMin?: true
    ageRelevanceMax?: true
    popularityScore?: true
  }

  export type SeedLibraryItemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    imageKeyword?: true
    imageUrl?: true
    ageRelevanceMin?: true
    ageRelevanceMax?: true
    costTier?: true
    effortTier?: true
    timeHorizon?: true
    popularityScore?: true
    bestSeason?: true
  }

  export type SeedLibraryItemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    imageKeyword?: true
    imageUrl?: true
    ageRelevanceMin?: true
    ageRelevanceMax?: true
    costTier?: true
    effortTier?: true
    timeHorizon?: true
    popularityScore?: true
    bestSeason?: true
  }

  export type SeedLibraryItemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    imageKeyword?: true
    imageUrl?: true
    ageRelevanceMin?: true
    ageRelevanceMax?: true
    costTier?: true
    effortTier?: true
    timeHorizon?: true
    popularityScore?: true
    bestSeason?: true
    constraints?: true
    tags?: true
    regionRelevance?: true
    _all?: true
  }

  export type SeedLibraryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedLibraryItem to aggregate.
     */
    where?: SeedLibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLibraryItems to fetch.
     */
    orderBy?: SeedLibraryItemOrderByWithRelationInput | SeedLibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeedLibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeedLibraryItems
    **/
    _count?: true | SeedLibraryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeedLibraryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeedLibraryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeedLibraryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeedLibraryItemMaxAggregateInputType
  }

  export type GetSeedLibraryItemAggregateType<T extends SeedLibraryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSeedLibraryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeedLibraryItem[P]>
      : GetScalarType<T[P], AggregateSeedLibraryItem[P]>
  }




  export type SeedLibraryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeedLibraryItemWhereInput
    orderBy?: SeedLibraryItemOrderByWithAggregationInput | SeedLibraryItemOrderByWithAggregationInput[]
    by: SeedLibraryItemScalarFieldEnum[] | SeedLibraryItemScalarFieldEnum
    having?: SeedLibraryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeedLibraryItemCountAggregateInputType | true
    _avg?: SeedLibraryItemAvgAggregateInputType
    _sum?: SeedLibraryItemSumAggregateInputType
    _min?: SeedLibraryItemMinAggregateInputType
    _max?: SeedLibraryItemMaxAggregateInputType
  }

  export type SeedLibraryItemGroupByOutputType = {
    id: string
    title: string
    description: string
    type: $Enums.ItemType
    imageKeyword: string
    imageUrl: string | null
    ageRelevanceMin: number
    ageRelevanceMax: number
    costTier: $Enums.CostTier
    effortTier: $Enums.EffortTier
    timeHorizon: $Enums.TimeHorizon
    popularityScore: number
    bestSeason: string
    constraints: string[]
    tags: string[]
    regionRelevance: string[]
    _count: SeedLibraryItemCountAggregateOutputType | null
    _avg: SeedLibraryItemAvgAggregateOutputType | null
    _sum: SeedLibraryItemSumAggregateOutputType | null
    _min: SeedLibraryItemMinAggregateOutputType | null
    _max: SeedLibraryItemMaxAggregateOutputType | null
  }

  type GetSeedLibraryItemGroupByPayload<T extends SeedLibraryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeedLibraryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeedLibraryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeedLibraryItemGroupByOutputType[P]>
            : GetScalarType<T[P], SeedLibraryItemGroupByOutputType[P]>
        }
      >
    >


  export type SeedLibraryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    imageKeyword?: boolean
    imageUrl?: boolean
    ageRelevanceMin?: boolean
    ageRelevanceMax?: boolean
    costTier?: boolean
    effortTier?: boolean
    timeHorizon?: boolean
    popularityScore?: boolean
    bestSeason?: boolean
    constraints?: boolean
    tags?: boolean
    regionRelevance?: boolean
  }, ExtArgs["result"]["seedLibraryItem"]>

  export type SeedLibraryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    imageKeyword?: boolean
    imageUrl?: boolean
    ageRelevanceMin?: boolean
    ageRelevanceMax?: boolean
    costTier?: boolean
    effortTier?: boolean
    timeHorizon?: boolean
    popularityScore?: boolean
    bestSeason?: boolean
    constraints?: boolean
    tags?: boolean
    regionRelevance?: boolean
  }, ExtArgs["result"]["seedLibraryItem"]>

  export type SeedLibraryItemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    imageKeyword?: boolean
    imageUrl?: boolean
    ageRelevanceMin?: boolean
    ageRelevanceMax?: boolean
    costTier?: boolean
    effortTier?: boolean
    timeHorizon?: boolean
    popularityScore?: boolean
    bestSeason?: boolean
    constraints?: boolean
    tags?: boolean
    regionRelevance?: boolean
  }


  export type $SeedLibraryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeedLibraryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      type: $Enums.ItemType
      imageKeyword: string
      imageUrl: string | null
      ageRelevanceMin: number
      ageRelevanceMax: number
      costTier: $Enums.CostTier
      effortTier: $Enums.EffortTier
      timeHorizon: $Enums.TimeHorizon
      popularityScore: number
      bestSeason: string
      constraints: string[]
      tags: string[]
      regionRelevance: string[]
    }, ExtArgs["result"]["seedLibraryItem"]>
    composites: {}
  }

  type SeedLibraryItemGetPayload<S extends boolean | null | undefined | SeedLibraryItemDefaultArgs> = $Result.GetResult<Prisma.$SeedLibraryItemPayload, S>

  type SeedLibraryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeedLibraryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeedLibraryItemCountAggregateInputType | true
    }

  export interface SeedLibraryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeedLibraryItem'], meta: { name: 'SeedLibraryItem' } }
    /**
     * Find zero or one SeedLibraryItem that matches the filter.
     * @param {SeedLibraryItemFindUniqueArgs} args - Arguments to find a SeedLibraryItem
     * @example
     * // Get one SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeedLibraryItemFindUniqueArgs>(args: SelectSubset<T, SeedLibraryItemFindUniqueArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SeedLibraryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeedLibraryItemFindUniqueOrThrowArgs} args - Arguments to find a SeedLibraryItem
     * @example
     * // Get one SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeedLibraryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SeedLibraryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SeedLibraryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemFindFirstArgs} args - Arguments to find a SeedLibraryItem
     * @example
     * // Get one SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeedLibraryItemFindFirstArgs>(args?: SelectSubset<T, SeedLibraryItemFindFirstArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SeedLibraryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemFindFirstOrThrowArgs} args - Arguments to find a SeedLibraryItem
     * @example
     * // Get one SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeedLibraryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SeedLibraryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SeedLibraryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeedLibraryItems
     * const seedLibraryItems = await prisma.seedLibraryItem.findMany()
     * 
     * // Get first 10 SeedLibraryItems
     * const seedLibraryItems = await prisma.seedLibraryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seedLibraryItemWithIdOnly = await prisma.seedLibraryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeedLibraryItemFindManyArgs>(args?: SelectSubset<T, SeedLibraryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SeedLibraryItem.
     * @param {SeedLibraryItemCreateArgs} args - Arguments to create a SeedLibraryItem.
     * @example
     * // Create one SeedLibraryItem
     * const SeedLibraryItem = await prisma.seedLibraryItem.create({
     *   data: {
     *     // ... data to create a SeedLibraryItem
     *   }
     * })
     * 
     */
    create<T extends SeedLibraryItemCreateArgs>(args: SelectSubset<T, SeedLibraryItemCreateArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SeedLibraryItems.
     * @param {SeedLibraryItemCreateManyArgs} args - Arguments to create many SeedLibraryItems.
     * @example
     * // Create many SeedLibraryItems
     * const seedLibraryItem = await prisma.seedLibraryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeedLibraryItemCreateManyArgs>(args?: SelectSubset<T, SeedLibraryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeedLibraryItems and returns the data saved in the database.
     * @param {SeedLibraryItemCreateManyAndReturnArgs} args - Arguments to create many SeedLibraryItems.
     * @example
     * // Create many SeedLibraryItems
     * const seedLibraryItem = await prisma.seedLibraryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeedLibraryItems and only return the `id`
     * const seedLibraryItemWithIdOnly = await prisma.seedLibraryItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeedLibraryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SeedLibraryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SeedLibraryItem.
     * @param {SeedLibraryItemDeleteArgs} args - Arguments to delete one SeedLibraryItem.
     * @example
     * // Delete one SeedLibraryItem
     * const SeedLibraryItem = await prisma.seedLibraryItem.delete({
     *   where: {
     *     // ... filter to delete one SeedLibraryItem
     *   }
     * })
     * 
     */
    delete<T extends SeedLibraryItemDeleteArgs>(args: SelectSubset<T, SeedLibraryItemDeleteArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SeedLibraryItem.
     * @param {SeedLibraryItemUpdateArgs} args - Arguments to update one SeedLibraryItem.
     * @example
     * // Update one SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeedLibraryItemUpdateArgs>(args: SelectSubset<T, SeedLibraryItemUpdateArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SeedLibraryItems.
     * @param {SeedLibraryItemDeleteManyArgs} args - Arguments to filter SeedLibraryItems to delete.
     * @example
     * // Delete a few SeedLibraryItems
     * const { count } = await prisma.seedLibraryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeedLibraryItemDeleteManyArgs>(args?: SelectSubset<T, SeedLibraryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeedLibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeedLibraryItems
     * const seedLibraryItem = await prisma.seedLibraryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeedLibraryItemUpdateManyArgs>(args: SelectSubset<T, SeedLibraryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeedLibraryItem.
     * @param {SeedLibraryItemUpsertArgs} args - Arguments to update or create a SeedLibraryItem.
     * @example
     * // Update or create a SeedLibraryItem
     * const seedLibraryItem = await prisma.seedLibraryItem.upsert({
     *   create: {
     *     // ... data to create a SeedLibraryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeedLibraryItem we want to update
     *   }
     * })
     */
    upsert<T extends SeedLibraryItemUpsertArgs>(args: SelectSubset<T, SeedLibraryItemUpsertArgs<ExtArgs>>): Prisma__SeedLibraryItemClient<$Result.GetResult<Prisma.$SeedLibraryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SeedLibraryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemCountArgs} args - Arguments to filter SeedLibraryItems to count.
     * @example
     * // Count the number of SeedLibraryItems
     * const count = await prisma.seedLibraryItem.count({
     *   where: {
     *     // ... the filter for the SeedLibraryItems we want to count
     *   }
     * })
    **/
    count<T extends SeedLibraryItemCountArgs>(
      args?: Subset<T, SeedLibraryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeedLibraryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeedLibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeedLibraryItemAggregateArgs>(args: Subset<T, SeedLibraryItemAggregateArgs>): Prisma.PrismaPromise<GetSeedLibraryItemAggregateType<T>>

    /**
     * Group by SeedLibraryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeedLibraryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeedLibraryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeedLibraryItemGroupByArgs['orderBy'] }
        : { orderBy?: SeedLibraryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeedLibraryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeedLibraryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeedLibraryItem model
   */
  readonly fields: SeedLibraryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeedLibraryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeedLibraryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeedLibraryItem model
   */ 
  interface SeedLibraryItemFieldRefs {
    readonly id: FieldRef<"SeedLibraryItem", 'String'>
    readonly title: FieldRef<"SeedLibraryItem", 'String'>
    readonly description: FieldRef<"SeedLibraryItem", 'String'>
    readonly type: FieldRef<"SeedLibraryItem", 'ItemType'>
    readonly imageKeyword: FieldRef<"SeedLibraryItem", 'String'>
    readonly imageUrl: FieldRef<"SeedLibraryItem", 'String'>
    readonly ageRelevanceMin: FieldRef<"SeedLibraryItem", 'Int'>
    readonly ageRelevanceMax: FieldRef<"SeedLibraryItem", 'Int'>
    readonly costTier: FieldRef<"SeedLibraryItem", 'CostTier'>
    readonly effortTier: FieldRef<"SeedLibraryItem", 'EffortTier'>
    readonly timeHorizon: FieldRef<"SeedLibraryItem", 'TimeHorizon'>
    readonly popularityScore: FieldRef<"SeedLibraryItem", 'Int'>
    readonly bestSeason: FieldRef<"SeedLibraryItem", 'String'>
    readonly constraints: FieldRef<"SeedLibraryItem", 'String[]'>
    readonly tags: FieldRef<"SeedLibraryItem", 'String[]'>
    readonly regionRelevance: FieldRef<"SeedLibraryItem", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * SeedLibraryItem findUnique
   */
  export type SeedLibraryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter, which SeedLibraryItem to fetch.
     */
    where: SeedLibraryItemWhereUniqueInput
  }

  /**
   * SeedLibraryItem findUniqueOrThrow
   */
  export type SeedLibraryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter, which SeedLibraryItem to fetch.
     */
    where: SeedLibraryItemWhereUniqueInput
  }

  /**
   * SeedLibraryItem findFirst
   */
  export type SeedLibraryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter, which SeedLibraryItem to fetch.
     */
    where?: SeedLibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLibraryItems to fetch.
     */
    orderBy?: SeedLibraryItemOrderByWithRelationInput | SeedLibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedLibraryItems.
     */
    cursor?: SeedLibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedLibraryItems.
     */
    distinct?: SeedLibraryItemScalarFieldEnum | SeedLibraryItemScalarFieldEnum[]
  }

  /**
   * SeedLibraryItem findFirstOrThrow
   */
  export type SeedLibraryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter, which SeedLibraryItem to fetch.
     */
    where?: SeedLibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLibraryItems to fetch.
     */
    orderBy?: SeedLibraryItemOrderByWithRelationInput | SeedLibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeedLibraryItems.
     */
    cursor?: SeedLibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLibraryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeedLibraryItems.
     */
    distinct?: SeedLibraryItemScalarFieldEnum | SeedLibraryItemScalarFieldEnum[]
  }

  /**
   * SeedLibraryItem findMany
   */
  export type SeedLibraryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter, which SeedLibraryItems to fetch.
     */
    where?: SeedLibraryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeedLibraryItems to fetch.
     */
    orderBy?: SeedLibraryItemOrderByWithRelationInput | SeedLibraryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeedLibraryItems.
     */
    cursor?: SeedLibraryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeedLibraryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeedLibraryItems.
     */
    skip?: number
    distinct?: SeedLibraryItemScalarFieldEnum | SeedLibraryItemScalarFieldEnum[]
  }

  /**
   * SeedLibraryItem create
   */
  export type SeedLibraryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * The data needed to create a SeedLibraryItem.
     */
    data: XOR<SeedLibraryItemCreateInput, SeedLibraryItemUncheckedCreateInput>
  }

  /**
   * SeedLibraryItem createMany
   */
  export type SeedLibraryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeedLibraryItems.
     */
    data: SeedLibraryItemCreateManyInput | SeedLibraryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeedLibraryItem createManyAndReturn
   */
  export type SeedLibraryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SeedLibraryItems.
     */
    data: SeedLibraryItemCreateManyInput | SeedLibraryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeedLibraryItem update
   */
  export type SeedLibraryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * The data needed to update a SeedLibraryItem.
     */
    data: XOR<SeedLibraryItemUpdateInput, SeedLibraryItemUncheckedUpdateInput>
    /**
     * Choose, which SeedLibraryItem to update.
     */
    where: SeedLibraryItemWhereUniqueInput
  }

  /**
   * SeedLibraryItem updateMany
   */
  export type SeedLibraryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeedLibraryItems.
     */
    data: XOR<SeedLibraryItemUpdateManyMutationInput, SeedLibraryItemUncheckedUpdateManyInput>
    /**
     * Filter which SeedLibraryItems to update
     */
    where?: SeedLibraryItemWhereInput
  }

  /**
   * SeedLibraryItem upsert
   */
  export type SeedLibraryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * The filter to search for the SeedLibraryItem to update in case it exists.
     */
    where: SeedLibraryItemWhereUniqueInput
    /**
     * In case the SeedLibraryItem found by the `where` argument doesn't exist, create a new SeedLibraryItem with this data.
     */
    create: XOR<SeedLibraryItemCreateInput, SeedLibraryItemUncheckedCreateInput>
    /**
     * In case the SeedLibraryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeedLibraryItemUpdateInput, SeedLibraryItemUncheckedUpdateInput>
  }

  /**
   * SeedLibraryItem delete
   */
  export type SeedLibraryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
    /**
     * Filter which SeedLibraryItem to delete.
     */
    where: SeedLibraryItemWhereUniqueInput
  }

  /**
   * SeedLibraryItem deleteMany
   */
  export type SeedLibraryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeedLibraryItems to delete
     */
    where?: SeedLibraryItemWhereInput
  }

  /**
   * SeedLibraryItem without action
   */
  export type SeedLibraryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeedLibraryItem
     */
    select?: SeedLibraryItemSelect<ExtArgs> | null
  }


  /**
   * Model BetaSignup
   */

  export type AggregateBetaSignup = {
    _count: BetaSignupCountAggregateOutputType | null
    _min: BetaSignupMinAggregateOutputType | null
    _max: BetaSignupMaxAggregateOutputType | null
  }

  export type BetaSignupMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type BetaSignupMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
  }

  export type BetaSignupCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    _all: number
  }


  export type BetaSignupMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type BetaSignupMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
  }

  export type BetaSignupCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type BetaSignupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetaSignup to aggregate.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BetaSignups
    **/
    _count?: true | BetaSignupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetaSignupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetaSignupMaxAggregateInputType
  }

  export type GetBetaSignupAggregateType<T extends BetaSignupAggregateArgs> = {
        [P in keyof T & keyof AggregateBetaSignup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetaSignup[P]>
      : GetScalarType<T[P], AggregateBetaSignup[P]>
  }




  export type BetaSignupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetaSignupWhereInput
    orderBy?: BetaSignupOrderByWithAggregationInput | BetaSignupOrderByWithAggregationInput[]
    by: BetaSignupScalarFieldEnum[] | BetaSignupScalarFieldEnum
    having?: BetaSignupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetaSignupCountAggregateInputType | true
    _min?: BetaSignupMinAggregateInputType
    _max?: BetaSignupMaxAggregateInputType
  }

  export type BetaSignupGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    _count: BetaSignupCountAggregateOutputType | null
    _min: BetaSignupMinAggregateOutputType | null
    _max: BetaSignupMaxAggregateOutputType | null
  }

  type GetBetaSignupGroupByPayload<T extends BetaSignupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetaSignupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetaSignupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetaSignupGroupByOutputType[P]>
            : GetScalarType<T[P], BetaSignupGroupByOutputType[P]>
        }
      >
    >


  export type BetaSignupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["betaSignup"]>

  export type BetaSignupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["betaSignup"]>

  export type BetaSignupSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
  }


  export type $BetaSignupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BetaSignup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["betaSignup"]>
    composites: {}
  }

  type BetaSignupGetPayload<S extends boolean | null | undefined | BetaSignupDefaultArgs> = $Result.GetResult<Prisma.$BetaSignupPayload, S>

  type BetaSignupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BetaSignupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BetaSignupCountAggregateInputType | true
    }

  export interface BetaSignupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BetaSignup'], meta: { name: 'BetaSignup' } }
    /**
     * Find zero or one BetaSignup that matches the filter.
     * @param {BetaSignupFindUniqueArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetaSignupFindUniqueArgs>(args: SelectSubset<T, BetaSignupFindUniqueArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BetaSignup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BetaSignupFindUniqueOrThrowArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetaSignupFindUniqueOrThrowArgs>(args: SelectSubset<T, BetaSignupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BetaSignup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindFirstArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetaSignupFindFirstArgs>(args?: SelectSubset<T, BetaSignupFindFirstArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BetaSignup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindFirstOrThrowArgs} args - Arguments to find a BetaSignup
     * @example
     * // Get one BetaSignup
     * const betaSignup = await prisma.betaSignup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetaSignupFindFirstOrThrowArgs>(args?: SelectSubset<T, BetaSignupFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BetaSignups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetaSignups
     * const betaSignups = await prisma.betaSignup.findMany()
     * 
     * // Get first 10 BetaSignups
     * const betaSignups = await prisma.betaSignup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betaSignupWithIdOnly = await prisma.betaSignup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetaSignupFindManyArgs>(args?: SelectSubset<T, BetaSignupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BetaSignup.
     * @param {BetaSignupCreateArgs} args - Arguments to create a BetaSignup.
     * @example
     * // Create one BetaSignup
     * const BetaSignup = await prisma.betaSignup.create({
     *   data: {
     *     // ... data to create a BetaSignup
     *   }
     * })
     * 
     */
    create<T extends BetaSignupCreateArgs>(args: SelectSubset<T, BetaSignupCreateArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BetaSignups.
     * @param {BetaSignupCreateManyArgs} args - Arguments to create many BetaSignups.
     * @example
     * // Create many BetaSignups
     * const betaSignup = await prisma.betaSignup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetaSignupCreateManyArgs>(args?: SelectSubset<T, BetaSignupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetaSignups and returns the data saved in the database.
     * @param {BetaSignupCreateManyAndReturnArgs} args - Arguments to create many BetaSignups.
     * @example
     * // Create many BetaSignups
     * const betaSignup = await prisma.betaSignup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BetaSignups and only return the `id`
     * const betaSignupWithIdOnly = await prisma.betaSignup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetaSignupCreateManyAndReturnArgs>(args?: SelectSubset<T, BetaSignupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BetaSignup.
     * @param {BetaSignupDeleteArgs} args - Arguments to delete one BetaSignup.
     * @example
     * // Delete one BetaSignup
     * const BetaSignup = await prisma.betaSignup.delete({
     *   where: {
     *     // ... filter to delete one BetaSignup
     *   }
     * })
     * 
     */
    delete<T extends BetaSignupDeleteArgs>(args: SelectSubset<T, BetaSignupDeleteArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BetaSignup.
     * @param {BetaSignupUpdateArgs} args - Arguments to update one BetaSignup.
     * @example
     * // Update one BetaSignup
     * const betaSignup = await prisma.betaSignup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetaSignupUpdateArgs>(args: SelectSubset<T, BetaSignupUpdateArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BetaSignups.
     * @param {BetaSignupDeleteManyArgs} args - Arguments to filter BetaSignups to delete.
     * @example
     * // Delete a few BetaSignups
     * const { count } = await prisma.betaSignup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetaSignupDeleteManyArgs>(args?: SelectSubset<T, BetaSignupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetaSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetaSignups
     * const betaSignup = await prisma.betaSignup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetaSignupUpdateManyArgs>(args: SelectSubset<T, BetaSignupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BetaSignup.
     * @param {BetaSignupUpsertArgs} args - Arguments to update or create a BetaSignup.
     * @example
     * // Update or create a BetaSignup
     * const betaSignup = await prisma.betaSignup.upsert({
     *   create: {
     *     // ... data to create a BetaSignup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetaSignup we want to update
     *   }
     * })
     */
    upsert<T extends BetaSignupUpsertArgs>(args: SelectSubset<T, BetaSignupUpsertArgs<ExtArgs>>): Prisma__BetaSignupClient<$Result.GetResult<Prisma.$BetaSignupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BetaSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupCountArgs} args - Arguments to filter BetaSignups to count.
     * @example
     * // Count the number of BetaSignups
     * const count = await prisma.betaSignup.count({
     *   where: {
     *     // ... the filter for the BetaSignups we want to count
     *   }
     * })
    **/
    count<T extends BetaSignupCountArgs>(
      args?: Subset<T, BetaSignupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetaSignupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetaSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetaSignupAggregateArgs>(args: Subset<T, BetaSignupAggregateArgs>): Prisma.PrismaPromise<GetBetaSignupAggregateType<T>>

    /**
     * Group by BetaSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetaSignupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetaSignupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetaSignupGroupByArgs['orderBy'] }
        : { orderBy?: BetaSignupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetaSignupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetaSignupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BetaSignup model
   */
  readonly fields: BetaSignupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BetaSignup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetaSignupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BetaSignup model
   */ 
  interface BetaSignupFieldRefs {
    readonly id: FieldRef<"BetaSignup", 'String'>
    readonly email: FieldRef<"BetaSignup", 'String'>
    readonly createdAt: FieldRef<"BetaSignup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BetaSignup findUnique
   */
  export type BetaSignupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup findUniqueOrThrow
   */
  export type BetaSignupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup findFirst
   */
  export type BetaSignupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetaSignups.
     */
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup findFirstOrThrow
   */
  export type BetaSignupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter, which BetaSignup to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BetaSignups.
     */
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup findMany
   */
  export type BetaSignupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter, which BetaSignups to fetch.
     */
    where?: BetaSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BetaSignups to fetch.
     */
    orderBy?: BetaSignupOrderByWithRelationInput | BetaSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BetaSignups.
     */
    cursor?: BetaSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BetaSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BetaSignups.
     */
    skip?: number
    distinct?: BetaSignupScalarFieldEnum | BetaSignupScalarFieldEnum[]
  }

  /**
   * BetaSignup create
   */
  export type BetaSignupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * The data needed to create a BetaSignup.
     */
    data: XOR<BetaSignupCreateInput, BetaSignupUncheckedCreateInput>
  }

  /**
   * BetaSignup createMany
   */
  export type BetaSignupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BetaSignups.
     */
    data: BetaSignupCreateManyInput | BetaSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetaSignup createManyAndReturn
   */
  export type BetaSignupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BetaSignups.
     */
    data: BetaSignupCreateManyInput | BetaSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BetaSignup update
   */
  export type BetaSignupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * The data needed to update a BetaSignup.
     */
    data: XOR<BetaSignupUpdateInput, BetaSignupUncheckedUpdateInput>
    /**
     * Choose, which BetaSignup to update.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup updateMany
   */
  export type BetaSignupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BetaSignups.
     */
    data: XOR<BetaSignupUpdateManyMutationInput, BetaSignupUncheckedUpdateManyInput>
    /**
     * Filter which BetaSignups to update
     */
    where?: BetaSignupWhereInput
  }

  /**
   * BetaSignup upsert
   */
  export type BetaSignupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * The filter to search for the BetaSignup to update in case it exists.
     */
    where: BetaSignupWhereUniqueInput
    /**
     * In case the BetaSignup found by the `where` argument doesn't exist, create a new BetaSignup with this data.
     */
    create: XOR<BetaSignupCreateInput, BetaSignupUncheckedCreateInput>
    /**
     * In case the BetaSignup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetaSignupUpdateInput, BetaSignupUncheckedUpdateInput>
  }

  /**
   * BetaSignup delete
   */
  export type BetaSignupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
    /**
     * Filter which BetaSignup to delete.
     */
    where: BetaSignupWhereUniqueInput
  }

  /**
   * BetaSignup deleteMany
   */
  export type BetaSignupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BetaSignups to delete
     */
    where?: BetaSignupWhereInput
  }

  /**
   * BetaSignup without action
   */
  export type BetaSignupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BetaSignup
     */
    select?: BetaSignupSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSituationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    version: 'version',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type UserSituationScalarFieldEnum = (typeof UserSituationScalarFieldEnum)[keyof typeof UserSituationScalarFieldEnum]


  export const BucketListItemScalarFieldEnum: {
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

  export type BucketListItemScalarFieldEnum = (typeof BucketListItemScalarFieldEnum)[keyof typeof BucketListItemScalarFieldEnum]


  export const SeedLibraryItemScalarFieldEnum: {
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

  export type SeedLibraryItemScalarFieldEnum = (typeof SeedLibraryItemScalarFieldEnum)[keyof typeof SeedLibraryItemScalarFieldEnum]


  export const BetaSignupScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type BetaSignupScalarFieldEnum = (typeof BetaSignupScalarFieldEnum)[keyof typeof BetaSignupScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'CostTier'
   */
  export type EnumCostTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostTier'>
    


  /**
   * Reference to a field of type 'CostTier[]'
   */
  export type ListEnumCostTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CostTier[]'>
    


  /**
   * Reference to a field of type 'EffortTier'
   */
  export type EnumEffortTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EffortTier'>
    


  /**
   * Reference to a field of type 'EffortTier[]'
   */
  export type ListEnumEffortTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EffortTier[]'>
    


  /**
   * Reference to a field of type 'TimeHorizon'
   */
  export type EnumTimeHorizonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeHorizon'>
    


  /**
   * Reference to a field of type 'TimeHorizon[]'
   */
  export type ListEnumTimeHorizonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeHorizon[]'>
    


  /**
   * Reference to a field of type 'ItemSource'
   */
  export type EnumItemSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemSource'>
    


  /**
   * Reference to a field of type 'ItemSource[]'
   */
  export type ListEnumItemSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemSource[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    onboardingComplete?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    situations?: UserSituationListRelationFilter
    bucketListItems?: BucketListItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    onboardingComplete?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    situations?: UserSituationOrderByRelationAggregateInput
    bucketListItems?: BucketListItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActive?: DateTimeFilter<"User"> | Date | string
    onboardingComplete?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    situations?: UserSituationListRelationFilter
    bucketListItems?: BucketListItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    onboardingComplete?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    authProvider?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"User"> | Date | string
    onboardingComplete?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type UserSituationWhereInput = {
    AND?: UserSituationWhereInput | UserSituationWhereInput[]
    OR?: UserSituationWhereInput[]
    NOT?: UserSituationWhereInput | UserSituationWhereInput[]
    id?: StringFilter<"UserSituation"> | string
    userId?: StringFilter<"UserSituation"> | string
    version?: IntFilter<"UserSituation"> | number
    data?: JsonFilter<"UserSituation">
    createdAt?: DateTimeFilter<"UserSituation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserSituationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSituationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSituationWhereInput | UserSituationWhereInput[]
    OR?: UserSituationWhereInput[]
    NOT?: UserSituationWhereInput | UserSituationWhereInput[]
    userId?: StringFilter<"UserSituation"> | string
    version?: IntFilter<"UserSituation"> | number
    data?: JsonFilter<"UserSituation">
    createdAt?: DateTimeFilter<"UserSituation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserSituationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: UserSituationCountOrderByAggregateInput
    _avg?: UserSituationAvgOrderByAggregateInput
    _max?: UserSituationMaxOrderByAggregateInput
    _min?: UserSituationMinOrderByAggregateInput
    _sum?: UserSituationSumOrderByAggregateInput
  }

  export type UserSituationScalarWhereWithAggregatesInput = {
    AND?: UserSituationScalarWhereWithAggregatesInput | UserSituationScalarWhereWithAggregatesInput[]
    OR?: UserSituationScalarWhereWithAggregatesInput[]
    NOT?: UserSituationScalarWhereWithAggregatesInput | UserSituationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSituation"> | string
    userId?: StringWithAggregatesFilter<"UserSituation"> | string
    version?: IntWithAggregatesFilter<"UserSituation"> | number
    data?: JsonWithAggregatesFilter<"UserSituation">
    createdAt?: DateTimeWithAggregatesFilter<"UserSituation"> | Date | string
  }

  export type BucketListItemWhereInput = {
    AND?: BucketListItemWhereInput | BucketListItemWhereInput[]
    OR?: BucketListItemWhereInput[]
    NOT?: BucketListItemWhereInput | BucketListItemWhereInput[]
    id?: StringFilter<"BucketListItem"> | string
    userId?: StringFilter<"BucketListItem"> | string
    title?: StringFilter<"BucketListItem"> | string
    description?: StringNullableFilter<"BucketListItem"> | string | null
    priority?: IntFilter<"BucketListItem"> | number
    status?: EnumItemStatusFilter<"BucketListItem"> | $Enums.ItemStatus
    type?: EnumItemTypeNullableFilter<"BucketListItem"> | $Enums.ItemType | null
    bestSeason?: StringNullableFilter<"BucketListItem"> | string | null
    ageWindowMin?: IntNullableFilter<"BucketListItem"> | number | null
    ageWindowMax?: IntNullableFilter<"BucketListItem"> | number | null
    costEstimate?: EnumCostTierNullableFilter<"BucketListItem"> | $Enums.CostTier | null
    effortLevel?: EnumEffortTierNullableFilter<"BucketListItem"> | $Enums.EffortTier | null
    timeHorizon?: EnumTimeHorizonNullableFilter<"BucketListItem"> | $Enums.TimeHorizon | null
    constraints?: StringNullableListFilter<"BucketListItem">
    doabilityScore?: IntNullableFilter<"BucketListItem"> | number | null
    aiReasoning?: StringNullableFilter<"BucketListItem"> | string | null
    imageUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completedAt?: DateTimeNullableFilter<"BucketListItem"> | Date | string | null
    completionPhotoUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completionNote?: StringNullableFilter<"BucketListItem"> | string | null
    source?: EnumItemSourceFilter<"BucketListItem"> | $Enums.ItemSource
    seedItemId?: StringNullableFilter<"BucketListItem"> | string | null
    createdAt?: DateTimeFilter<"BucketListItem"> | Date | string
    updatedAt?: DateTimeFilter<"BucketListItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BucketListItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrderInput | SortOrder
    bestSeason?: SortOrderInput | SortOrder
    ageWindowMin?: SortOrderInput | SortOrder
    ageWindowMax?: SortOrderInput | SortOrder
    costEstimate?: SortOrderInput | SortOrder
    effortLevel?: SortOrderInput | SortOrder
    timeHorizon?: SortOrderInput | SortOrder
    constraints?: SortOrder
    doabilityScore?: SortOrderInput | SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    completionPhotoUrl?: SortOrderInput | SortOrder
    completionNote?: SortOrderInput | SortOrder
    source?: SortOrder
    seedItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BucketListItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BucketListItemWhereInput | BucketListItemWhereInput[]
    OR?: BucketListItemWhereInput[]
    NOT?: BucketListItemWhereInput | BucketListItemWhereInput[]
    userId?: StringFilter<"BucketListItem"> | string
    title?: StringFilter<"BucketListItem"> | string
    description?: StringNullableFilter<"BucketListItem"> | string | null
    priority?: IntFilter<"BucketListItem"> | number
    status?: EnumItemStatusFilter<"BucketListItem"> | $Enums.ItemStatus
    type?: EnumItemTypeNullableFilter<"BucketListItem"> | $Enums.ItemType | null
    bestSeason?: StringNullableFilter<"BucketListItem"> | string | null
    ageWindowMin?: IntNullableFilter<"BucketListItem"> | number | null
    ageWindowMax?: IntNullableFilter<"BucketListItem"> | number | null
    costEstimate?: EnumCostTierNullableFilter<"BucketListItem"> | $Enums.CostTier | null
    effortLevel?: EnumEffortTierNullableFilter<"BucketListItem"> | $Enums.EffortTier | null
    timeHorizon?: EnumTimeHorizonNullableFilter<"BucketListItem"> | $Enums.TimeHorizon | null
    constraints?: StringNullableListFilter<"BucketListItem">
    doabilityScore?: IntNullableFilter<"BucketListItem"> | number | null
    aiReasoning?: StringNullableFilter<"BucketListItem"> | string | null
    imageUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completedAt?: DateTimeNullableFilter<"BucketListItem"> | Date | string | null
    completionPhotoUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completionNote?: StringNullableFilter<"BucketListItem"> | string | null
    source?: EnumItemSourceFilter<"BucketListItem"> | $Enums.ItemSource
    seedItemId?: StringNullableFilter<"BucketListItem"> | string | null
    createdAt?: DateTimeFilter<"BucketListItem"> | Date | string
    updatedAt?: DateTimeFilter<"BucketListItem"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BucketListItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrderInput | SortOrder
    bestSeason?: SortOrderInput | SortOrder
    ageWindowMin?: SortOrderInput | SortOrder
    ageWindowMax?: SortOrderInput | SortOrder
    costEstimate?: SortOrderInput | SortOrder
    effortLevel?: SortOrderInput | SortOrder
    timeHorizon?: SortOrderInput | SortOrder
    constraints?: SortOrder
    doabilityScore?: SortOrderInput | SortOrder
    aiReasoning?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    completionPhotoUrl?: SortOrderInput | SortOrder
    completionNote?: SortOrderInput | SortOrder
    source?: SortOrder
    seedItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BucketListItemCountOrderByAggregateInput
    _avg?: BucketListItemAvgOrderByAggregateInput
    _max?: BucketListItemMaxOrderByAggregateInput
    _min?: BucketListItemMinOrderByAggregateInput
    _sum?: BucketListItemSumOrderByAggregateInput
  }

  export type BucketListItemScalarWhereWithAggregatesInput = {
    AND?: BucketListItemScalarWhereWithAggregatesInput | BucketListItemScalarWhereWithAggregatesInput[]
    OR?: BucketListItemScalarWhereWithAggregatesInput[]
    NOT?: BucketListItemScalarWhereWithAggregatesInput | BucketListItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BucketListItem"> | string
    userId?: StringWithAggregatesFilter<"BucketListItem"> | string
    title?: StringWithAggregatesFilter<"BucketListItem"> | string
    description?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    priority?: IntWithAggregatesFilter<"BucketListItem"> | number
    status?: EnumItemStatusWithAggregatesFilter<"BucketListItem"> | $Enums.ItemStatus
    type?: EnumItemTypeNullableWithAggregatesFilter<"BucketListItem"> | $Enums.ItemType | null
    bestSeason?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    ageWindowMin?: IntNullableWithAggregatesFilter<"BucketListItem"> | number | null
    ageWindowMax?: IntNullableWithAggregatesFilter<"BucketListItem"> | number | null
    costEstimate?: EnumCostTierNullableWithAggregatesFilter<"BucketListItem"> | $Enums.CostTier | null
    effortLevel?: EnumEffortTierNullableWithAggregatesFilter<"BucketListItem"> | $Enums.EffortTier | null
    timeHorizon?: EnumTimeHorizonNullableWithAggregatesFilter<"BucketListItem"> | $Enums.TimeHorizon | null
    constraints?: StringNullableListFilter<"BucketListItem">
    doabilityScore?: IntNullableWithAggregatesFilter<"BucketListItem"> | number | null
    aiReasoning?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"BucketListItem"> | Date | string | null
    completionPhotoUrl?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    completionNote?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    source?: EnumItemSourceWithAggregatesFilter<"BucketListItem"> | $Enums.ItemSource
    seedItemId?: StringNullableWithAggregatesFilter<"BucketListItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BucketListItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BucketListItem"> | Date | string
  }

  export type SeedLibraryItemWhereInput = {
    AND?: SeedLibraryItemWhereInput | SeedLibraryItemWhereInput[]
    OR?: SeedLibraryItemWhereInput[]
    NOT?: SeedLibraryItemWhereInput | SeedLibraryItemWhereInput[]
    id?: StringFilter<"SeedLibraryItem"> | string
    title?: StringFilter<"SeedLibraryItem"> | string
    description?: StringFilter<"SeedLibraryItem"> | string
    type?: EnumItemTypeFilter<"SeedLibraryItem"> | $Enums.ItemType
    imageKeyword?: StringFilter<"SeedLibraryItem"> | string
    imageUrl?: StringNullableFilter<"SeedLibraryItem"> | string | null
    ageRelevanceMin?: IntFilter<"SeedLibraryItem"> | number
    ageRelevanceMax?: IntFilter<"SeedLibraryItem"> | number
    costTier?: EnumCostTierFilter<"SeedLibraryItem"> | $Enums.CostTier
    effortTier?: EnumEffortTierFilter<"SeedLibraryItem"> | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFilter<"SeedLibraryItem"> | $Enums.TimeHorizon
    popularityScore?: IntFilter<"SeedLibraryItem"> | number
    bestSeason?: StringFilter<"SeedLibraryItem"> | string
    constraints?: StringNullableListFilter<"SeedLibraryItem">
    tags?: StringNullableListFilter<"SeedLibraryItem">
    regionRelevance?: StringNullableListFilter<"SeedLibraryItem">
  }

  export type SeedLibraryItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageKeyword?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    costTier?: SortOrder
    effortTier?: SortOrder
    timeHorizon?: SortOrder
    popularityScore?: SortOrder
    bestSeason?: SortOrder
    constraints?: SortOrder
    tags?: SortOrder
    regionRelevance?: SortOrder
  }

  export type SeedLibraryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeedLibraryItemWhereInput | SeedLibraryItemWhereInput[]
    OR?: SeedLibraryItemWhereInput[]
    NOT?: SeedLibraryItemWhereInput | SeedLibraryItemWhereInput[]
    title?: StringFilter<"SeedLibraryItem"> | string
    description?: StringFilter<"SeedLibraryItem"> | string
    type?: EnumItemTypeFilter<"SeedLibraryItem"> | $Enums.ItemType
    imageKeyword?: StringFilter<"SeedLibraryItem"> | string
    imageUrl?: StringNullableFilter<"SeedLibraryItem"> | string | null
    ageRelevanceMin?: IntFilter<"SeedLibraryItem"> | number
    ageRelevanceMax?: IntFilter<"SeedLibraryItem"> | number
    costTier?: EnumCostTierFilter<"SeedLibraryItem"> | $Enums.CostTier
    effortTier?: EnumEffortTierFilter<"SeedLibraryItem"> | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFilter<"SeedLibraryItem"> | $Enums.TimeHorizon
    popularityScore?: IntFilter<"SeedLibraryItem"> | number
    bestSeason?: StringFilter<"SeedLibraryItem"> | string
    constraints?: StringNullableListFilter<"SeedLibraryItem">
    tags?: StringNullableListFilter<"SeedLibraryItem">
    regionRelevance?: StringNullableListFilter<"SeedLibraryItem">
  }, "id">

  export type SeedLibraryItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageKeyword?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    costTier?: SortOrder
    effortTier?: SortOrder
    timeHorizon?: SortOrder
    popularityScore?: SortOrder
    bestSeason?: SortOrder
    constraints?: SortOrder
    tags?: SortOrder
    regionRelevance?: SortOrder
    _count?: SeedLibraryItemCountOrderByAggregateInput
    _avg?: SeedLibraryItemAvgOrderByAggregateInput
    _max?: SeedLibraryItemMaxOrderByAggregateInput
    _min?: SeedLibraryItemMinOrderByAggregateInput
    _sum?: SeedLibraryItemSumOrderByAggregateInput
  }

  export type SeedLibraryItemScalarWhereWithAggregatesInput = {
    AND?: SeedLibraryItemScalarWhereWithAggregatesInput | SeedLibraryItemScalarWhereWithAggregatesInput[]
    OR?: SeedLibraryItemScalarWhereWithAggregatesInput[]
    NOT?: SeedLibraryItemScalarWhereWithAggregatesInput | SeedLibraryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeedLibraryItem"> | string
    title?: StringWithAggregatesFilter<"SeedLibraryItem"> | string
    description?: StringWithAggregatesFilter<"SeedLibraryItem"> | string
    type?: EnumItemTypeWithAggregatesFilter<"SeedLibraryItem"> | $Enums.ItemType
    imageKeyword?: StringWithAggregatesFilter<"SeedLibraryItem"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"SeedLibraryItem"> | string | null
    ageRelevanceMin?: IntWithAggregatesFilter<"SeedLibraryItem"> | number
    ageRelevanceMax?: IntWithAggregatesFilter<"SeedLibraryItem"> | number
    costTier?: EnumCostTierWithAggregatesFilter<"SeedLibraryItem"> | $Enums.CostTier
    effortTier?: EnumEffortTierWithAggregatesFilter<"SeedLibraryItem"> | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonWithAggregatesFilter<"SeedLibraryItem"> | $Enums.TimeHorizon
    popularityScore?: IntWithAggregatesFilter<"SeedLibraryItem"> | number
    bestSeason?: StringWithAggregatesFilter<"SeedLibraryItem"> | string
    constraints?: StringNullableListFilter<"SeedLibraryItem">
    tags?: StringNullableListFilter<"SeedLibraryItem">
    regionRelevance?: StringNullableListFilter<"SeedLibraryItem">
  }

  export type BetaSignupWhereInput = {
    AND?: BetaSignupWhereInput | BetaSignupWhereInput[]
    OR?: BetaSignupWhereInput[]
    NOT?: BetaSignupWhereInput | BetaSignupWhereInput[]
    id?: StringFilter<"BetaSignup"> | string
    email?: StringFilter<"BetaSignup"> | string
    createdAt?: DateTimeFilter<"BetaSignup"> | Date | string
  }

  export type BetaSignupOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BetaSignupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: BetaSignupWhereInput | BetaSignupWhereInput[]
    OR?: BetaSignupWhereInput[]
    NOT?: BetaSignupWhereInput | BetaSignupWhereInput[]
    createdAt?: DateTimeFilter<"BetaSignup"> | Date | string
  }, "id" | "email">

  export type BetaSignupOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: BetaSignupCountOrderByAggregateInput
    _max?: BetaSignupMaxOrderByAggregateInput
    _min?: BetaSignupMinOrderByAggregateInput
  }

  export type BetaSignupScalarWhereWithAggregatesInput = {
    AND?: BetaSignupScalarWhereWithAggregatesInput | BetaSignupScalarWhereWithAggregatesInput[]
    OR?: BetaSignupScalarWhereWithAggregatesInput[]
    NOT?: BetaSignupScalarWhereWithAggregatesInput | BetaSignupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BetaSignup"> | string
    email?: StringWithAggregatesFilter<"BetaSignup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BetaSignup"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    situations?: UserSituationCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    situations?: UserSituationUncheckedCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    situations?: UserSituationUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    situations?: UserSituationUncheckedUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSituationCreateInput = {
    id?: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSituationsInput
  }

  export type UserSituationUncheckedCreateInput = {
    id?: string
    userId: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSituationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSituationsNestedInput
  }

  export type UserSituationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSituationCreateManyInput = {
    id?: string
    userId: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSituationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSituationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemCreateInput = {
    id?: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBucketListItemsInput
  }

  export type BucketListItemUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBucketListItemsNestedInput
  }

  export type BucketListItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeedLibraryItemCreateInput = {
    id: string
    title: string
    description: string
    type: $Enums.ItemType
    imageKeyword: string
    imageUrl?: string | null
    ageRelevanceMin?: number
    ageRelevanceMax?: number
    costTier: $Enums.CostTier
    effortTier: $Enums.EffortTier
    timeHorizon: $Enums.TimeHorizon
    popularityScore: number
    bestSeason?: string
    constraints?: SeedLibraryItemCreateconstraintsInput | string[]
    tags?: SeedLibraryItemCreatetagsInput | string[]
    regionRelevance?: SeedLibraryItemCreateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemUncheckedCreateInput = {
    id: string
    title: string
    description: string
    type: $Enums.ItemType
    imageKeyword: string
    imageUrl?: string | null
    ageRelevanceMin?: number
    ageRelevanceMax?: number
    costTier: $Enums.CostTier
    effortTier: $Enums.EffortTier
    timeHorizon: $Enums.TimeHorizon
    popularityScore: number
    bestSeason?: string
    constraints?: SeedLibraryItemCreateconstraintsInput | string[]
    tags?: SeedLibraryItemCreatetagsInput | string[]
    regionRelevance?: SeedLibraryItemCreateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    imageKeyword?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRelevanceMin?: IntFieldUpdateOperationsInput | number
    ageRelevanceMax?: IntFieldUpdateOperationsInput | number
    costTier?: EnumCostTierFieldUpdateOperationsInput | $Enums.CostTier
    effortTier?: EnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon
    popularityScore?: IntFieldUpdateOperationsInput | number
    bestSeason?: StringFieldUpdateOperationsInput | string
    constraints?: SeedLibraryItemUpdateconstraintsInput | string[]
    tags?: SeedLibraryItemUpdatetagsInput | string[]
    regionRelevance?: SeedLibraryItemUpdateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    imageKeyword?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRelevanceMin?: IntFieldUpdateOperationsInput | number
    ageRelevanceMax?: IntFieldUpdateOperationsInput | number
    costTier?: EnumCostTierFieldUpdateOperationsInput | $Enums.CostTier
    effortTier?: EnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon
    popularityScore?: IntFieldUpdateOperationsInput | number
    bestSeason?: StringFieldUpdateOperationsInput | string
    constraints?: SeedLibraryItemUpdateconstraintsInput | string[]
    tags?: SeedLibraryItemUpdatetagsInput | string[]
    regionRelevance?: SeedLibraryItemUpdateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemCreateManyInput = {
    id: string
    title: string
    description: string
    type: $Enums.ItemType
    imageKeyword: string
    imageUrl?: string | null
    ageRelevanceMin?: number
    ageRelevanceMax?: number
    costTier: $Enums.CostTier
    effortTier: $Enums.EffortTier
    timeHorizon: $Enums.TimeHorizon
    popularityScore: number
    bestSeason?: string
    constraints?: SeedLibraryItemCreateconstraintsInput | string[]
    tags?: SeedLibraryItemCreatetagsInput | string[]
    regionRelevance?: SeedLibraryItemCreateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    imageKeyword?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRelevanceMin?: IntFieldUpdateOperationsInput | number
    ageRelevanceMax?: IntFieldUpdateOperationsInput | number
    costTier?: EnumCostTierFieldUpdateOperationsInput | $Enums.CostTier
    effortTier?: EnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon
    popularityScore?: IntFieldUpdateOperationsInput | number
    bestSeason?: StringFieldUpdateOperationsInput | string
    constraints?: SeedLibraryItemUpdateconstraintsInput | string[]
    tags?: SeedLibraryItemUpdatetagsInput | string[]
    regionRelevance?: SeedLibraryItemUpdateregionRelevanceInput | string[]
  }

  export type SeedLibraryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    imageKeyword?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ageRelevanceMin?: IntFieldUpdateOperationsInput | number
    ageRelevanceMax?: IntFieldUpdateOperationsInput | number
    costTier?: EnumCostTierFieldUpdateOperationsInput | $Enums.CostTier
    effortTier?: EnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier
    timeHorizon?: EnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon
    popularityScore?: IntFieldUpdateOperationsInput | number
    bestSeason?: StringFieldUpdateOperationsInput | string
    constraints?: SeedLibraryItemUpdateconstraintsInput | string[]
    tags?: SeedLibraryItemUpdatetagsInput | string[]
    regionRelevance?: SeedLibraryItemUpdateregionRelevanceInput | string[]
  }

  export type BetaSignupCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type BetaSignupUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type BetaSignupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
  }

  export type BetaSignupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetaSignupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserSituationListRelationFilter = {
    every?: UserSituationWhereInput
    some?: UserSituationWhereInput
    none?: UserSituationWhereInput
  }

  export type BucketListItemListRelationFilter = {
    every?: BucketListItemWhereInput
    some?: BucketListItemWhereInput
    none?: BucketListItemWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSituationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BucketListItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    onboardingComplete?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    onboardingComplete?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    name?: SortOrder
    image?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    lastActive?: SortOrder
    onboardingComplete?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserSituationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSituationAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type UserSituationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSituationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSituationSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type EnumItemTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumItemTypeNullableFilter<$PrismaModel> | $Enums.ItemType | null
  }

  export type EnumCostTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCostTierNullableFilter<$PrismaModel> | $Enums.CostTier | null
  }

  export type EnumEffortTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEffortTierNullableFilter<$PrismaModel> | $Enums.EffortTier | null
  }

  export type EnumTimeHorizonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel> | null
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTimeHorizonNullableFilter<$PrismaModel> | $Enums.TimeHorizon | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumItemSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemSource | EnumItemSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumItemSourceFilter<$PrismaModel> | $Enums.ItemSource
  }

  export type BucketListItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bestSeason?: SortOrder
    ageWindowMin?: SortOrder
    ageWindowMax?: SortOrder
    costEstimate?: SortOrder
    effortLevel?: SortOrder
    timeHorizon?: SortOrder
    constraints?: SortOrder
    doabilityScore?: SortOrder
    aiReasoning?: SortOrder
    imageUrl?: SortOrder
    completedAt?: SortOrder
    completionPhotoUrl?: SortOrder
    completionNote?: SortOrder
    source?: SortOrder
    seedItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListItemAvgOrderByAggregateInput = {
    priority?: SortOrder
    ageWindowMin?: SortOrder
    ageWindowMax?: SortOrder
    doabilityScore?: SortOrder
  }

  export type BucketListItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bestSeason?: SortOrder
    ageWindowMin?: SortOrder
    ageWindowMax?: SortOrder
    costEstimate?: SortOrder
    effortLevel?: SortOrder
    timeHorizon?: SortOrder
    doabilityScore?: SortOrder
    aiReasoning?: SortOrder
    imageUrl?: SortOrder
    completedAt?: SortOrder
    completionPhotoUrl?: SortOrder
    completionNote?: SortOrder
    source?: SortOrder
    seedItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    bestSeason?: SortOrder
    ageWindowMin?: SortOrder
    ageWindowMax?: SortOrder
    costEstimate?: SortOrder
    effortLevel?: SortOrder
    timeHorizon?: SortOrder
    doabilityScore?: SortOrder
    aiReasoning?: SortOrder
    imageUrl?: SortOrder
    completedAt?: SortOrder
    completionPhotoUrl?: SortOrder
    completionNote?: SortOrder
    source?: SortOrder
    seedItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BucketListItemSumOrderByAggregateInput = {
    priority?: SortOrder
    ageWindowMin?: SortOrder
    ageWindowMax?: SortOrder
    doabilityScore?: SortOrder
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type EnumItemTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumItemTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ItemType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumItemTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumItemTypeNullableFilter<$PrismaModel>
  }

  export type EnumCostTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCostTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.CostTier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCostTierNullableFilter<$PrismaModel>
    _max?: NestedEnumCostTierNullableFilter<$PrismaModel>
  }

  export type EnumEffortTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEffortTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.EffortTier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEffortTierNullableFilter<$PrismaModel>
    _max?: NestedEnumEffortTierNullableFilter<$PrismaModel>
  }

  export type EnumTimeHorizonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel> | null
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTimeHorizonNullableWithAggregatesFilter<$PrismaModel> | $Enums.TimeHorizon | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTimeHorizonNullableFilter<$PrismaModel>
    _max?: NestedEnumTimeHorizonNullableFilter<$PrismaModel>
  }

  export type EnumItemSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemSource | EnumItemSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumItemSourceWithAggregatesFilter<$PrismaModel> | $Enums.ItemSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemSourceFilter<$PrismaModel>
    _max?: NestedEnumItemSourceFilter<$PrismaModel>
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type EnumCostTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel>
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCostTierFilter<$PrismaModel> | $Enums.CostTier
  }

  export type EnumEffortTierFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel>
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    not?: NestedEnumEffortTierFilter<$PrismaModel> | $Enums.EffortTier
  }

  export type EnumTimeHorizonFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeHorizonFilter<$PrismaModel> | $Enums.TimeHorizon
  }

  export type SeedLibraryItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageKeyword?: SortOrder
    imageUrl?: SortOrder
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    costTier?: SortOrder
    effortTier?: SortOrder
    timeHorizon?: SortOrder
    popularityScore?: SortOrder
    bestSeason?: SortOrder
    constraints?: SortOrder
    tags?: SortOrder
    regionRelevance?: SortOrder
  }

  export type SeedLibraryItemAvgOrderByAggregateInput = {
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    popularityScore?: SortOrder
  }

  export type SeedLibraryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageKeyword?: SortOrder
    imageUrl?: SortOrder
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    costTier?: SortOrder
    effortTier?: SortOrder
    timeHorizon?: SortOrder
    popularityScore?: SortOrder
    bestSeason?: SortOrder
  }

  export type SeedLibraryItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    imageKeyword?: SortOrder
    imageUrl?: SortOrder
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    costTier?: SortOrder
    effortTier?: SortOrder
    timeHorizon?: SortOrder
    popularityScore?: SortOrder
    bestSeason?: SortOrder
  }

  export type SeedLibraryItemSumOrderByAggregateInput = {
    ageRelevanceMin?: SortOrder
    ageRelevanceMax?: SortOrder
    popularityScore?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type EnumCostTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel>
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCostTierWithAggregatesFilter<$PrismaModel> | $Enums.CostTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCostTierFilter<$PrismaModel>
    _max?: NestedEnumCostTierFilter<$PrismaModel>
  }

  export type EnumEffortTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel>
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    not?: NestedEnumEffortTierWithAggregatesFilter<$PrismaModel> | $Enums.EffortTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEffortTierFilter<$PrismaModel>
    _max?: NestedEnumEffortTierFilter<$PrismaModel>
  }

  export type EnumTimeHorizonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeHorizonWithAggregatesFilter<$PrismaModel> | $Enums.TimeHorizon
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeHorizonFilter<$PrismaModel>
    _max?: NestedEnumTimeHorizonFilter<$PrismaModel>
  }

  export type BetaSignupCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BetaSignupMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type BetaSignupMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserSituationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput> | UserSituationCreateWithoutUserInput[] | UserSituationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSituationCreateOrConnectWithoutUserInput | UserSituationCreateOrConnectWithoutUserInput[]
    createMany?: UserSituationCreateManyUserInputEnvelope
    connect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
  }

  export type BucketListItemCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput> | BucketListItemCreateWithoutUserInput[] | BucketListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListItemCreateOrConnectWithoutUserInput | BucketListItemCreateOrConnectWithoutUserInput[]
    createMany?: BucketListItemCreateManyUserInputEnvelope
    connect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserSituationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput> | UserSituationCreateWithoutUserInput[] | UserSituationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSituationCreateOrConnectWithoutUserInput | UserSituationCreateOrConnectWithoutUserInput[]
    createMany?: UserSituationCreateManyUserInputEnvelope
    connect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
  }

  export type BucketListItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput> | BucketListItemCreateWithoutUserInput[] | BucketListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListItemCreateOrConnectWithoutUserInput | BucketListItemCreateOrConnectWithoutUserInput[]
    createMany?: BucketListItemCreateManyUserInputEnvelope
    connect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserSituationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput> | UserSituationCreateWithoutUserInput[] | UserSituationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSituationCreateOrConnectWithoutUserInput | UserSituationCreateOrConnectWithoutUserInput[]
    upsert?: UserSituationUpsertWithWhereUniqueWithoutUserInput | UserSituationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSituationCreateManyUserInputEnvelope
    set?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    disconnect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    delete?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    connect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    update?: UserSituationUpdateWithWhereUniqueWithoutUserInput | UserSituationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSituationUpdateManyWithWhereWithoutUserInput | UserSituationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSituationScalarWhereInput | UserSituationScalarWhereInput[]
  }

  export type BucketListItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput> | BucketListItemCreateWithoutUserInput[] | BucketListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListItemCreateOrConnectWithoutUserInput | BucketListItemCreateOrConnectWithoutUserInput[]
    upsert?: BucketListItemUpsertWithWhereUniqueWithoutUserInput | BucketListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketListItemCreateManyUserInputEnvelope
    set?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    disconnect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    delete?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    connect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    update?: BucketListItemUpdateWithWhereUniqueWithoutUserInput | BucketListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketListItemUpdateManyWithWhereWithoutUserInput | BucketListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketListItemScalarWhereInput | BucketListItemScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserSituationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput> | UserSituationCreateWithoutUserInput[] | UserSituationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSituationCreateOrConnectWithoutUserInput | UserSituationCreateOrConnectWithoutUserInput[]
    upsert?: UserSituationUpsertWithWhereUniqueWithoutUserInput | UserSituationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSituationCreateManyUserInputEnvelope
    set?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    disconnect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    delete?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    connect?: UserSituationWhereUniqueInput | UserSituationWhereUniqueInput[]
    update?: UserSituationUpdateWithWhereUniqueWithoutUserInput | UserSituationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSituationUpdateManyWithWhereWithoutUserInput | UserSituationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSituationScalarWhereInput | UserSituationScalarWhereInput[]
  }

  export type BucketListItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput> | BucketListItemCreateWithoutUserInput[] | BucketListItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BucketListItemCreateOrConnectWithoutUserInput | BucketListItemCreateOrConnectWithoutUserInput[]
    upsert?: BucketListItemUpsertWithWhereUniqueWithoutUserInput | BucketListItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BucketListItemCreateManyUserInputEnvelope
    set?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    disconnect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    delete?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    connect?: BucketListItemWhereUniqueInput | BucketListItemWhereUniqueInput[]
    update?: BucketListItemUpdateWithWhereUniqueWithoutUserInput | BucketListItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BucketListItemUpdateManyWithWhereWithoutUserInput | BucketListItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BucketListItemScalarWhereInput | BucketListItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSituationsInput = {
    create?: XOR<UserCreateWithoutSituationsInput, UserUncheckedCreateWithoutSituationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSituationsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSituationsNestedInput = {
    create?: XOR<UserCreateWithoutSituationsInput, UserUncheckedCreateWithoutSituationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSituationsInput
    upsert?: UserUpsertWithoutSituationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSituationsInput, UserUpdateWithoutSituationsInput>, UserUncheckedUpdateWithoutSituationsInput>
  }

  export type BucketListItemCreateconstraintsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBucketListItemsInput = {
    create?: XOR<UserCreateWithoutBucketListItemsInput, UserUncheckedCreateWithoutBucketListItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketListItemsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type NullableEnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType | null
  }

  export type NullableEnumCostTierFieldUpdateOperationsInput = {
    set?: $Enums.CostTier | null
  }

  export type NullableEnumEffortTierFieldUpdateOperationsInput = {
    set?: $Enums.EffortTier | null
  }

  export type NullableEnumTimeHorizonFieldUpdateOperationsInput = {
    set?: $Enums.TimeHorizon | null
  }

  export type BucketListItemUpdateconstraintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumItemSourceFieldUpdateOperationsInput = {
    set?: $Enums.ItemSource
  }

  export type UserUpdateOneRequiredWithoutBucketListItemsNestedInput = {
    create?: XOR<UserCreateWithoutBucketListItemsInput, UserUncheckedCreateWithoutBucketListItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBucketListItemsInput
    upsert?: UserUpsertWithoutBucketListItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBucketListItemsInput, UserUpdateWithoutBucketListItemsInput>, UserUncheckedUpdateWithoutBucketListItemsInput>
  }

  export type SeedLibraryItemCreateconstraintsInput = {
    set: string[]
  }

  export type SeedLibraryItemCreatetagsInput = {
    set: string[]
  }

  export type SeedLibraryItemCreateregionRelevanceInput = {
    set: string[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type EnumCostTierFieldUpdateOperationsInput = {
    set?: $Enums.CostTier
  }

  export type EnumEffortTierFieldUpdateOperationsInput = {
    set?: $Enums.EffortTier
  }

  export type EnumTimeHorizonFieldUpdateOperationsInput = {
    set?: $Enums.TimeHorizon
  }

  export type SeedLibraryItemUpdateconstraintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SeedLibraryItemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type SeedLibraryItemUpdateregionRelevanceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedEnumItemTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumItemTypeNullableFilter<$PrismaModel> | $Enums.ItemType | null
  }

  export type NestedEnumCostTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCostTierNullableFilter<$PrismaModel> | $Enums.CostTier | null
  }

  export type NestedEnumEffortTierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEffortTierNullableFilter<$PrismaModel> | $Enums.EffortTier | null
  }

  export type NestedEnumTimeHorizonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel> | null
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTimeHorizonNullableFilter<$PrismaModel> | $Enums.TimeHorizon | null
  }

  export type NestedEnumItemSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemSource | EnumItemSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumItemSourceFilter<$PrismaModel> | $Enums.ItemSource
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumItemTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ItemType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumItemTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumItemTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCostTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCostTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.CostTier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCostTierNullableFilter<$PrismaModel>
    _max?: NestedEnumCostTierNullableFilter<$PrismaModel>
  }

  export type NestedEnumEffortTierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel> | null
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEffortTierNullableWithAggregatesFilter<$PrismaModel> | $Enums.EffortTier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEffortTierNullableFilter<$PrismaModel>
    _max?: NestedEnumEffortTierNullableFilter<$PrismaModel>
  }

  export type NestedEnumTimeHorizonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel> | null
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTimeHorizonNullableWithAggregatesFilter<$PrismaModel> | $Enums.TimeHorizon | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTimeHorizonNullableFilter<$PrismaModel>
    _max?: NestedEnumTimeHorizonNullableFilter<$PrismaModel>
  }

  export type NestedEnumItemSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemSource | EnumItemSourceFieldRefInput<$PrismaModel>
    in?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemSource[] | ListEnumItemSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumItemSourceWithAggregatesFilter<$PrismaModel> | $Enums.ItemSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemSourceFilter<$PrismaModel>
    _max?: NestedEnumItemSourceFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumCostTierFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel>
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCostTierFilter<$PrismaModel> | $Enums.CostTier
  }

  export type NestedEnumEffortTierFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel>
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    not?: NestedEnumEffortTierFilter<$PrismaModel> | $Enums.EffortTier
  }

  export type NestedEnumTimeHorizonFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeHorizonFilter<$PrismaModel> | $Enums.TimeHorizon
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedEnumCostTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CostTier | EnumCostTierFieldRefInput<$PrismaModel>
    in?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.CostTier[] | ListEnumCostTierFieldRefInput<$PrismaModel>
    not?: NestedEnumCostTierWithAggregatesFilter<$PrismaModel> | $Enums.CostTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCostTierFilter<$PrismaModel>
    _max?: NestedEnumCostTierFilter<$PrismaModel>
  }

  export type NestedEnumEffortTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EffortTier | EnumEffortTierFieldRefInput<$PrismaModel>
    in?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.EffortTier[] | ListEnumEffortTierFieldRefInput<$PrismaModel>
    not?: NestedEnumEffortTierWithAggregatesFilter<$PrismaModel> | $Enums.EffortTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEffortTierFilter<$PrismaModel>
    _max?: NestedEnumEffortTierFilter<$PrismaModel>
  }

  export type NestedEnumTimeHorizonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeHorizon | EnumTimeHorizonFieldRefInput<$PrismaModel>
    in?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    notIn?: $Enums.TimeHorizon[] | ListEnumTimeHorizonFieldRefInput<$PrismaModel>
    not?: NestedEnumTimeHorizonWithAggregatesFilter<$PrismaModel> | $Enums.TimeHorizon
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeHorizonFilter<$PrismaModel>
    _max?: NestedEnumTimeHorizonFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    situations?: UserSituationCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    situations?: UserSituationUncheckedCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    situations?: UserSituationUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    situations?: UserSituationUncheckedUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    situations?: UserSituationCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    situations?: UserSituationUncheckedCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    situations?: UserSituationUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    situations?: UserSituationUncheckedUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSituationCreateWithoutUserInput = {
    id?: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSituationUncheckedCreateWithoutUserInput = {
    id?: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserSituationCreateOrConnectWithoutUserInput = {
    where: UserSituationWhereUniqueInput
    create: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput>
  }

  export type UserSituationCreateManyUserInputEnvelope = {
    data: UserSituationCreateManyUserInput | UserSituationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BucketListItemCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListItemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BucketListItemCreateOrConnectWithoutUserInput = {
    where: BucketListItemWhereUniqueInput
    create: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput>
  }

  export type BucketListItemCreateManyUserInputEnvelope = {
    data: BucketListItemCreateManyUserInput | BucketListItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserSituationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSituationWhereUniqueInput
    update: XOR<UserSituationUpdateWithoutUserInput, UserSituationUncheckedUpdateWithoutUserInput>
    create: XOR<UserSituationCreateWithoutUserInput, UserSituationUncheckedCreateWithoutUserInput>
  }

  export type UserSituationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSituationWhereUniqueInput
    data: XOR<UserSituationUpdateWithoutUserInput, UserSituationUncheckedUpdateWithoutUserInput>
  }

  export type UserSituationUpdateManyWithWhereWithoutUserInput = {
    where: UserSituationScalarWhereInput
    data: XOR<UserSituationUpdateManyMutationInput, UserSituationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSituationScalarWhereInput = {
    AND?: UserSituationScalarWhereInput | UserSituationScalarWhereInput[]
    OR?: UserSituationScalarWhereInput[]
    NOT?: UserSituationScalarWhereInput | UserSituationScalarWhereInput[]
    id?: StringFilter<"UserSituation"> | string
    userId?: StringFilter<"UserSituation"> | string
    version?: IntFilter<"UserSituation"> | number
    data?: JsonFilter<"UserSituation">
    createdAt?: DateTimeFilter<"UserSituation"> | Date | string
  }

  export type BucketListItemUpsertWithWhereUniqueWithoutUserInput = {
    where: BucketListItemWhereUniqueInput
    update: XOR<BucketListItemUpdateWithoutUserInput, BucketListItemUncheckedUpdateWithoutUserInput>
    create: XOR<BucketListItemCreateWithoutUserInput, BucketListItemUncheckedCreateWithoutUserInput>
  }

  export type BucketListItemUpdateWithWhereUniqueWithoutUserInput = {
    where: BucketListItemWhereUniqueInput
    data: XOR<BucketListItemUpdateWithoutUserInput, BucketListItemUncheckedUpdateWithoutUserInput>
  }

  export type BucketListItemUpdateManyWithWhereWithoutUserInput = {
    where: BucketListItemScalarWhereInput
    data: XOR<BucketListItemUpdateManyMutationInput, BucketListItemUncheckedUpdateManyWithoutUserInput>
  }

  export type BucketListItemScalarWhereInput = {
    AND?: BucketListItemScalarWhereInput | BucketListItemScalarWhereInput[]
    OR?: BucketListItemScalarWhereInput[]
    NOT?: BucketListItemScalarWhereInput | BucketListItemScalarWhereInput[]
    id?: StringFilter<"BucketListItem"> | string
    userId?: StringFilter<"BucketListItem"> | string
    title?: StringFilter<"BucketListItem"> | string
    description?: StringNullableFilter<"BucketListItem"> | string | null
    priority?: IntFilter<"BucketListItem"> | number
    status?: EnumItemStatusFilter<"BucketListItem"> | $Enums.ItemStatus
    type?: EnumItemTypeNullableFilter<"BucketListItem"> | $Enums.ItemType | null
    bestSeason?: StringNullableFilter<"BucketListItem"> | string | null
    ageWindowMin?: IntNullableFilter<"BucketListItem"> | number | null
    ageWindowMax?: IntNullableFilter<"BucketListItem"> | number | null
    costEstimate?: EnumCostTierNullableFilter<"BucketListItem"> | $Enums.CostTier | null
    effortLevel?: EnumEffortTierNullableFilter<"BucketListItem"> | $Enums.EffortTier | null
    timeHorizon?: EnumTimeHorizonNullableFilter<"BucketListItem"> | $Enums.TimeHorizon | null
    constraints?: StringNullableListFilter<"BucketListItem">
    doabilityScore?: IntNullableFilter<"BucketListItem"> | number | null
    aiReasoning?: StringNullableFilter<"BucketListItem"> | string | null
    imageUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completedAt?: DateTimeNullableFilter<"BucketListItem"> | Date | string | null
    completionPhotoUrl?: StringNullableFilter<"BucketListItem"> | string | null
    completionNote?: StringNullableFilter<"BucketListItem"> | string | null
    source?: EnumItemSourceFilter<"BucketListItem"> | $Enums.ItemSource
    seedItemId?: StringNullableFilter<"BucketListItem"> | string | null
    createdAt?: DateTimeFilter<"BucketListItem"> | Date | string
    updatedAt?: DateTimeFilter<"BucketListItem"> | Date | string
  }

  export type UserCreateWithoutSituationsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSituationsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    bucketListItems?: BucketListItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSituationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSituationsInput, UserUncheckedCreateWithoutSituationsInput>
  }

  export type UserUpsertWithoutSituationsInput = {
    update: XOR<UserUpdateWithoutSituationsInput, UserUncheckedUpdateWithoutSituationsInput>
    create: XOR<UserCreateWithoutSituationsInput, UserUncheckedCreateWithoutSituationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSituationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSituationsInput, UserUncheckedUpdateWithoutSituationsInput>
  }

  export type UserUpdateWithoutSituationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSituationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    bucketListItems?: BucketListItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBucketListItemsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    situations?: UserSituationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBucketListItemsInput = {
    id?: string
    email: string
    emailVerified?: Date | string | null
    name?: string | null
    image?: string | null
    authProvider?: string
    createdAt?: Date | string
    lastActive?: Date | string
    onboardingComplete?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    situations?: UserSituationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBucketListItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBucketListItemsInput, UserUncheckedCreateWithoutBucketListItemsInput>
  }

  export type UserUpsertWithoutBucketListItemsInput = {
    update: XOR<UserUpdateWithoutBucketListItemsInput, UserUncheckedUpdateWithoutBucketListItemsInput>
    create: XOR<UserCreateWithoutBucketListItemsInput, UserUncheckedCreateWithoutBucketListItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBucketListItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBucketListItemsInput, UserUncheckedUpdateWithoutBucketListItemsInput>
  }

  export type UserUpdateWithoutBucketListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    situations?: UserSituationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBucketListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    onboardingComplete?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    situations?: UserSituationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type UserSituationCreateManyUserInput = {
    id?: string
    version?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type BucketListItemCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    priority?: number
    status?: $Enums.ItemStatus
    type?: $Enums.ItemType | null
    bestSeason?: string | null
    ageWindowMin?: number | null
    ageWindowMax?: number | null
    costEstimate?: $Enums.CostTier | null
    effortLevel?: $Enums.EffortTier | null
    timeHorizon?: $Enums.TimeHorizon | null
    constraints?: BucketListItemCreateconstraintsInput | string[]
    doabilityScore?: number | null
    aiReasoning?: string | null
    imageUrl?: string | null
    completedAt?: Date | string | null
    completionPhotoUrl?: string | null
    completionNote?: string | null
    source?: $Enums.ItemSource
    seedItemId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSituationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSituationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSituationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BucketListItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    type?: NullableEnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType | null
    bestSeason?: NullableStringFieldUpdateOperationsInput | string | null
    ageWindowMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageWindowMax?: NullableIntFieldUpdateOperationsInput | number | null
    costEstimate?: NullableEnumCostTierFieldUpdateOperationsInput | $Enums.CostTier | null
    effortLevel?: NullableEnumEffortTierFieldUpdateOperationsInput | $Enums.EffortTier | null
    timeHorizon?: NullableEnumTimeHorizonFieldUpdateOperationsInput | $Enums.TimeHorizon | null
    constraints?: BucketListItemUpdateconstraintsInput | string[]
    doabilityScore?: NullableIntFieldUpdateOperationsInput | number | null
    aiReasoning?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionPhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completionNote?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumItemSourceFieldUpdateOperationsInput | $Enums.ItemSource
    seedItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserSituationDefaultArgs instead
     */
    export type UserSituationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserSituationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BucketListItemDefaultArgs instead
     */
    export type BucketListItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BucketListItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeedLibraryItemDefaultArgs instead
     */
    export type SeedLibraryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeedLibraryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BetaSignupDefaultArgs instead
     */
    export type BetaSignupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BetaSignupDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}