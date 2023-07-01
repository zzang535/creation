
import prisma from "../../lib/prisma"

export const resolvers = {
  Query: {
    feeds: () => {
      return prisma.feed.findMany()
    },
  },
}