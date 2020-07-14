import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

import colors from "../config/colors";

export default function ProfileButton(navigation) {
  return (
    <Icon
      style={styles.container}
      name="person"
      color={colors.heartred}
      onPress={() => {
        navigation.navigate("ProfileScreen");
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
