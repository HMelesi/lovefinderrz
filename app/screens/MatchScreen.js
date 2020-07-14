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
  });

  const getRandomCharacter = () => {
    const noMatches = {
      id: 0,
      name: "NO MATCHES",
      line: "you have no matches :'(",
      image: require("../assets/nomatch.png"),
    };

    const matchRandom = Math.random();

    if (matchRandom < 0.1 && first === true) {
      setCharacter(noMatches);
      setNoMatchBool(true);
      setDisabled(true);
      setFirst(false);
    } else if (selectedUser.name === "Jerry") {
      setCharacter(noMatches);
      setNoMatchBool(true);
      setDisabled(true);
      setFirst(false);
    } else {
      const random = Math.floor(Math.random() * number);
      const randomCharacter = characters[random];
      setCharacter(randomCharacter);
      setFirst(false);
    }
  };

  const handleIconTap = (icon) => {
    if (icon === "fire") {
      getRandomCharacter();
    } else if (icon === "heart") {
      alert(character);
    } else {
      alert(`${icon} tapped`);
    }
  };

  return (
    <View style={noMatchBool ? styles.backgroundblack : styles.background}>
      {noMatchBool ? (
        <View style={styles.nomatchback}>
          <View style={styles.norow}>
            <Text style={styles.nomatchtext}>N</Text>
            <Image
              style={styles.skull}
              source={require("../assets/skull.png")}
            />
          </View>
          <Text style={styles.nomatchtext}>MATCHES</Text>
        </View>
      ) : (
        <View style={styles.matchbutton}>
          <Button
            color={colors.heartred}
            accessibilityLabel="MATCH ME"
            title={first ? "GET MY FIRST MATCH" : "NEW MATCH"}
            onPress={() => getRandomCharacter()}
          />
        </View>
      )}
      <View style={styles.heart}>
        <Image source={selectedUser.image} style={styles.leftHeart} />
        <Image source={character.image} style={styles.rightHeart} />
      </View>
      {noMatchBool ? null : (
        <View style={styles.result}>
          <Text style={styles.resultName}>{character.name}</Text>
          <Text style={styles.resultLine}>{character.line}</Text>
        </View>
      )}

      {noMatchBool ? (
        <Image
          style={styles.heartoverlay}
          source={require("../assets/blackheartframe.png")}
        />
      ) : (
        <Image
          style={styles.heartoverlay}
          source={require("../assets/heartframe.png")}
        />
      )}

      <View style={styles.buttons}>
        {noMatchBool || Object.keys(character).length === 0 ? null : (
          <View style={styles.iconrow}>
            <Image
              onTouchStart={() => {
                handleIconTap("message");
              }}
              style={styles.icon}
              source={require("../assets/iconmsg.png")}
            />
            <Image
              onTouchStart={() => {
                handleIconTap("heart");
              }}
              style={styles.icon}
              source={require("../assets/iconhrt.png")}
            />
            <Image
              onTouchStart={() => {
                handleIconTap("fire");
              }}
              style={styles.icon}
              source={require("../assets/iconfr.png")}
            />
          </View>
        )}

        <Button
          color={colors.heartred}
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
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
  },
  heart: {
    flexDirection: "row",
    position: "absolute",
    top: 200,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "cover",
  },
  iconrow: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
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
    top: 175,
    // marginRight: 5,
  },
  matchbutton: {
    position: "absolute",
    top: 100,
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
  nomatchback: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 60,
    backgroundColor: "#ff0d00",
    width: "100%",
  },
  nomatchtext: {
    fontSize: 30,
    fontWeight: "900",
  },
  norow: {
    flexDirection: "row",
    alignItems: "center",
  },
  result: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 390,
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
  skull: {
    height: 23,
    width: 18,
    resizeMode: "cover",
  },
});
