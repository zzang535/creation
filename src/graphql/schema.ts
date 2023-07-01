export const typeDefs = `
  scalar DateTime

  type Feed {
    id: ID
    comment: String
    date: String
    image_url: String
    created_at: DateTime
    updated_at: DateTime
    user_id: Int
  }

  type Query {
    feeds: [Feed]!
  }
`