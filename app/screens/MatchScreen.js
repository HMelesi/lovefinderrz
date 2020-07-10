import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import colors from "../config/colors";
import characters from "../config/characters";
import users from "../config/users";

export default function MatchScreen({ navigation, route }) {
  const [number, setNumber] = useState(0);
  const [character, setCharacter] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [first, setFirst] = useState(true);
  const [selectedUser, setSelectedUser] = useState({});
  const [noMatchBool, setNoMatchBool] = useState(false);

  useEffect(() => {
    let characterLength = characters.length;
    setNumber(characterLength);
    const { user } = route.params;
    setSelectedUser(user);
    // getRandomCharacter();
  });

  const getRandomCharacter = () => {
    const noMatches = {
      id: 0,
      name: "NO MATCHES",
      line: "you have no matches :'(",
      image: require("../assets/splash.png"),
    };

    const matchRandom = Math.random();

    if (matchRandom < 0.9 && first === true) {
      setCharacter(noMatches);
      setNoMatchBool(true);
      setDisabled(true);
      setFirst(false);
    } else {
      const random = Math.floor(Math.random() * number);
      const randomCharacter = characters[random];
      setCharacter(randomCharacter);
      setFirst(false);
      console.log(character);
    }
  };

  return (
    <View style={noMatchBool ? styles.backgroundblack : styles.background}>
      <View style={styles.heart}>
        <Image source={selectedUser.image} style={styles.leftHeart} />
        <Image source={character.image} style={styles.rightHeart} />
      </View>

      <View style={styles.result}>
        <Text style={styles.resultName}>{character.name}</Text>
        <Text style={styles.resultLine}>{character.line}</Text>
      </View>

      <Image
        style={styles.heartoverlay}
        source={require("../assets/heartframe.png")}
      />
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
  backgroundblack: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    position: "absolute",
    bottom: 50,
  },
  heart: {
    flexDirection: "row",
    position: "absolute",
    top: 140,
  },
  leftHeart: {
    height: 180,
    width: 140,
    resizeMode: "cover",

    margin: 5,
  },
  heartoverlay: {
    margin: 10,
    height: 220,
    width: 300,
    resizeMode: "cover",
    position: "absolute",
    top: 110,
    // marginRight: 5,
  },
  rightHeart: {
    height: 180,
    width: 140,
    resizeMode: "cover",

    margin: 5,
  },

  logotext: {
    color: colors.lightblue,
  },
  result: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 350,
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
