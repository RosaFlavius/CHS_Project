import React from "react";
import CarCard from "../../../components/cardCar";
import { StyleSheet, ScrollView, View } from "react-native";
import AppbarHome from "../../../components/appbarHome";
import DialogFilters from "../../../components/dialogFilters";
import { Provider } from "react-native-paper";

const styles = StyleSheet.create({
  view: {
    width: "100%",
  },
});

const Home = () => {
  return (
    <Provider>
      <View style={styles.view}>
        <View>
          <AppbarHome />
        </View>
        <ScrollView>
          <CarCard />
          <CarCard />
          <CarCard />
        </ScrollView>
      </View>
    </Provider>
  );
};

export default Home;
