import React, { useState } from "react";
import "react-native-gesture-handler";
import LoveContext from "./LoveContext";

import users from "../config/users";

export default function LoveProvider(props) {
  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState(users);
  // const [favorites, setFavorites] = useState([]);

  return (
    <LoveContext.Provider
      value={{
        user: user,
        setUser,
        allUsers: allUsers,
        setAllUsers,
        // favorites: favorites,
        // setFavorites,
      }}
    >
      {props.children}
    </LoveContext.Provider>
  );
}
