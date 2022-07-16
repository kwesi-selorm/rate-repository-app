import { View, StyleSheet, ScrollView } from "react-native";
// import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",

    backgroundColor: theme.colors.appBar,
    marginTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 30,
  },
});

const AppBar = () => {
  return (
    <View>
      <ScrollView horizontal={true} style={styles.container}>
        <AppBarTab text="Repositories" link="/" />
        <AppBarTab text="Sign In" link="/view" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
