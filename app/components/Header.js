import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function Header(navigation) {
  return (
    <Text
      style={styles.logotext}
      onPress={() => navigation.navigate("MatchScreen")}
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
});
