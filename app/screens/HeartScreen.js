import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function HeartScreen({ navigation }) {
  const context = useContext(LoveContext);
  const favorites = context.favorites;
  const setFavorites = context.setFavorites;

  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {});

  //   const handleUserTap = (choice) => {
  // const character = users.filter((user) => user.name === choice);
  // const characterObj = character[0];
  // setUser(characterObj);
  // setDisabled(false);
  //   };

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.titletext}>MATCHES</Text>
        <View style={styles.matches}>
          {favorites.map((favorite) => {
            return (
              <View
                onTouchStart={() =>
                  navigation.navigate("CharacterScreen", {
                    character: favorite,
                  })
                }
                style={styles.matchcard}
                key={favorite.id}
              >
                <Image source={favorite.image} style={styles.image} />
                <Text style={styles.nametext}>{favorite.name}</Text>
                {/* <Icon
                  style={styles.container}
                  name="message"
                  color={colors.lightblue}
                  onPress={() => console.log(`message ${favorite.name}`)}
                /> */}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
  },
  image: {
    height: 60,
    width: 60,
    resizeMode: "cover",
    borderRadius: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.heartred,
  },
  matches: {
    width: 350,
  },
  matchcard: {
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.pink,
  },
  nametext: {
    fontSize: 20,
    color: colors.lightblue,
    fontWeight: "600",
    textAlign: "center",
  },
  titletext: {
    fontSize: 30,
    color: colors.lightblue,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },
});
