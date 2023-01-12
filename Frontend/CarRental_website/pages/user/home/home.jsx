import React, { useEffect, useState } from "react";
import CarCard from "../../../components/cardCar";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";

import AppbarHome from "../../../components/appbarHome";
import ROUTES from "../../../navigations/constants";
import env from "../../../environment.json";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  view: {
    width: "100%",
    backgroundColor: "white",
  },
});

const Home = () => {
  const [search, setSearch] = useState("");
  const [cars, setCars] = useState([]);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearch(text);
  };

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

  let filterCars = [];
  filterCars = cars.filter(
    (c) => c.make.toLowerCase().indexOf(search.toLowerCase()) > -1
  );
  return (
    <View style={styles.view}>
      <View>
        <AppbarHome handleSearch={handleSearch} value={search} />
      </View>
      <ScrollView style={{ marginBottom: 95, height: "85%" }}>
        {filterCars?.map((item) => (
          <TouchableOpacity
            activeOpacity={0.95}
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
