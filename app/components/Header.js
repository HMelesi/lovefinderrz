import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Heart } from "react-native-shapes";

import colors from "../config/colors";

export default function Header(navigation) {
  return (
    <Text
      style={styles.logotext}
      onPress={() => navigation.navigate("Welcome")}
    >
      LOVEFINDERRZ
    </Text>
  );
}

const styles = StyleSheet.create({
  logotext: {
    fontSize: 15,
    fontWeight: "900",
    color: colors.heartred,
  },
  textlogocontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
