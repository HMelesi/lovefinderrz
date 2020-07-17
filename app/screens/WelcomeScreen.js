import React, { useContext } from "react";
import "react-native-gesture-handler";
import {
  NavigationContainer,
  NavigationHelpersContext,
} from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";
import users from "../config/users";
import MatchScreen from "./MatchScreen";
import { BorderlessButton } from "react-native-gesture-handler";

export default function WelcomeScreen({ navigation }) {
  const context = useContext(LoveContext);
  const setAllUsers = context.setAllUsers;

  const wipeData = () => {
    setAllUsers(users);
  };

  return (
    <View style={styles.background}>
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
      <View style={styles.base}>
        <Button
          color={colors.pink}
          title="LOGIN"
          onPress={() => navigation.navigate("UserScreen")}
        />

        <Button
          color={colors.pink}
          title="WIPE ALL DATA"
          onPress={() => wipeData()}
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
  base: {
    position: "absolute",
    bottom: 30,
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
