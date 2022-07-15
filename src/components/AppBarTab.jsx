import React from "react";
import { Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text.jsx";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text fontWeight="bold" style={styles.text}>
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
