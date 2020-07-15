import React, { useState } from "react";
import "react-native-gesture-handler";
import LoveContext from "./LoveContext";

export default function LoveProvider(props) {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  return (
    <LoveContext.Provider
      value={{
        user: user,
        setUser,
        favorites: favorites,
        setFavorites,
      }}
    >
      {props.children}
    </LoveContext.Provider>
  );
}
