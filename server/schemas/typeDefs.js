const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  userName:String
  email:String
  password:String
  quotes:[Quote]!
}

type Quote {
  _id:ID
  quoteText:String
  quoteAuthor:String
  createdAt:String
  quotePoster:String

}

type Auth {
  token: ID!
  user: User
}
  
  type Query {
    users: [User]
    quotes: [Quote]
  }

  type Mutation {
    addUser (userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;
