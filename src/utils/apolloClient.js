import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { IP_ADDRESS } from "../constants";

const httpLink = createHttpLink({
  uri: `http://${IP_ADDRESS}:4000/graphql`,
});

function createApolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
