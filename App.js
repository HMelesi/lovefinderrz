import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import MatchScreen from "./app/screens/MatchScreen";
import UserScreen from "./app/screens/UserScreen";
import HeartScreen from "./app/screens/HeartScreen";

import Header from "./app/components/Header";
import HeartButton from "./app/components/HeartButton";

import colors from "./app/config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={({ navigation, route }) => ({
          headerTitle: <Header {...navigation} />,
          title: "LOVEFINDERRZ",
          headerStyle: {
            backgroundColor: colors.pink,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: colors.pink,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Button
              onPress={() => alert("Profile pressed")}
              title="Profile"
              color="#fff"
            />
          ),
          headerLeft: () => <HeartButton {...navigation} />,
        })}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MatchScreen" component={MatchScreen} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
        <Stack.Screen name="HeartScreen" component={HeartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Header
leftComponent={{ icon: "menu", color: "#fff" }}
centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
rightComponent={{ icon: "home", color: "#fff" }}
/> */
}
