import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'
import { User } from './resolvers'

export const schema = makeSchema({
  types: [User],
  contextType: {
    module: path.join(process.cwd(), 'graphql', 'context.ts'),
    export: 'Context'
  },

  /**/
  plugins: [
    nexusPrisma({
      outputs: { typegen: path.join(process.cwd(), 'generated', 'typegen-nexus-plugin-prisma.d.ts') }
    }),
  ],
  /**/
  outputs: {
    typegen: path.join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'generated', 'schema.graphql')
  }
})
