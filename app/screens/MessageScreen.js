import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function MessageScreen({ navigation, route }) {
  const [character, setCharacter] = useState({});
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    setCharacter(route.params.character);
  });

  const onChangeText = (text) => {
    setCurrentMessage(text);
  };

  const handleSubmit = (event) => {
    setMessages([...messages, event.nativeEvent.text]);
    setCurrentMessage("");
  };

  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={styles.background}>
          <View style={styles.topbar}>
            <Image style={styles.profileimage} source={character.image} />
            <Text style={styles.profiletext}>{character.name}</Text>
          </View>
          <View style={styles.messagecontainer}>
            <View style={styles.charactermessage}>
              <Text style={styles.messagetext}>hello there</Text>
            </View>
            {messages.map((message) => {
              return (
                <View style={styles.usermessage}>
                  <Text style={styles.messagetext}>{message}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.bottombar}>
            <TextInput
              placeholder="message"
              style={styles.input}
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={(text) => onChangeText(text)}
              value={currentMessage}
              //   returnKeyType="My Custom button"
              onSubmitEditing={(event) => handleSubmit(event)}
            />
            {/* <Button
              title="say hi"
              onPress={() => {
                setMessages([...messages, "hi"]);
              }}
            /> */}
          </View>
        </View>
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
  },
  usermessage: {
    borderRadius: 20,
    backgroundColor: colors.heartred,
    alignSelf: "flex-end",
    padding: 20,
    margin: 5,
  },
  charactermessage: {
    borderRadius: 20,
    backgroundColor: colors.pink,
    alignSelf: "flex-start",
    padding: 20,
    margin: 5,
  },
  messagecontainer: {
    backgroundColor: "#fff",
    height: "70%",
    width: "100%",
    padding: 10,
  },
  profileimage: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  profiletext: {
    fontSize: 15,
    color: colors.pink,
    fontWeight: "400",
    textAlign: "left",
    alignSelf: "flex-start",
    margin: 10,
  },
  topbar: {
    // position: "absolute",
    // top: 0,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  messagetext: {
    color: "#fff",
    fontSize: 20,
  },
});
