import React, { useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";
import users from "../config/users";

export default function WelcomeScreen({ navigation }) {
  const context = useContext(LoveContext);
  const setAllUsers = context.setAllUsers;

  const wipeData = () => {
    const newUsers = [...users];
    const newerUsers = newUsers.map((user) => {
      return { ...user, favorites: [] };
    });
    setAllUsers(newerUsers);
  };

  return (
    <SafeAreaView style={styles.background}>
      <Icon
        style={styles.heartcontainer}
        name="favorite"
        color={colors.heartred}
        size={200}
      />
      <View style={styles.textlogocontainer}>
        <Text style={styles.logotext}>L</Text>
        <Icon name="favorite" color={colors.heartred} size={30} />
        <Text style={styles.logotext}>VEFINDERRZ</Text>
      </View>
      <View style={styles.container}>
        <Button
          color={colors.pink}
          title="ENTER"
          onPress={() => navigation.navigate("UserScreen")}
        />
      </View>
      <View style={styles.base}>
        <Button
          color={colors.lightblue}
          title="WIPE ALL DATA"
          onPress={() => wipeData()}
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
  },
  base: {
    position: "absolute",
    bottom: 30,
  },
  container: {
    paddingVertical: 10,
  },
  heartcontainer: {
    padding: 10,
  },
  logotext: {
    fontSize: 30,
    fontWeight: "900",
    color: colors.lightblue,
  },
  textlogocontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
