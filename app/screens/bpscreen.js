import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function bpScreen({ navigation }) {
  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={styles.background}>
          <Text>you are at this screen</Text>
        </View>
      )}
    </LoveContext.Consumer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});
