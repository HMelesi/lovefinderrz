import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../config/colors";

export default function HeartButton(navigation) {
  return (
    <Icon
      style={styles.container}
      name="favorite"
      color={colors.heartred}
      onPress={() => navigation.navigate("HeartScreen", { remove: null })}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
