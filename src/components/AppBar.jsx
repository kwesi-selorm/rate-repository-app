import { useApolloClient, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { useNavigate } from "react-router-native";
import { ME } from "../graphql/queries";
import useAuthStorage from "../hooks/useAuthStorage";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.appBar,
    marginTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 30,
  },
  signoutButton: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  const { data, loading, error } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  useEffect(async () => {
    await authStorage.getAccessToken();
    console.log(data?.me);
  }, [data?.me]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Something went wrong: ${error}`}</Text>;

  /**
   * "When the user clicks the logout button, the access token is removed from the browser's local
   * storage, the Apollo cache is reset, and the user is redirected to the login page."
   * </code>
   */
  const handleLogout = async () => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigate("/view");
    } catch (error) {
      throw new Error(`Something went wrong: ${error}`);
    }
  };

  return (
    <View>
      <ScrollView horizontal={true} style={styles.container}>
        <AppBarTab text="Repositories" link="/" />
        {/* Checking if the user is logged in or not. If the user is logged in, it will show the Sign
        Out button. If the user is not logged in, it will show the Sign In button. */}
        {data?.me ? (
          <Pressable onPress={handleLogout}>
            <Text style={styles.signoutButton}>Sign Out</Text>
          </Pressable>
        ) : (
          <AppBarTab text="Sign In" link="/view" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
