import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Stats from "./Stats";
import Text from "./Text.jsx";

const styles = StyleSheet.create({
  repoContainer: {
    backgroundColor: theme.colors.white,
    lineHeight: 1.5,
    marginBottom: 3,
    paddingTop: 20,
    paddingBottom: 20,
  },
  userPhoto: {
    borderRadius: 10,
    flex: 1,
    aspectRatio: 1 / 1,
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    minWidth: "35%",
    width: 50,
    padding: 5,
  },
  language: {
    alignSelf: "center",
    color: theme.colors.white,

    maxWidth: "100%",
  },
  profileContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 20,
    // marginRight: 20,
  },
  headersContainer: {
    flex: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  statsContainer: {
    marginLeft: 75,
    marginTop: 10,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.repoContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: item.ownerAvatarUrl,
          }}
          style={styles.userPhoto}
        ></Image>
        <View style={styles.headersContainer}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text>{item.description}</Text>
          <View style={styles.languageBox}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <Stats
          stars={item.stargazersCount}
          forks={item.forksCount}
          reviews={item.reviewCount}
          rating={item.ratingAverage}
        />
      </View>
    </View>
  );
};

export default RepositoryItem;
