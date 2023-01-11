import * as React from "react";
import { Appbar } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import DialogFilters from "./dialogFilters";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import ROUTES from "../navigations/constants";
import { useNavigation } from "@react-navigation/native";

const AppbarHome = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.container}>
      <Searchbar
        style={{ borderRadius: 50, width: "100%", backgroundColor: "white" }}
        elevation={5}
        placeholder="Search for a car"
      />
      <View style={styles.containerIcons}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            navigation.navigate(ROUTES.PROFILE);
          }}
        >
          <Icon raised name="user-tie" type="font-awesome-5" color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          key={2}
          onPress={() => navigation.navigate(ROUTES.MAP)}
        >
          <Icon raised name="location" type="entypo" color="black" />
        </TouchableOpacity>
        <DialogFilters />
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 15,
    marginTop: -20,
    display: "flex",
    flexDirection: "column",
    height: 100,
  },
  containerIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default AppbarHome;
