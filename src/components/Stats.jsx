import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  statContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "85%",
  },
});

const Stat = ({ value, label }) => {
  return (
    <View style={styles.statContainer}>
      <Text fontWeight="bold">{value}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const Stats = ({ stars, forks, reviews, rating }) => {
  function formatValue(value) {
    if (value > 1000) {
      const formattedValue = (value / 1000).toFixed(1);
      return `${formattedValue}k`;
    }
    return value;
  }

  return (
    <View style={styles.statsContainer}>
      <Stat value={formatValue(stars)} label="Stars" />
      <Stat value={formatValue(forks)} label="Forks" />
      <Stat value={formatValue(reviews)} label="Reviews" />
      <Stat value={formatValue(rating)} label="Rating" />
    </View>
  );
};

export default Stats;
