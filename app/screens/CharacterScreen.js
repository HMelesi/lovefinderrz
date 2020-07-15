import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function CharacterScreen({ navigation, route }) {
  const context = useContext(LoveContext);
  const favorites = context.favorites;
  const setFavorites = context.setFavorites;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    setCharacter(route.params.character);
  });

  const handleIconTap = (icon) => {
    if (icon === "message") {
      navigation.navigate("MessageScreen", { character: character });
    } else {
      alert(`${icon} tapped!`);
    }
  };

  return (
    <View style={styles.background}>
      <Image style={styles.profileimage} source={character.image} />
      <Text style={styles.titletext}>Name:</Text>
      <Text style={styles.contenttext}>{character.name}</Text>
      <Text style={styles.titletext}>About:</Text>
      <Text style={styles.contenttext}>{character.line}</Text>
      <View style={styles.actions}>
        <Icon
          style={styles.icon}
          name="message"
          color={colors.lightblue}
          size={40}
          onPress={() => {
            handleIconTap("message");
          }}
        />
        <Icon
          style={styles.icon}
          name="delete"
          color={colors.heartred}
          size={40}
          onPress={() => {
            handleIconTap("delete");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },
  profileimage: {
    height: 240,
    width: 200,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 30,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: colors.heartred,
  },
  titletext: {
    fontSize: 20,
    color: colors.lightblue,
    fontWeight: "700",
    textAlign: "left",
    alignSelf: "flex-start",
  },
  contenttext: {
    fontSize: 20,
    color: colors.pink,
    fontWeight: "400",
    textAlign: "left",
    alignSelf: "flex-start",
  },
});
