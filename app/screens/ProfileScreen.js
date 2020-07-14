import React, { useState, useEffect } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import colors from "../config/colors";

export default function ProfileScreen({ navigation }) {
  const [user, setUser] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {});

  //   const handleUserTap = (choice) => {
  // const character = users.filter((user) => user.name === choice);
  // const characterObj = character[0];
  // setUser(characterObj);
  // setDisabled(false);
  //   };

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.titletext}>THIS IS YOUR PROFILE</Text>
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
  titletext: {
    fontSize: 20,
    color: colors.lightblue,
    fontWeight: "900",
    textAlign: "center",
  },
});
