import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import uuid from "uuid";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeartScreen({ navigation, route }) {
  const context = useContext(LoveContext);
  const faves = context.user.favorites;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const remove = route.params.remove;
    if (remove === null) {
      setFavorites(faves);
    } else {
      const newFaves = [...faves];
      const finalFaves = newFaves.filter((person) => {
        return person.profile.name !== remove.name;
      });
      setFavorites(finalFaves);
    }
  }, [faves]);

  const Item = ({ favorite }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CharacterScreen", {
          character: favorite,
        })
      }
      key={favorite.profile.id}
      style={styles.matchcard}
    >
      <Image source={favorite.profile.image} style={styles.image} />
      <Text style={styles.nametext}>{favorite.profile.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = (item, index) => <Item favorite={item} />;

  return favorites.length === 0 ? (
    <SafeAreaView style={styles.background}>
      <Text style={styles.nametext}>no matches :(</Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.background}>
      <View>
        <FlatList
          style={styles.matches}
          data={favorites}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          scrollsToTop={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
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
