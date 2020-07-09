import React, { useState, useEffect } from "react";
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
import characters from "../config/characters";
import { Directions } from "react-native-gesture-handler";

export default function MatchScreen({ navigation }) {
  const [number, setNumber] = useState(0);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    let characterLength = characters.length;
    setNumber(characterLength);
  });

  const getRandomCharacter = () => {
    const random = Math.floor(Math.random() * number);
    const randomCharacter = characters[random];
    setCharacter(randomCharacter);
  };

  return (
    <View style={styles.background}>
      {character === {} ? null : (
        <View style={styles.result}>
          <Text style={styles.resultName}>{character.name}</Text>
          <Text style={styles.resultLine}>{character.line}</Text>
        </View>
      )}
      <View style={styles.buttons}>
        <Button
          color={colors.heartred}
          accessibilityLabel="MATCH ME"
          title="MATCH ME"
          onPress={() => getRandomCharacter()}
        />
        <Button
          color={colors.lightblue}
          accessibilityLabel="EXIT "
          title="EXIT"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    position: "absolute",
    bottom: 50,
  },
  logotext: {
    color: colors.lightblue,
  },
  result: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  resultLine: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.pink,
    textAlign: "center",
  },
  resultName: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.lightblue,
  },
});
