import React, { useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeartScreen({ navigation }) {
  const context = useContext(LoveContext);
  const favorites = context.user.favorites;

  const Item = ({ favorite }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("CharacterScreen", {
          character: favorite,
        })
      }
      style={styles.matchcard}
      key={favorite.profile.id}
    >
      <Image source={favorite.profile.image} style={styles.image} />
      <Text style={styles.nametext}>{favorite.profile.name}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item favorite={item} />;

  return (
    <SafeAreaView style={styles.background}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
