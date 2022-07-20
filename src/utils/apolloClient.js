import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
});

/**
 * It creates an Apollo Client that will automatically add an authorization header to every request if
 * the user is logged in.
 * @param authStorage - This is the object that stores the access token.
 * @returns The ApolloClient is being returned.
 */
const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
