import { gql } from "@apollo/client";

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
