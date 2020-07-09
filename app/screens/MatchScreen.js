import React from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";

import colors from "../config/colors";

export default function MatchScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Text style={styles.logotext}>this is the match screen</Text>
      <Button title="go back" onPress={() => navigation.navigate("Welcome")} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logotext: {
    color: colors.lightblue,
  },
});
