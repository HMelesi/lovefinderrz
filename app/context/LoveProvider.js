import React, { useState } from "react";
import "react-native-gesture-handler";
import LoveContext from "./LoveContext";

export default function LoveProvider(props) {
  const [test, setTest] = useState("first string");

  return (
    <LoveContext.Provider value={{ test: test, setTest }}>
      {props.children}
    </LoveContext.Provider>
  );
}
