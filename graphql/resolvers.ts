import { arg, inputObjectType, mutationType, objectType, queryType } from 'nexus'

export const User = objectType({
  name: 'User',

  definition(t) {
    t.model.id()
    t.model.name()
  }
})
