import React, { useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function UserScreen({ navigation }) {
  const context = useContext(LoveContext);
  const users = context.allUsers;

  const handleUserTap = (choice) => {
    const character = users.filter((user) => user.name === choice);
    const characterObj = character[0];
    return characterObj;
  };

  return (
    <LoveContext.Consumer>
      {(context) => (
        <SafeAreaView style={styles.background}>
          <View style={styles.characterselect}>
            <Text style={styles.titletext}>WHO ARE YOU?</Text>
            <View style={styles.imagerow}>
              <Image
                onTouchStart={() => {
                  const characterObj = handleUserTap("Summer");
                  context.setUser(characterObj);
                }}
                style={
                  context.user.name === "Summer"
                    ? styles.selected
                    : styles.image
                }
                source={require("../assets/summer.png")}
              />
              <Image
                onTouchStart={() => {
                  const characterObj = handleUserTap("Beth");
                  context.setUser(characterObj);
                }}
                style={
                  context.user.name === "Beth" ? styles.selected : styles.image
                }
                source={require("../assets/beth.png")}
              />
            </View>
            <View style={styles.imagerow}>
              <Image
                onTouchStart={() => {
                  const characterObj = handleUserTap("Jerry");
                  context.setUser(characterObj);
                }}
                style={
                  context.user.name === "Jerry" ? styles.selected : styles.image
                }
                source={require("../assets/jerry.png")}
              />
              <Image
                onTouchStart={() => {
                  const characterObj = handleUserTap("Morty");
                  context.setUser(characterObj);
                }}
                style={
                  context.user.name === "Morty" ? styles.selected : styles.image
                }
                source={require("../assets/morty.png")}
              />
            </View>

            <Text style={styles.userName}>{context.user.name}</Text>
            <Text style={styles.userLine}>{context.user.line}</Text>
          </View>
          <View style={styles.buttons}>
            <Button
              disabled={context.user.name === undefined}
              color={colors.heartred}
              accessibilityLabel="LOGIN"
              title="LOGIN"
              onPress={() => navigation.navigate("MatchScreen")}
            />
          </View>
        </SafeAreaView>
      )}
    </LoveContext.Consumer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  buttons: {
    position: "absolute",
    bottom: 30,
  },
  characterselect: { position: "absolute", top: 100 },
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
    marginBottom: 20,
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
