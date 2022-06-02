const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  userName:String
  email:String
  password:String
  quotes:[Quote]
  follows:[User]
}

type Quote {
  _id:ID
  quoteText:String
  quoteAuthor:String
  createdAt:String
  quotePoster: String

}

type Auth {
  token: ID!
  user: User
}
  
  type Query {
    users: [User]
    quotes: [Quote]
    user(userId: ID!):  User
    quote(quoteId: ID!): Quote
    me: User
    allQuotes:[Quote]
  }

  type Mutation {
    addUser (userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuote(quoteText: String!, quoteAuthor: String!): User
    addFollow(userName: String!): User
    removeFollow(userName: String!): User
    removeQuote(quoteId: ID!): Quote
    updateQuote(quoteId: ID!, quoteText: String!, quoteAuthor: String!): Quote
  }

`;

module.exports = typeDefs;

// addQuote(quoteText: String!, quoteAuthor: String!): Quote
