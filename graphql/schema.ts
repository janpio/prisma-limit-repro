import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'
import { Mutation, Post, Query, User, Image, UserUpdateInput } from './resolvers'
// import { ForbiddenError } from 'apollo-server-micro'
// import { allow, nexusShield } from 'nexus-shield'

export const schema = makeSchema({
  types: [Query, Mutation, User, Post, Image, UserUpdateInput],
  contextType: {
    module: path.join(process.cwd(), 'graphql', 'context.ts'),
    export: 'Context'
  },

  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      outputs: { typegen: path.join(process.cwd(), 'generated', 'typegen-nexus-plugin-prisma.d.ts') }
    }),
    // nexusShield({
    //   defaultError: new ForbiddenError('Not allowed'),
    //   defaultRule: allow
    // })
  ],
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  }
})
