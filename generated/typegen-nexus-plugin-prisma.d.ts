import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Account: Prisma.Account
  Session: Prisma.Session
  User: Prisma.User
  VerificationRequest: Prisma.VerificationRequest
  Image: Prisma.Image
  Post: Prisma.Post
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    accounts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'compoundId' | 'userId' | 'providerType' | 'providerId' | 'providerAccountId' | 'refreshToken' | 'accessToken' | 'accessTokenExpires' | 'createdAt' | 'updatedAt'
    }
    sessions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'userId' | 'expires' | 'sessionToken' | 'accessToken' | 'createdAt' | 'updatedAt'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt' | 'posts' | 'views' | 'followers' | 'slug'
      ordering: 'id' | 'name' | 'email' | 'emailVerified' | 'image' | 'createdAt' | 'updatedAt' | 'views' | 'followers' | 'slug'
    }
    verificationRequests: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'identifier' | 'token' | 'expires' | 'createdAt' | 'updatedAt'
    }
    images: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'publicId' | 'version' | 'signature' | 'width' | 'height' | 'format' | 'resourceType' | 'createdAt' | 'bytes' | 'type' | 'etag' | 'url' | 'secureUrl' | 'originalFilename' | 'Post'
      ordering: 'id' | 'publicId' | 'version' | 'signature' | 'width' | 'height' | 'format' | 'resourceType' | 'createdAt' | 'bytes' | 'type' | 'etag' | 'url' | 'secureUrl' | 'originalFilename'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'caption' | 'image' | 'published' | 'authorId' | 'author' | 'views' | 'imagePublicId'
      ordering: 'id' | 'createdAt' | 'caption' | 'published' | 'authorId' | 'views' | 'imagePublicId'
    }
  },
  Account: {

  }
  Session: {

  }
  User: {
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'caption' | 'image' | 'published' | 'authorId' | 'author' | 'views' | 'imagePublicId'
      ordering: 'id' | 'createdAt' | 'caption' | 'published' | 'authorId' | 'views' | 'imagePublicId'
    }
  }
  VerificationRequest: {

  }
  Image: {
    Post: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'caption' | 'image' | 'published' | 'authorId' | 'author' | 'views' | 'imagePublicId'
      ordering: 'id' | 'createdAt' | 'caption' | 'published' | 'authorId' | 'views' | 'imagePublicId'
    }
  }
  Post: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    account: 'Account'
    accounts: 'Account'
    session: 'Session'
    sessions: 'Session'
    user: 'User'
    users: 'User'
    verificationRequest: 'VerificationRequest'
    verificationRequests: 'VerificationRequest'
    image: 'Image'
    images: 'Image'
    post: 'Post'
    posts: 'Post'
  },
  Mutation: {
    createOneAccount: 'Account'
    updateOneAccount: 'Account'
    updateManyAccount: 'AffectedRowsOutput'
    deleteOneAccount: 'Account'
    deleteManyAccount: 'AffectedRowsOutput'
    upsertOneAccount: 'Account'
    createOneSession: 'Session'
    updateOneSession: 'Session'
    updateManySession: 'AffectedRowsOutput'
    deleteOneSession: 'Session'
    deleteManySession: 'AffectedRowsOutput'
    upsertOneSession: 'Session'
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneVerificationRequest: 'VerificationRequest'
    updateOneVerificationRequest: 'VerificationRequest'
    updateManyVerificationRequest: 'AffectedRowsOutput'
    deleteOneVerificationRequest: 'VerificationRequest'
    deleteManyVerificationRequest: 'AffectedRowsOutput'
    upsertOneVerificationRequest: 'VerificationRequest'
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'AffectedRowsOutput'
    deleteOneImage: 'Image'
    deleteManyImage: 'AffectedRowsOutput'
    upsertOneImage: 'Image'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'AffectedRowsOutput'
    deleteOnePost: 'Post'
    deleteManyPost: 'AffectedRowsOutput'
    upsertOnePost: 'Post'
  },
  Account: {
    id: 'Int'
    compoundId: 'String'
    userId: 'Int'
    providerType: 'String'
    providerId: 'String'
    providerAccountId: 'String'
    refreshToken: 'String'
    accessToken: 'String'
    accessTokenExpires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Session: {
    id: 'Int'
    userId: 'Int'
    expires: 'DateTime'
    sessionToken: 'String'
    accessToken: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  User: {
    id: 'Int'
    name: 'String'
    email: 'String'
    emailVerified: 'DateTime'
    image: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    posts: 'Post'
    views: 'Int'
    followers: 'Int'
    slug: 'String'
  }
  VerificationRequest: {
    id: 'Int'
    identifier: 'String'
    token: 'String'
    expires: 'DateTime'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
  Image: {
    id: 'Int'
    publicId: 'String'
    version: 'Int'
    signature: 'String'
    width: 'Int'
    height: 'Int'
    format: 'String'
    resourceType: 'String'
    createdAt: 'DateTime'
    bytes: 'Int'
    type: 'String'
    etag: 'String'
    url: 'String'
    secureUrl: 'String'
    originalFilename: 'String'
    Post: 'Post'
  }
  Post: {
    id: 'Int'
    createdAt: 'DateTime'
    caption: 'String'
    image: 'Image'
    published: 'Boolean'
    authorId: 'Int'
    author: 'User'
    views: 'Int'
    imagePublicId: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Account: Typegen.NexusPrismaFields<'Account'>
  Session: Typegen.NexusPrismaFields<'Session'>
  User: Typegen.NexusPrismaFields<'User'>
  VerificationRequest: Typegen.NexusPrismaFields<'VerificationRequest'>
  Image: Typegen.NexusPrismaFields<'Image'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  