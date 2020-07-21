import React, { useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  Image,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function ProfileScreen({ navigation }) {
  const context = useContext(LoveContext);
  const { setUser } = context;

  const logout = () => {
    setUser({});
    navigation.navigate("Welcome");
  };

  return (
    <LoveContext.Consumer>
      {(context) => (
        <SafeAreaView style={styles.background}>
          <Image style={styles.profileimage} source={context.user.image} />
          <Text style={styles.titletext}>Name:</Text>
          <Text style={styles.contenttext}>{context.user.name}</Text>
          <Text style={styles.titletext}>About:</Text>
          <Text style={styles.contenttext}>{context.user.line}</Text>
          <Button
            color={colors.heartred}
            title="LOGOUT"
            onPress={() => logout()}
          />
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
    paddingHorizontal: 30,
    paddingBottom: 30,
    paddingTop: Platform.OS === "android" ? 25 : 0,
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
    marginBottom: 10,
  },
});
