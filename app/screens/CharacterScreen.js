import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Alert,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function CharacterScreen({ navigation, route }) {
  const context = useContext(LoveContext);
  const { user, setUser } = context;

  const [characterProfile, setCharacterProfile] = useState({});

  useEffect(() => {
    const passedCharacter = route.params.character;
    setCharacterProfile(passedCharacter.profile);
  });

  const handleIconTap = (icon) => {
    if (icon === "message") {
      navigation.navigate("MessageScreen", { name: characterProfile.name });
    } else if (icon === "delete") {
      Alert.alert(
        ":(",
        `Are you sure you want to unmatch with ${characterProfile.name}?`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Yes please", onPress: () => unmatch(characterProfile) },
        ],
        { cancelable: false }
      );
    }
  };

  const unmatch = (fave) => {
    const newFaves = [...user.favorites];
    const finalFaves = newFaves.filter((person) => {
      return person.profile.name !== fave.name;
    });
    user.favorites = finalFaves;
    setUser(user);
    navigation.navigate("HeartScreen");
  };

  return (
    <SafeAreaView style={styles.background}>
      <Image style={styles.profileimage} source={characterProfile.image} />
      <Text style={styles.titletext}>Name:</Text>
      <Text style={styles.contenttext}>{characterProfile.name}</Text>
      <Text style={styles.titletext}>About:</Text>
      <Text style={styles.contenttext}>{characterProfile.line}</Text>
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
          onPress={() => handleIconTap("delete")}
        />
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
