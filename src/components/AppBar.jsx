import { View, StyleSheet } from "react-native";
// import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    marginTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 30,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
