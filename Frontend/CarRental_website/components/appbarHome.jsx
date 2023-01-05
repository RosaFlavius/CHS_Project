import * as React from "react";
import { Appbar } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import DialogFilters from "./dialogFilters";
import { View } from "react-native";

const AppbarHome = () => {
  return (
    <Appbar.Header style={{ backgroundColor: "black" }}>
      <Searchbar
        style={{ borderRadius: 50, width: "80%" }}
        placeholder="Search for a car"
      />
      <DialogFilters />
    </Appbar.Header>
  );
};

export default AppbarHome;
