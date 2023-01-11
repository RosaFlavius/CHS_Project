import React, { useEffect, useState } from "react";
import CarCard from "../../../components/cardCar";
import { StyleSheet, ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppbarHome from "../../../components/appbarHome";
import ROUTES from "../../../navigations/constants";
import env from "../../../environment.json";
import axios from "axios";
import {
  CommonActions,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    backgroundColor: "white",
  },
});

const Home = () => {
  const [cars, setCars] = useState([]);
  const navigation = useNavigation();

  const fetchCars = async () => {
    await axios
      .get(`${env.BASE_URL}` + `Car`)
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <View style={styles.view}>
      <View>
        <AppbarHome />
      </View>
      <ScrollView style={{ marginBottom: 95 }}>
        {cars?.map((item) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={item.id}
            onPress={() =>
              navigation.navigate(ROUTES.CAR, {
                id: `${item.id}`,
              })
            }
          >
            <CarCard key={item.id} item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;