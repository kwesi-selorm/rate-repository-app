import { gql } from "@apollo/client";

/* A query to get the repositories from the database. */
export const GET_REPOSITORIES = gql`
  query Node {
    repositories {
      edges {
        node {
          fullName
          id
          language
          description
          ownerAvatarUrl
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

/* A query to get the user information from the database. */
export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
