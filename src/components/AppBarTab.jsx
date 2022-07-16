import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import Text from "./Text.jsx";

const styles = StyleSheet.create({
  tabContainer: { marginHorizontal: 10 },
  text: {
    color: theme.colors.white,
  },
});

const AppBarTab = ({ text, link }) => {
  return (
    <Pressable style={styles.tabContainer}>
      <Link to={link}>
        <Text fontWeight="bold" style={styles.text}>
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
