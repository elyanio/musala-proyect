// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  ad: (where?: AdWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  ad: (where: AdWhereUniqueInput) => AdNullablePromise;
  ads: (args?: {
    where?: AdWhereInput;
    orderBy?: AdOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Ad>;
  adsConnection: (args?: {
    where?: AdWhereInput;
    orderBy?: AdOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => AdConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createAd: (data: AdCreateInput) => AdPromise;
  updateAd: (args: {
    data: AdUpdateInput;
    where: AdWhereUniqueInput;
  }) => AdPromise;
  updateManyAds: (args: {
    data: AdUpdateManyMutationInput;
    where?: AdWhereInput;
  }) => BatchPayloadPromise;
  upsertAd: (args: {
    where: AdWhereUniqueInput;
    create: AdCreateInput;
    update: AdUpdateInput;
  }) => AdPromise;
  deleteAd: (where: AdWhereUniqueInput) => AdPromise;
  deleteManyAds: (where?: AdWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  ad: (where?: AdSubscriptionWhereInput) => AdSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type AdOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "description_ASC"
  | "description_DESC"
  | "image_ASC"
  | "image_DESC"
  | "price_ASC"
  | "price_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "fullName_ASC"
  | "fullName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "token_ASC"
  | "token_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface AdUpdateManyMutationInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
}

export interface AdCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  description: String;
  image: String;
  price: Int;
  host: UserCreateOneInput;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type AdWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface AdUpdateInput {
  title?: Maybe<String>;
  description?: Maybe<String>;
  image?: Maybe<String>;
  price?: Maybe<Int>;
  host?: Maybe<UserUpdateOneRequiredInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  token?: Maybe<String>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  fullName?: Maybe<String>;
  fullName_not?: Maybe<String>;
  fullName_in?: Maybe<String[] | String>;
  fullName_not_in?: Maybe<String[] | String>;
  fullName_lt?: Maybe<String>;
  fullName_lte?: Maybe<String>;
  fullName_gt?: Maybe<String>;
  fullName_gte?: Maybe<String>;
  fullName_contains?: Maybe<String>;
  fullName_not_contains?: Maybe<String>;
  fullName_starts_with?: Maybe<String>;
  fullName_not_starts_with?: Maybe<String>;
  fullName_ends_with?: Maybe<String>;
  fullName_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  role?: Maybe<String>;
  role_not?: Maybe<String>;
  role_in?: Maybe<String[] | String>;
  role_not_in?: Maybe<String[] | String>;
  role_lt?: Maybe<String>;
  role_lte?: Maybe<String>;
  role_gt?: Maybe<String>;
  role_gte?: Maybe<String>;
  role_contains?: Maybe<String>;
  role_not_contains?: Maybe<String>;
  role_starts_with?: Maybe<String>;
  role_not_starts_with?: Maybe<String>;
  role_ends_with?: Maybe<String>;
  role_not_ends_with?: Maybe<String>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  token?: Maybe<String>;
  token_not?: Maybe<String>;
  token_in?: Maybe<String[] | String>;
  token_not_in?: Maybe<String[] | String>;
  token_lt?: Maybe<String>;
  token_lte?: Maybe<String>;
  token_gt?: Maybe<String>;
  token_gte?: Maybe<String>;
  token_contains?: Maybe<String>;
  token_not_contains?: Maybe<String>;
  token_starts_with?: Maybe<String>;
  token_not_starts_with?: Maybe<String>;
  token_ends_with?: Maybe<String>;
  token_not_ends_with?: Maybe<String>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  fullName: String;
  password: String;
  role: String;
  token?: Maybe<String>;
}

export interface AdSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<AdWhereInput>;
  AND?: Maybe<AdSubscriptionWhereInput[] | AdSubscriptionWhereInput>;
  OR?: Maybe<AdSubscriptionWhereInput[] | AdSubscriptionWhereInput>;
  NOT?: Maybe<AdSubscriptionWhereInput[] | AdSubscriptionWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  token?: Maybe<String>;
}

export interface AdWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  price?: Maybe<Int>;
  price_not?: Maybe<Int>;
  price_in?: Maybe<Int[] | Int>;
  price_not_in?: Maybe<Int[] | Int>;
  price_lt?: Maybe<Int>;
  price_lte?: Maybe<Int>;
  price_gt?: Maybe<Int>;
  price_gte?: Maybe<Int>;
  host?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<AdWhereInput[] | AdWhereInput>;
  OR?: Maybe<AdWhereInput[] | AdWhereInput>;
  NOT?: Maybe<AdWhereInput[] | AdWhereInput>;
}

export interface UserUpdateDataInput {
  email?: Maybe<String>;
  fullName?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<String>;
  token?: Maybe<String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AdConnection {
  pageInfo: PageInfo;
  edges: AdEdge[];
}

export interface AdConnectionPromise
  extends Promise<AdConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<AdEdge>>() => T;
  aggregate: <T = AggregateAdPromise>() => T;
}

export interface AdConnectionSubscription
  extends Promise<AsyncIterator<AdConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<AdEdgeSubscription>>>() => T;
  aggregate: <T = AggregateAdSubscription>() => T;
}

export interface AdSubscriptionPayload {
  mutation: MutationType;
  node: Ad;
  updatedFields: String[];
  previousValues: AdPreviousValues;
}

export interface AdSubscriptionPayloadPromise
  extends Promise<AdSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = AdPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = AdPreviousValuesPromise>() => T;
}

export interface AdSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<AdSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = AdSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = AdPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  fullName: String;
  password: String;
  role: String;
  createdAt: DateTimeOutput;
  token?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  token: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  fullName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  token: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AdPreviousValues {
  id: ID_Output;
  title: String;
  description: String;
  image: String;
  price: Int;
  createdAt: DateTimeOutput;
}

export interface AdPreviousValuesPromise
  extends Promise<AdPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface AdPreviousValuesSubscription
  extends Promise<AsyncIterator<AdPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface User {
  id: ID_Output;
  email: String;
  fullName: String;
  password: String;
  role: String;
  createdAt: DateTimeOutput;
  token?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  token: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  fullName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<String>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  token: () => Promise<AsyncIterator<String>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  fullName: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<String>;
  createdAt: () => Promise<DateTimeOutput>;
  token: () => Promise<String>;
}

export interface Ad {
  id: ID_Output;
  title: String;
  description: String;
  image: String;
  price: Int;
  createdAt: DateTimeOutput;
}

export interface AdPromise extends Promise<Ad>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
  host: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface AdSubscription
  extends Promise<AsyncIterator<Ad>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  host: <T = UserSubscription>() => T;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface AdNullablePromise extends Promise<Ad | null>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  description: () => Promise<String>;
  image: () => Promise<String>;
  price: () => Promise<Int>;
  host: <T = UserPromise>() => T;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateAd {
  count: Int;
}

export interface AggregateAdPromise extends Promise<AggregateAd>, Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateAdSubscription
  extends Promise<AsyncIterator<AggregateAd>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AdEdge {
  node: Ad;
  cursor: String;
}

export interface AdEdgePromise extends Promise<AdEdge>, Fragmentable {
  node: <T = AdPromise>() => T;
  cursor: () => Promise<String>;
}

export interface AdEdgeSubscription
  extends Promise<AsyncIterator<AdEdge>>,
    Fragmentable {
  node: <T = AdSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Ad",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "ModelTypes",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/yanier-alfonso/musala-proyect/dev`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
