import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import colors from "../config/colors";
import characters from "../config/characters";

export default function MatchScreen({ navigation }) {
  const [number, setNumber] = useState(0);
  const [character, setCharacter] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    let characterLength = characters.length;
    setNumber(characterLength);
  });

  const getRandomCharacter = () => {
    const noMatches = {
      id: 0,
      name: "NO MATCHES",
      line: "you have no matches :'(",
      image: require("../assets/splash.png"),
    };

    const matchRandom = Math.random();

    if (matchRandom < 0.1 && first === true) {
      setCharacter(noMatches);
      setDisabled(true);
      setFirst(false);
    } else {
      const random = Math.floor(Math.random() * number);
      const randomCharacter = characters[random];
      setCharacter(randomCharacter);
      setFirst(false);
    }
  };

  return (
    <View style={styles.background}>
      {character === {} ? null : (
        <View style={styles.result}>
          <Image source={character.image} />
          <Text style={styles.resultName}>{character.name}</Text>
          <Text style={styles.resultLine}>{character.line}</Text>
        </View>
      )}
      <View style={styles.buttons}>
        <Button
          disabled={disabled}
          color={colors.heartred}
          accessibilityLabel="MATCH ME"
          title={first ? "GET MY FIRST MATCH" : "NEW MATCH"}
          onPress={() => getRandomCharacter()}
        />
        <Button
          color={colors.lightblue}
          accessibilityLabel="EXIT"
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
