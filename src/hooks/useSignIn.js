import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

export function useSignIn() {
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async (credentials) => {
    await authenticate({ variables: { credentials } });
  };

  return [signIn, result];
}
