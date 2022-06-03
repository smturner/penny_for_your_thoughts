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
    quoteText
    quoteAuthor
    quotePoster {
      userName
    }
  }
}`;