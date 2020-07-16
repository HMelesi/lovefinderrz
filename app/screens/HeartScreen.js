import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button, FlatList } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeartScreen({ navigation }) {
  const context = useContext(LoveContext);
  const favorites = context.user.favorites;

  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {});

  //   const handleUserTap = (choice) => {
  // const character = users.filter((user) => user.name === choice);
  // const characterObj = character[0];
  // setUser(characterObj);
  // setDisabled(false);
  //   };

  const Item = ({ favorite }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CharacterScreen", {
          character: favorite,
        })
      }
      style={styles.matchcard}
      key={favorite.id}
    >
      <Image source={favorite.image} style={styles.image} />
      <Text style={styles.nametext}>{favorite.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item favorite={item} />;

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.titletext}>MATCHES</Text>
        <FlatList
          style={styles.matches}
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollsToTop={false}
        />
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
