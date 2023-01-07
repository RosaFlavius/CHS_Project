import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button, Icon, Image, Divider } from "@rneui/themed";
import DialogDetailsCar from "../../../components/dialogDetailsCar";
import { useRoute } from "@react-navigation/native";
import FuelType from "../../../domain/enums/FuelType";
import axios from "axios";
import env from "../../../environment.json";
import { useEffect, useState } from "react";

const Car = () => {
  const routes = useRoute();
  const [car, setCar] = useState({});

  const getProduct = async () => {
    await axios
      .get(env.BASE_URL + `Car/${routes.params.id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProduct();
  }, [routes.params.id]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30, alignSelf: "center" }}>
          {car.make} {car.model}
        </Text>
      </View>
      <View style={{ width: "100%", height: "40%", padding: 20 }}>
        <Image
          containerStyle={styles.img}
          resizeMode="contain"
          source={{
            uri: `${car.image}`,
          }}
        />
        <Button buttonStyle={styles.button} onPress={console.log(routes)}>
          <Text
            style={{
              color: "white",
              marginHorizontal: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Rent Now | ${car.price}/day
          </Text>
        </Button>
      </View>
      <Divider
        width={5}
        color="rgba(28, 28, 28, 0.42)"
        style={{
          marginTop: 30,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 20,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: "bold" }}>
            Car info
          </Text>
          <DialogDetailsCar item={car} />
        </View>
        <View style={styles.containerInfo}>
          <View style={styles.containerRow}>
            <Icon
              name="gas-pump"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>Fuel Type: {FuelType[car.fuel]}</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="snowflake"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            {!car.airCondtion ? (
              <Text style={styles.text}>Air conditions</Text>
            ) : (
              <Text style={styles.text}>No air conditions</Text>
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.containerRow}>
          <Icon
            name="gear"
            type="font-awesome"
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text style={styles.text}>Engine: {car.engine}cc</Text>
        </View>
        <View style={styles.containerRow}>
          <Icon
            name="car-door"
            type="material-community"
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              width: 95,
            }}
          >
            {car.nrOfDoors} doors
          </Text>
        </View>
      </View>
      <View
        style={{ marginTop: 70, width: "100%", alignSelf: "center" }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  containerInfo: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerRow: { marginTop: 20, display: "flex", flexDirection: "row" },
  button: {
    backgroundColor: "rgba(39, 39, 39, 1)",
    width: 350,
    height: 59,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  },
  img: {
    width: "100%",
    flex: 1,
  },
});
export default Car;
