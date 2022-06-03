import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
    users {
      _id
      userName
      email
      quotes {
        _id
        quoteText
        quoteAuthor
        createdAt
        quotePoster
      }
    }
  }`;

  export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      userName
      email
      quotes {
        _id
        quoteText
        quoteAuthor
        createdAt
        quotePoster
      }
    }
  }`;

  export const QUERY_QUOTES = gql`
  query getQuotes {
    quotes {
      _id
      quoteText
      quoteAuthor
      createdAt
      quotePoster {
        _id
        userName
    }
  }
  }
  `;

  export const QUERY_SINGLE_QUOTE = gql`
  query singleQuote($quoteId: ID!) {
    quote(quoteId: $quoteId) {
      quoteText
      quoteAuthor
      createdAt
      quotePoster
      _id
    }
  }
  
  `;

  export const QUERY_ME = gql`
  query getMe {
    me {
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
  }
  `