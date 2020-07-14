import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Heart } from "react-native-shapes";

import colors from "../config/colors";

export default function HeartButton(navigation) {
  return (
    <View
      style={styles.container}
      onTouchStart={() => navigation.navigate("HeartScreen")}
    >
      <Heart color={colors.heartred} size={2.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  logotext: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.heartred,
  },
  container: {
    margin: 10,
  },
});
