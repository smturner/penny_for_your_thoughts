const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username:String
  email:String
  password:String
  quotes:[Quotes]!
}

type Quote {
  _id:ID
  quoteText:String
  quoteAuthor:String
  createdAt:Date
  quotePoster:String

}
  
  type Query {
    users: [User]
    quotes: [Quote]
  }

  type Mutation {
    
  }
`;

module.exports = typeDefs;
