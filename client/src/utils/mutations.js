import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`

export const ADD_USER = gql `
mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`

export const ADD_QUOTE = gql`
mutation addQuote($quoteText: String!, $quoteAuthor: String!) {
  addQuote(quoteText: $quoteText, quoteAuthor: $quoteAuthor) {
    _id
    userName
    email
    quotes {
      _id
      quoteText
      quoteAuthor
      createdAt
      quotePoster {
        userName
      }
    }
  }
}`;

export const UPDATE_QUOTE = gql`
mutation updateQuote($quoteId: ID!, $quoteText: String!, $quoteAuthor: String!) {
  updateQuote(quoteId: $quoteId, quoteText: $quoteText, quoteAuthor: $quoteAuthor) {
    _id
    quoteText
    quoteAuthor
    createdAt
    quotePoster {
      userName
    }
  }
}
`

export const DELETE_QUOTE = gql`
mutation Mutation($removeQuoteQuoteId2: ID!) {
  removeQuote(quoteId: $removeQuoteQuoteId2) {
    _id
    quoteText
    quoteAuthor
    createdAt
    quotePoster {
      userName
    }
  }
}`


