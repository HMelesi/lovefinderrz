import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";
import getCurrentTime from "../utils/utils";

import LoveContext from "../context/LoveContext.js";

import colors from "../config/colors";

export default function MessageScreen({ navigation, route }) {
  const [character, setCharacter] = useState({});
  const [characterProfile, setCharacterProfile] = useState({});
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [key, setKey] = useState(false);

  const context = useContext(LoveContext);
  const favorites = context.user.favorites;

  useEffect(() => {
    const { name } = route.params;
    const newFavorites = [...favorites];
    const filterFavorites = newFavorites.filter((fave) => {
      return fave.profile.name === name;
    });
    setCharacter(filterFavorites[0]);
    setCharacterProfile(filterFavorites[0].profile);
    setMessages([]);
  }, []);

  const onChangeText = (text) => {
    setCurrentMessage(text);
  };

  const handleSubmit = async (msg) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const usermessageObj = {
      id: Math.random().toString(),
      text: msg,
      type: "user",
      time: getCurrentTime(),
    };

    setMessages([usermessageObj, ...messages]);
    setCurrentMessage("");
    Keyboard.dismiss();

    const matchRandom = Math.random();

    if (matchRandom > 0.4) {
      await sleep(2000);

      const numberPhrases = characterProfile.messages.length;
      const messRandom = Math.floor(Math.random() * numberPhrases);

      const charactermessageObj = {
        id: Math.random().toString(),
        text: characterProfile.messages[messRandom],
        type: "character",
        time: getCurrentTime(),
      };

      setMessages([charactermessageObj, usermessageObj, ...messages]);
    }
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
        <SafeAreaView style={styles.background}>
          <TouchableOpacity
            style={styles.topbar}
            onPress={() =>
              navigation.navigate("CharacterScreen", { character: character })
            }
          >
            <Image
              style={styles.profileimage}
              source={characterProfile.image}
            />
            <Text style={styles.profiletext}>{characterProfile.name}</Text>
          </TouchableOpacity>

          <View style={styles.messagescontainer}>
            <FlatList
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollsToTop={false}
              inverted={-1}
            />
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ width: "100%", alignItems: "flex-end" }}
            enabled={currentMessage === "" ? false : true}
            keyboardVerticalOffset={60}
          >
            <View style={styles.bottombardown}>
              <TextInput
                placeholder="type message..."
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={currentMessage}
                onBlur={(Keyboard.dismiss, setKey(false))}
              />
              <TouchableOpacity onPress={() => handleSubmit(currentMessage)}>
                <Icon name="send" color={colors.lightblue} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </LoveContext.Consumer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.navy,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  bottombardown: {
    backgroundColor: colors.navy,
    width: "100%",
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    width: "70%",
    borderColor: colors.lightblue,
    borderWidth: 1,
    paddingHorizontal: 10,
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
    top: 75,
    backgroundColor: "#fff",
    paddingBottom: 5,
    height: "75%",
    width: "100%",
  },
  profileimage: {
    height: 35,
    width: 35,
    borderRadius: 5,
    borderColor: colors.heartred,
    borderWidth: 2,
  },
  profiletext: {
    fontSize: 15,
    color: colors.pink,
    fontWeight: "400",
    textAlign: "left",
    alignSelf: "flex-start",
    marginTop: 5,
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
