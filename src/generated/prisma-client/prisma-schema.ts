// Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type Ad {
  id: ID!
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  host: User!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  blockedDays(where: BlockedDayWhereInput, orderBy: BlockedDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlockedDay!]
  createdAt: DateTime!
}

type AdConnection {
  pageInfo: PageInfo!
  edges: [AdEdge]!
  aggregate: AggregateAd!
}

input AdCreateInput {
  id: ID
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  host: UserCreateOneWithoutAdInput!
  bookings: BookingCreateManyWithoutAdInput
  blockedDays: BlockedDayCreateManyWithoutAdInput
}

input AdCreateOneWithoutBlockedDaysInput {
  create: AdCreateWithoutBlockedDaysInput
  connect: AdWhereUniqueInput
}

input AdCreateOneWithoutBookingsInput {
  create: AdCreateWithoutBookingsInput
  connect: AdWhereUniqueInput
}

input AdCreateOneWithoutHostInput {
  create: AdCreateWithoutHostInput
  connect: AdWhereUniqueInput
}

input AdCreateWithoutBlockedDaysInput {
  id: ID
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  host: UserCreateOneWithoutAdInput!
  bookings: BookingCreateManyWithoutAdInput
}

input AdCreateWithoutBookingsInput {
  id: ID
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  host: UserCreateOneWithoutAdInput!
  blockedDays: BlockedDayCreateManyWithoutAdInput
}

input AdCreateWithoutHostInput {
  id: ID
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  bookings: BookingCreateManyWithoutAdInput
  blockedDays: BlockedDayCreateManyWithoutAdInput
}

type AdEdge {
  node: Ad!
  cursor: String!
}

enum AdOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  price_ASC
  price_DESC
  ranking_ASC
  ranking_DESC
  createdAt_ASC
  createdAt_DESC
}

type AdPreviousValues {
  id: ID!
  title: String!
  description: String!
  image: String!
  price: Int!
  ranking: Float!
  createdAt: DateTime!
}

type AdSubscriptionPayload {
  mutation: MutationType!
  node: Ad
  updatedFields: [String!]
  previousValues: AdPreviousValues
}

input AdSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdWhereInput
  AND: [AdSubscriptionWhereInput!]
  OR: [AdSubscriptionWhereInput!]
  NOT: [AdSubscriptionWhereInput!]
}

input AdUpdateInput {
  title: String
  description: String
  image: String
  price: Int
  ranking: Float
  host: UserUpdateOneRequiredWithoutAdInput
  bookings: BookingUpdateManyWithoutAdInput
  blockedDays: BlockedDayUpdateManyWithoutAdInput
}

input AdUpdateManyMutationInput {
  title: String
  description: String
  image: String
  price: Int
  ranking: Float
}

input AdUpdateOneRequiredWithoutBlockedDaysInput {
  create: AdCreateWithoutBlockedDaysInput
  update: AdUpdateWithoutBlockedDaysDataInput
  upsert: AdUpsertWithoutBlockedDaysInput
  connect: AdWhereUniqueInput
}

input AdUpdateOneRequiredWithoutBookingsInput {
  create: AdCreateWithoutBookingsInput
  update: AdUpdateWithoutBookingsDataInput
  upsert: AdUpsertWithoutBookingsInput
  connect: AdWhereUniqueInput
}

input AdUpdateOneWithoutHostInput {
  create: AdCreateWithoutHostInput
  update: AdUpdateWithoutHostDataInput
  upsert: AdUpsertWithoutHostInput
  delete: Boolean
  disconnect: Boolean
  connect: AdWhereUniqueInput
}

input AdUpdateWithoutBlockedDaysDataInput {
  title: String
  description: String
  image: String
  price: Int
  ranking: Float
  host: UserUpdateOneRequiredWithoutAdInput
  bookings: BookingUpdateManyWithoutAdInput
}

input AdUpdateWithoutBookingsDataInput {
  title: String
  description: String
  image: String
  price: Int
  ranking: Float
  host: UserUpdateOneRequiredWithoutAdInput
  blockedDays: BlockedDayUpdateManyWithoutAdInput
}

input AdUpdateWithoutHostDataInput {
  title: String
  description: String
  image: String
  price: Int
  ranking: Float
  bookings: BookingUpdateManyWithoutAdInput
  blockedDays: BlockedDayUpdateManyWithoutAdInput
}

input AdUpsertWithoutBlockedDaysInput {
  update: AdUpdateWithoutBlockedDaysDataInput!
  create: AdCreateWithoutBlockedDaysInput!
}

input AdUpsertWithoutBookingsInput {
  update: AdUpdateWithoutBookingsDataInput!
  create: AdCreateWithoutBookingsInput!
}

input AdUpsertWithoutHostInput {
  update: AdUpdateWithoutHostDataInput!
  create: AdCreateWithoutHostInput!
}

input AdWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  price: Int
  price_not: Int
  price_in: [Int!]
  price_not_in: [Int!]
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  ranking: Float
  ranking_not: Float
  ranking_in: [Float!]
  ranking_not_in: [Float!]
  ranking_lt: Float
  ranking_lte: Float
  ranking_gt: Float
  ranking_gte: Float
  host: UserWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  blockedDays_every: BlockedDayWhereInput
  blockedDays_some: BlockedDayWhereInput
  blockedDays_none: BlockedDayWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AdWhereInput!]
  OR: [AdWhereInput!]
  NOT: [AdWhereInput!]
}

input AdWhereUniqueInput {
  id: ID
}

type AggregateAd {
  count: Int!
}

type AggregateBlockedDay {
  count: Int!
}

type AggregateBooking {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type BlockedDay {
  id: ID!
  checkin: DateTime!
  checkout: DateTime!
  byBooking: Boolean
  ad: Ad!
}

type BlockedDayConnection {
  pageInfo: PageInfo!
  edges: [BlockedDayEdge]!
  aggregate: AggregateBlockedDay!
}

input BlockedDayCreateInput {
  id: ID
  checkin: DateTime!
  checkout: DateTime!
  byBooking: Boolean
  ad: AdCreateOneWithoutBlockedDaysInput!
}

input BlockedDayCreateManyWithoutAdInput {
  create: [BlockedDayCreateWithoutAdInput!]
  connect: [BlockedDayWhereUniqueInput!]
}

input BlockedDayCreateWithoutAdInput {
  id: ID
  checkin: DateTime!
  checkout: DateTime!
  byBooking: Boolean
}

type BlockedDayEdge {
  node: BlockedDay!
  cursor: String!
}

enum BlockedDayOrderByInput {
  id_ASC
  id_DESC
  checkin_ASC
  checkin_DESC
  checkout_ASC
  checkout_DESC
  byBooking_ASC
  byBooking_DESC
}

type BlockedDayPreviousValues {
  id: ID!
  checkin: DateTime!
  checkout: DateTime!
  byBooking: Boolean
}

input BlockedDayScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  checkin: DateTime
  checkin_not: DateTime
  checkin_in: [DateTime!]
  checkin_not_in: [DateTime!]
  checkin_lt: DateTime
  checkin_lte: DateTime
  checkin_gt: DateTime
  checkin_gte: DateTime
  checkout: DateTime
  checkout_not: DateTime
  checkout_in: [DateTime!]
  checkout_not_in: [DateTime!]
  checkout_lt: DateTime
  checkout_lte: DateTime
  checkout_gt: DateTime
  checkout_gte: DateTime
  byBooking: Boolean
  byBooking_not: Boolean
  AND: [BlockedDayScalarWhereInput!]
  OR: [BlockedDayScalarWhereInput!]
  NOT: [BlockedDayScalarWhereInput!]
}

type BlockedDaySubscriptionPayload {
  mutation: MutationType!
  node: BlockedDay
  updatedFields: [String!]
  previousValues: BlockedDayPreviousValues
}

input BlockedDaySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BlockedDayWhereInput
  AND: [BlockedDaySubscriptionWhereInput!]
  OR: [BlockedDaySubscriptionWhereInput!]
  NOT: [BlockedDaySubscriptionWhereInput!]
}

input BlockedDayUpdateInput {
  checkin: DateTime
  checkout: DateTime
  byBooking: Boolean
  ad: AdUpdateOneRequiredWithoutBlockedDaysInput
}

input BlockedDayUpdateManyDataInput {
  checkin: DateTime
  checkout: DateTime
  byBooking: Boolean
}

input BlockedDayUpdateManyMutationInput {
  checkin: DateTime
  checkout: DateTime
  byBooking: Boolean
}

input BlockedDayUpdateManyWithoutAdInput {
  create: [BlockedDayCreateWithoutAdInput!]
  delete: [BlockedDayWhereUniqueInput!]
  connect: [BlockedDayWhereUniqueInput!]
  set: [BlockedDayWhereUniqueInput!]
  disconnect: [BlockedDayWhereUniqueInput!]
  update: [BlockedDayUpdateWithWhereUniqueWithoutAdInput!]
  upsert: [BlockedDayUpsertWithWhereUniqueWithoutAdInput!]
  deleteMany: [BlockedDayScalarWhereInput!]
  updateMany: [BlockedDayUpdateManyWithWhereNestedInput!]
}

input BlockedDayUpdateManyWithWhereNestedInput {
  where: BlockedDayScalarWhereInput!
  data: BlockedDayUpdateManyDataInput!
}

input BlockedDayUpdateWithoutAdDataInput {
  checkin: DateTime
  checkout: DateTime
  byBooking: Boolean
}

input BlockedDayUpdateWithWhereUniqueWithoutAdInput {
  where: BlockedDayWhereUniqueInput!
  data: BlockedDayUpdateWithoutAdDataInput!
}

input BlockedDayUpsertWithWhereUniqueWithoutAdInput {
  where: BlockedDayWhereUniqueInput!
  update: BlockedDayUpdateWithoutAdDataInput!
  create: BlockedDayCreateWithoutAdInput!
}

input BlockedDayWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  checkin: DateTime
  checkin_not: DateTime
  checkin_in: [DateTime!]
  checkin_not_in: [DateTime!]
  checkin_lt: DateTime
  checkin_lte: DateTime
  checkin_gt: DateTime
  checkin_gte: DateTime
  checkout: DateTime
  checkout_not: DateTime
  checkout_in: [DateTime!]
  checkout_not_in: [DateTime!]
  checkout_lt: DateTime
  checkout_lte: DateTime
  checkout_gt: DateTime
  checkout_gte: DateTime
  byBooking: Boolean
  byBooking_not: Boolean
  ad: AdWhereInput
  AND: [BlockedDayWhereInput!]
  OR: [BlockedDayWhereInput!]
  NOT: [BlockedDayWhereInput!]
}

input BlockedDayWhereUniqueInput {
  id: ID
}

type Booking {
  id: ID!
  checkin: DateTime!
  checkout: DateTime!
  totalPaid: Float!
  pax: Int!
  client: User!
  ad: Ad!
  createdAt: DateTime!
}

type BookingConnection {
  pageInfo: PageInfo!
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  id: ID
  checkin: DateTime!
  checkout: DateTime!
  totalPaid: Float!
  pax: Int!
  client: UserCreateOneWithoutBookingsInput!
  ad: AdCreateOneWithoutBookingsInput!
}

input BookingCreateManyWithoutAdInput {
  create: [BookingCreateWithoutAdInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateManyWithoutClientInput {
  create: [BookingCreateWithoutClientInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateWithoutAdInput {
  id: ID
  checkin: DateTime!
  checkout: DateTime!
  totalPaid: Float!
  pax: Int!
  client: UserCreateOneWithoutBookingsInput!
}

input BookingCreateWithoutClientInput {
  id: ID
  checkin: DateTime!
  checkout: DateTime!
  totalPaid: Float!
  pax: Int!
  ad: AdCreateOneWithoutBookingsInput!
}

type BookingEdge {
  node: Booking!
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  checkin_ASC
  checkin_DESC
  checkout_ASC
  checkout_DESC
  totalPaid_ASC
  totalPaid_DESC
  pax_ASC
  pax_DESC
  createdAt_ASC
  createdAt_DESC
}

type BookingPreviousValues {
  id: ID!
  checkin: DateTime!
  checkout: DateTime!
  totalPaid: Float!
  pax: Int!
  createdAt: DateTime!
}

input BookingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  checkin: DateTime
  checkin_not: DateTime
  checkin_in: [DateTime!]
  checkin_not_in: [DateTime!]
  checkin_lt: DateTime
  checkin_lte: DateTime
  checkin_gt: DateTime
  checkin_gte: DateTime
  checkout: DateTime
  checkout_not: DateTime
  checkout_in: [DateTime!]
  checkout_not_in: [DateTime!]
  checkout_lt: DateTime
  checkout_lte: DateTime
  checkout_gt: DateTime
  checkout_gte: DateTime
  totalPaid: Float
  totalPaid_not: Float
  totalPaid_in: [Float!]
  totalPaid_not_in: [Float!]
  totalPaid_lt: Float
  totalPaid_lte: Float
  totalPaid_gt: Float
  totalPaid_gte: Float
  pax: Int
  pax_not: Int
  pax_in: [Int!]
  pax_not_in: [Int!]
  pax_lt: Int
  pax_lte: Int
  pax_gt: Int
  pax_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [BookingScalarWhereInput!]
  OR: [BookingScalarWhereInput!]
  NOT: [BookingScalarWhereInput!]
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
  AND: [BookingSubscriptionWhereInput!]
  OR: [BookingSubscriptionWhereInput!]
  NOT: [BookingSubscriptionWhereInput!]
}

input BookingUpdateInput {
  checkin: DateTime
  checkout: DateTime
  totalPaid: Float
  pax: Int
  client: UserUpdateOneRequiredWithoutBookingsInput
  ad: AdUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateManyDataInput {
  checkin: DateTime
  checkout: DateTime
  totalPaid: Float
  pax: Int
}

input BookingUpdateManyMutationInput {
  checkin: DateTime
  checkout: DateTime
  totalPaid: Float
  pax: Int
}

input BookingUpdateManyWithoutAdInput {
  create: [BookingCreateWithoutAdInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  set: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutAdInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutAdInput!]
  deleteMany: [BookingScalarWhereInput!]
  updateMany: [BookingUpdateManyWithWhereNestedInput!]
}

input BookingUpdateManyWithoutClientInput {
  create: [BookingCreateWithoutClientInput!]
  delete: [BookingWhereUniqueInput!]
  connect: [BookingWhereUniqueInput!]
  set: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutClientInput!]
  deleteMany: [BookingScalarWhereInput!]
  updateMany: [BookingUpdateManyWithWhereNestedInput!]
}

input BookingUpdateManyWithWhereNestedInput {
  where: BookingScalarWhereInput!
  data: BookingUpdateManyDataInput!
}

input BookingUpdateWithoutAdDataInput {
  checkin: DateTime
  checkout: DateTime
  totalPaid: Float
  pax: Int
  client: UserUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateWithoutClientDataInput {
  checkin: DateTime
  checkout: DateTime
  totalPaid: Float
  pax: Int
  ad: AdUpdateOneRequiredWithoutBookingsInput
}

input BookingUpdateWithWhereUniqueWithoutAdInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutAdDataInput!
}

input BookingUpdateWithWhereUniqueWithoutClientInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutClientDataInput!
}

input BookingUpsertWithWhereUniqueWithoutAdInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutAdDataInput!
  create: BookingCreateWithoutAdInput!
}

input BookingUpsertWithWhereUniqueWithoutClientInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutClientDataInput!
  create: BookingCreateWithoutClientInput!
}

input BookingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  checkin: DateTime
  checkin_not: DateTime
  checkin_in: [DateTime!]
  checkin_not_in: [DateTime!]
  checkin_lt: DateTime
  checkin_lte: DateTime
  checkin_gt: DateTime
  checkin_gte: DateTime
  checkout: DateTime
  checkout_not: DateTime
  checkout_in: [DateTime!]
  checkout_not_in: [DateTime!]
  checkout_lt: DateTime
  checkout_lte: DateTime
  checkout_gt: DateTime
  checkout_gte: DateTime
  totalPaid: Float
  totalPaid_not: Float
  totalPaid_in: [Float!]
  totalPaid_not_in: [Float!]
  totalPaid_lt: Float
  totalPaid_lte: Float
  totalPaid_gt: Float
  totalPaid_gte: Float
  pax: Int
  pax_not: Int
  pax_in: [Int!]
  pax_not_in: [Int!]
  pax_lt: Int
  pax_lte: Int
  pax_gt: Int
  pax_gte: Int
  client: UserWhereInput
  ad: AdWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [BookingWhereInput!]
  OR: [BookingWhereInput!]
  NOT: [BookingWhereInput!]
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createAd(data: AdCreateInput!): Ad!
  updateAd(data: AdUpdateInput!, where: AdWhereUniqueInput!): Ad
  updateManyAds(data: AdUpdateManyMutationInput!, where: AdWhereInput): BatchPayload!
  upsertAd(where: AdWhereUniqueInput!, create: AdCreateInput!, update: AdUpdateInput!): Ad!
  deleteAd(where: AdWhereUniqueInput!): Ad
  deleteManyAds(where: AdWhereInput): BatchPayload!
  createBlockedDay(data: BlockedDayCreateInput!): BlockedDay!
  updateBlockedDay(data: BlockedDayUpdateInput!, where: BlockedDayWhereUniqueInput!): BlockedDay
  updateManyBlockedDays(data: BlockedDayUpdateManyMutationInput!, where: BlockedDayWhereInput): BatchPayload!
  upsertBlockedDay(where: BlockedDayWhereUniqueInput!, create: BlockedDayCreateInput!, update: BlockedDayUpdateInput!): BlockedDay!
  deleteBlockedDay(where: BlockedDayWhereUniqueInput!): BlockedDay
  deleteManyBlockedDays(where: BlockedDayWhereInput): BatchPayload!
  createBooking(data: BookingCreateInput!): Booking!
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateManyBookings(data: BookingUpdateManyMutationInput!, where: BookingWhereInput): BatchPayload!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  ad(where: AdWhereUniqueInput!): Ad
  ads(where: AdWhereInput, orderBy: AdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ad]!
  adsConnection(where: AdWhereInput, orderBy: AdOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdConnection!
  blockedDay(where: BlockedDayWhereUniqueInput!): BlockedDay
  blockedDays(where: BlockedDayWhereInput, orderBy: BlockedDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BlockedDay]!
  blockedDaysConnection(where: BlockedDayWhereInput, orderBy: BlockedDayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BlockedDayConnection!
  booking(where: BookingWhereUniqueInput!): Booking
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  ad(where: AdSubscriptionWhereInput): AdSubscriptionPayload
  blockedDay(where: BlockedDaySubscriptionWhereInput): BlockedDaySubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  fullName: String!
  password: String!
  phone: String!
  role: String!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
  ad: Ad
  token: String
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  fullName: String!
  password: String!
  phone: String!
  role: String!
  bookings: BookingCreateManyWithoutClientInput
  ad: AdCreateOneWithoutHostInput
  token: String
}

input UserCreateOneWithoutAdInput {
  create: UserCreateWithoutAdInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAdInput {
  id: ID
  email: String!
  fullName: String!
  password: String!
  phone: String!
  role: String!
  bookings: BookingCreateManyWithoutClientInput
  token: String
}

input UserCreateWithoutBookingsInput {
  id: ID
  email: String!
  fullName: String!
  password: String!
  phone: String!
  role: String!
  ad: AdCreateOneWithoutHostInput
  token: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  fullName_ASC
  fullName_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  role_ASC
  role_DESC
  token_ASC
  token_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  fullName: String!
  password: String!
  phone: String!
  role: String!
  token: String
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  fullName: String
  password: String
  phone: String
  role: String
  bookings: BookingUpdateManyWithoutClientInput
  ad: AdUpdateOneWithoutHostInput
  token: String
}

input UserUpdateManyMutationInput {
  email: String
  fullName: String
  password: String
  phone: String
  role: String
  token: String
}

input UserUpdateOneRequiredWithoutAdInput {
  create: UserCreateWithoutAdInput
  update: UserUpdateWithoutAdDataInput
  upsert: UserUpsertWithoutAdInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAdDataInput {
  email: String
  fullName: String
  password: String
  phone: String
  role: String
  bookings: BookingUpdateManyWithoutClientInput
  token: String
}

input UserUpdateWithoutBookingsDataInput {
  email: String
  fullName: String
  password: String
  phone: String
  role: String
  ad: AdUpdateOneWithoutHostInput
  token: String
}

input UserUpsertWithoutAdInput {
  update: UserUpdateWithoutAdDataInput!
  create: UserCreateWithoutAdInput!
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  fullName: String
  fullName_not: String
  fullName_in: [String!]
  fullName_not_in: [String!]
  fullName_lt: String
  fullName_lte: String
  fullName_gt: String
  fullName_gte: String
  fullName_contains: String
  fullName_not_contains: String
  fullName_starts_with: String
  fullName_not_starts_with: String
  fullName_ends_with: String
  fullName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
  ad: AdWhereInput
  token: String
  token_not: String
  token_in: [String!]
  token_not_in: [String!]
  token_lt: String
  token_lte: String
  token_gt: String
  token_gte: String
  token_contains: String
  token_not_contains: String
  token_starts_with: String
  token_not_starts_with: String
  token_ends_with: String
  token_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`