import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import uuid from "react-native-uuid";
import getCurrentTime from "../utils/utils";

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

  const handleSubmit = async (event) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const usermessageObj = {
      id: uuid.v1(),
      text: event.nativeEvent.text,
      type: "user",
      time: getCurrentTime(),
    };

    setMessages([...messages, usermessageObj]);
    setCurrentMessage("");

    await sleep(2000);

    const charactermessageObj = {
      id: uuid.v1(),
      text: "character message",
      type: "character",
      time: getCurrentTime(),
    };
    setMessages([...messages, usermessageObj, charactermessageObj]);
  };

  const Item = ({ message }) => (
    <View
      style={
        message.type === "user" ? styles.usermessage : styles.charactermessage
      }
    >
      <View
        style={
          message.type === "user"
            ? styles.usermessagetext
            : styles.charactermessagetext
        }
      >
        <Text style={styles.messagetext}>{message.text}</Text>
      </View>
      <View>
        <Text style={styles.messagetime}>{message.time}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item message={item} />;

  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={styles.background}>
          <View style={styles.topbar}>
            <Image style={styles.profileimage} source={character.image} />
            <Text style={styles.profiletext}>{character.name}</Text>
          </View>
          <View style={styles.messagescontainer}>
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              initialScrollIndex={messages.length - 1}
            />
          </View>
          {/* <View style={styles.charactermessage}>
              <Text style={styles.messagetext}>hello there</Text>
            </View> */}

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
  bottombar: {
    position: "absolute",
    bottom: 20,
  },
  usermessage: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
    margin: 5,
  },
  usermessagetext: {
    borderRadius: 20,
    backgroundColor: colors.heartred,
    padding: 15,
    marginVertical: 5,
  },
  messagetime: {
    borderRadius: 20,
    marginHorizontal: 10,
    color: "#999999",
    fontSize: 10,
  },
  charactermessage: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
    margin: 5,
  },
  charactermessagetext: {
    borderRadius: 20,
    backgroundColor: colors.pink,
    padding: 15,
    marginVertical: 5,
  },
  messagescontainer: {
    position: "absolute",
    top: 80,
    backgroundColor: "#fff",
    height: "70%",
    width: "100%",
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
    position: "absolute",
    top: 0,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  messagetext: {
    color: "#fff",
    fontSize: 15,
  },
});
