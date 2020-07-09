import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import colors from "../config/colors";
import users from "../config/users";

export default function UserScreen({ navigation }) {
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {});

  const handleUserTap = (choice) => {
    const character = users.filter((user) => user.name === choice);
    const characterObj = character[0];
    setUser(characterObj);
    setDisabled(false);
  };

  return (
    <View style={styles.background}>
      <View style={styles.characterselect}>
        <Text style={styles.titletext}>WHO ARE YOU?</Text>
        <View style={styles.imagerow}>
          <Image
            onTouchStart={() => {
              handleUserTap("Summer");
            }}
            style={user.name === "Summer" ? styles.selected : styles.image}
            source={require("../assets/summer.png")}
          />
          <Image
            onTouchStart={() => {
              handleUserTap("Beth");
            }}
            style={user.name === "Beth" ? styles.selected : styles.image}
            source={require("../assets/beth.png")}
          />
        </View>
        <View style={styles.imagerow}>
          <Image
            onTouchStart={() => {
              handleUserTap("Jerry");
            }}
            style={user.name === "Jerry" ? styles.selected : styles.image}
            source={require("../assets/jerry.png")}
          />
          <Image
            onTouchStart={() => {
              handleUserTap("Morty");
            }}
            style={user.name === "Morty" ? styles.selected : styles.image}
            source={require("../assets/morty.png")}
          />
        </View>

        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userLine}>{user.line}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          disabled={disabled}
          color={colors.heartred}
          accessibilityLabel="SEE MY MATCHES"
          title="SEE MY MATCHES"
          onPress={() => navigation.navigate("MatchScreen")}
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
  characterselect: { position: "absolute", top: 50 },
  image: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 10,
  },
  imagerow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titletext: {
    fontSize: 20,
    color: colors.lightblue,
    fontWeight: "900",
    textAlign: "center",
  },
  result: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    borderRadius: 5,
    margin: 10,
    borderWidth: 5,
    borderColor: colors.heartred,
  },
  userLine: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.pink,
    textAlign: "center",
    margin: 10,
  },
  userName: {
    margin: 10,
    fontSize: 25,
    fontWeight: "600",
    color: colors.lightblue,
    textAlign: "center",
  },
});
