import React, { useState, useEffect, useContext } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Icon } from "react-native-elements";

import LoveContext from "../context/LoveContext.js";
// import LoveProvider from "../context/LoveProvider.js";

import colors from "../config/colors";
import characters from "../config/characters";

export default function MatchScreen({ navigation, route }) {
  const context = useContext(LoveContext);
  const favorites = context.user.favorites;
  // const setFavorites = context.setFavorites;
  const userData = context.user;

  const [number, setNumber] = useState(0);
  const [character, setCharacter] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [first, setFirst] = useState(true);
  const [noMatchBool, setNoMatchBool] = useState(false);
  const [potentials, setPotentials] = useState(characters);

  useEffect(() => {
    let potentialLength = potentials.length;
    setNumber(potentialLength);
    if (first) {
      getRandomCharacter();
    }
  });

  // const resetMatches = () => {
  //   character.favorites = [];
  //   setPotentials(characters);
  // };

  const removeFromPotentials = (person) => {
    const spreadPotentials = [...potentials];
    const newPotentials = spreadPotentials.filter(
      (potential) => potential.name !== person.name
    );
    setPotentials(newPotentials);
  };

  const getRandomCharacter = () => {
    const noMatches = {
      id: 0,
      name: "NO MATCHES",
      line: "you have no matches :'(",
      image: require("../assets/nomatch.png"),
    };

    const matchRandom = Math.random();

    if (matchRandom < 0.1 && first === true) {
      setCharacter(noMatches);
      setNoMatchBool(true);
      setDisabled(true);
      setFirst(false);
    } else if (userData.name === "Jerry") {
      setCharacter(noMatches);
      setNoMatchBool(true);
      setDisabled(true);
      setFirst(false);
    } else if (potentials.length === 0) {
      alert("no more characters");
    } else {
      const random = Math.floor(Math.random() * number);
      const randomCharacter = potentials[random];
      setCharacter(randomCharacter);
      setFirst(false);
    }
  };

  const handleIconTap = (icon) => {
    if (icon === "no") {
      removeFromPotentials(character);
      getRandomCharacter();
    } else if (icon === "heart") {
      let checkFavorites = [...favorites];
      checkFavorites = checkFavorites.filter((fave) => {
        return fave.profile.name !== character.name;
      });

      if (checkFavorites.length === favorites.length) {
        removeFromPotentials(character);
        const newFaveObj = { profile: character };
        const newFavorites = [...favorites, newFaveObj];
        userData.favorites = newFavorites;
        getRandomCharacter();
      } else {
        console.log("already matched");
      }
    } else if (icon === "message") {
      removeFromPotentials(character);
      const newFaveObj = { profile: character };
      const newFavorites = [...favorites, newFaveObj];
      userData.favorites = newFavorites;
      navigation.navigate("MessageScreen", { name: character.name });
    }
  };

  return (
    <LoveContext.Consumer>
      {(context) => (
        <View style={noMatchBool ? styles.backgroundblack : styles.background}>
          {/* <Button title="reset matches" onPress={() => resetMatches()} /> */}
          <View style={styles.heart}>
            <Image source={context.user.image} style={styles.halfHeart} />
            <Image source={character.image} style={styles.halfHeart} />
          </View>
          {noMatchBool ? (
            <View style={styles.nomatchback}>
              <View style={styles.norow}>
                <Text style={styles.nomatchtext}>N</Text>
                <Image
                  style={styles.skull}
                  source={require("../assets/skull.png")}
                />
              </View>
              <Text style={styles.nomatchtext}>MATCHES</Text>
            </View>
          ) : (
            <View style={styles.result}>
              <Text style={styles.resultName}>{character.name}</Text>
              <Text style={styles.resultLine}>{character.line}</Text>
            </View>
          )}

          {noMatchBool ? (
            <Image
              style={styles.heartoverlay}
              source={require("../assets/blackheartframe.png")}
            />
          ) : (
            <Image
              style={styles.heartoverlay}
              source={require("../assets/heartframe.png")}
            />
          )}

          <View style={styles.buttons}>
            {noMatchBool || Object.keys(character).length === 0 ? null : (
              <View style={styles.iconrow}>
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
                  name="favorite"
                  color={colors.pink}
                  size={40}
                  onPress={() => {
                    handleIconTap("heart");
                  }}
                />
                <Icon
                  style={styles.icon}
                  name="thumb-down"
                  color={colors.heartred}
                  size={40}
                  onPress={() => {
                    handleIconTap("no");
                  }}
                />
              </View>
            )}
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
  backgroundblack: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
  },

  heart: {
    flexDirection: "row",
    position: "absolute",
    top: 100,
  },
  icon: {
    height: 50,
    width: 50,
    resizeMode: "cover",
  },
  iconrow: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  halfHeart: {
    height: 180,
    width: 140,
    resizeMode: "cover",
    margin: 5,
  },
  heartoverlay: {
    margin: 10,
    height: 220,
    width: 300,
    resizeMode: "cover",
    position: "absolute",
    top: 75,
    // marginRight: 5,
  },
  matchbutton: {
    position: "absolute",
    top: 100,
  },

  logotext: {
    color: colors.lightblue,
  },
  nomatchback: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 350,
    backgroundColor: "#ff0d00",
    width: "100%",
  },
  nomatchtext: {
    fontSize: 30,
    fontWeight: "900",
  },
  norow: {
    flexDirection: "row",
    alignItems: "center",
  },
  result: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 300,
  },
  resultLine: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.pink,
    textAlign: "center",
  },
  resultName: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.lightblue,
  },
  skull: {
    height: 23,
    width: 18,
    resizeMode: "cover",
  },
});
