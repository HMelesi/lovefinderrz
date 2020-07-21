import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function NoMoreMatchesScreen({ navigation }) {
  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={styles.background}>
          <Text style={styles.maintext}>
            There are no more potential matches!
          </Text>
          <Icon
            style={styles.icon}
            name="favorite"
            color={colors.heartred}
            size={30}
            onPress={() => {
              getRandomCharacter();
            }}
          />
          <Text style={styles.othertext}>
            Logout to return to the main screen to reset the data, or message
            your current matches.
          </Text>
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
  icon: {
    height: 50,
    width: 50,
    resizeMode: "cover",
  },
  maintext: {
    textAlign: "center",
    color: colors.pink,
    fontSize: 25,
    padding: 20,
  },
  othertext: {
    textAlign: "center",
    color: colors.lightblue,
    fontSize: 15,
    padding: 10,
  },
});
