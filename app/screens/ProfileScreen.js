import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function ProfileScreen({ navigation }) {
  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={styles.background}>
          <View>
            <Text style={styles.titletext}>THIS IS YOUR PROFILE</Text>
            <Text style={styles.titletext}>{context.test}</Text>
          </View>
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
  },
  titletext: {
    fontSize: 20,
    color: colors.lightblue,
    fontWeight: "900",
    textAlign: "center",
  },
});
