import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import ROUTES from "../../../navigations/constants";
import env from "../../../environment.json";
import { StyleSheet, View, Image } from "react-native";
import MapView from "react-native-maps";
import { MapMarker } from "react-native-maps/lib/MapMarker";

const Map = () => {
  const [cars, setCars] = useState([]);
  const [showCar, setShowCar] = useState(false);
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
    console.log(cars);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.1866,
          longitude: 21.3123,
          latitudeDelta: 0.09,
          longitudeDelta: 0.09,
        }}
      >
        {cars?.map((item) => (
          <MapMarker
            key={item.id}
            title={`${item.make} ${item.model} ${item.price}/day`}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            onPress={() => {
              showCar === true
                ? navigation.navigate(ROUTES.CAR, {
                    id: `${item.id}`,
                  })
                : setShowCar(true);
            }}
          >
            {showCar === true ? (
              <Image
                source={{ uri: `${item.image}` }}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="contain"
              />
            ) : null}
          </MapMarker>
        ))}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
export default Map;
