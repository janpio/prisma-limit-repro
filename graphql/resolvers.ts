import { arg, inputObjectType, mutationType, objectType, queryType } from 'nexus'

export const Query = queryType({
  definition(t) {
    t.crud.posts()
    t.crud.post()
    t.crud.user()
    t.crud.images()
    t.crud.image()
    t.crud.users()
  }
})

// const shield = {
//   resolve: async (_, args, ctx) => {
//     return !!ctx.session
//   }
// }

export const User = objectType({
  name: 'User',

  definition(t) {
    t.model.id()
    t.model.name()
    t.model.image()
    t.model.views()
    t.model.posts()
    t.model.followers()
    t.model.slug()

    // t.model.email({
    //   shield
    // })
    // t.model.emailVerified({ shield })
  }
})

export const Image = objectType({
  name: 'Image',
  definition(t) {
    t.model.secureUrl()
    t.model.url()
    t.model.height()
    t.model.width()
    t.model.createdAt()
    t.model.resourceType()
    t.model.publicId()
    t.model.format()
    t.model.id()
    t.model.originalFilename()
    t.model.resourceType()
  }
})

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.model.author()
    t.model.caption()
    t.model.createdAt()
    t.model.image()
    t.model.views()
    t.model.id()
    t.model.authorId()
  }
})

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('name')
    t.field('emailVerified', { type: 'DateTime' })
    t.string('email')
    t.string('image')
  }
})

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOnePost({ alias: 'createPost' })

    t.field('createPost', {
      type: 'Post',
      args: {
        data: arg({
          type: 'PostCreateInput'
        })
      },
      // shield,
      // resolve: async (_, { data }, ctx) => {
      //   return await ctx.prisma.post.create({
      //     data
      //   })
      // }
    })

    t.crud.createOneUser()

    t.field('updateUserSettings', {
      type: 'User',
      args: {
        data: arg({ type: 'UserUpdateInput' }),
        id: arg({ type: 'Int' })
      },
      resolve: async (_, { data, id }, ctx) => {
        return await ctx.prisma.user.update({
          data: {
            ...data,
            emailVerified: data.emailVerified
          },
          where: { id }
        })
      }
    })

    t.field('updateViews', {
      type: 'Post',
      args: {
        id: arg({
          type: 'Int'
        }),
        userId: arg({
          type: 'Int'
        })
      },
      resolve: async (_, { userId, id }, ctx) => {
        // Update user as well
        await ctx.prisma.user.update({
          data: {
            views: {
              increment: 1
            }
          },
          where: { id: userId }
        })

        return await ctx.prisma.post.update({
          data: {
            views: {
              increment: 1
            }
          },
          where: { id }
        })
      }
    })
  }
})
