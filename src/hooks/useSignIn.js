import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
// import useAuthStorage from "./useAuthStorage";

export function useSignIn() {
  const [authenticate, result] = useMutation(AUTHENTICATE);
  // const authStorage = useAuthStorage();

  const signIn = async (credentials) => {
    await authenticate({ variables: { credentials } });
  };

  return [signIn, result];
}
