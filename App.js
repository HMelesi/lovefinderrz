import React from "react";
import { Platform } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Buffer } from "buffer";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import MatchScreen from "./app/screens/MatchScreen";
import UserScreen from "./app/screens/UserScreen";
import HeartScreen from "./app/screens/HeartScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import CharacterScreen from "./app/screens/CharacterScreen";
import MessageScreen from "./app/screens/MessageScreen";
import NoMoreMatchesScreen from "./app/screens/NoMoreMatchesScreen";

import LoveProvider from "./app/context/LoveProvider";

import Header from "./app/components/Header";
import HeartButton from "./app/components/HeartButton";
import ProfileButton from "./app/components/ProfileButton";

import colors from "./app/config/colors";

const Stack = createStackNavigator();
global.Buffer = Buffer;

export default function App() {
  return (
    <LoveProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={({ navigation }) => ({
            headerTitle: <Header {...navigation} />,
            title: "LOVEFINDERRZ",
            headerStyle: {
              backgroundColor: colors.pink,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
              // paddingTop: Platform.OS === "android" ? 25 : 0,
            },
            headerTintColor: colors.pink,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <ProfileButton {...navigation} />,
            headerLeft: () => <HeartButton {...navigation} />,
          })}
        >
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen name="MatchScreen" component={MatchScreen} />
          <Stack.Screen
            name="UserScreen"
            component={UserScreen}
            options={{ header: () => null }}
          />
          <Stack.Screen name="HeartScreen" component={HeartScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
          <Stack.Screen
            name="NoMoreMatchesScreen"
            component={NoMoreMatchesScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LoveProvider>
  );
}
