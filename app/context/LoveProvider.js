import React, { useState } from "react";
import "react-native-gesture-handler";
import LoveContext from "./LoveContext";

export default function LoveProvider(props) {
  const [test, setTest] = useState("first string");
  const [user, setUser] = useState({});

  return (
    <LoveContext.Provider value={{ test: test, setTest, user: user, setUser }}>
      {props.children}
    </LoveContext.Provider>
  );
}
