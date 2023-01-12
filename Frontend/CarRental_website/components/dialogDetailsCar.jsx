import React, { useState } from "react";
import { Button, Dialog } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "@rneui/themed";
import FuelType from "../domain/enums/FuelType";
import ConsumptionType from "../domain/enums/ConsumptionType";

const DialogDetailsCar = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const carTitle = `${item.model}` + ` ${item.make}`;

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          title="View More Details"
          buttonStyle={{
            backgroundColor: "rgba(39, 39, 39, 1)",
            width: 128,
            height: 35,
            borderRadius: 50,
            marginRight: 20,
          }}
          titleStyle={{
            color: "white",
            fontSize: 11,
            fontWeight: "bold",
          }}
          onPress={toggleDialog}
        />
      </View>

      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title={carTitle} />
        <View style={styles.containerDialog}>
          <View style={styles.containerRow}>
            <Icon
              name="gas-pump"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>Fuel Type: {FuelType[item.fuel]}</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="snowflake"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            {!item.airCondtion ? (
              <Text style={styles.text}>Air conditions</Text>
            ) : (
              <Text style={styles.text}>No air conditions</Text>
            )}
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="gear"
              type="font-awesome"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>Engine: {item.engine}cc</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="car-door"
              type="material-community"
              color="black"
              style={{ marginRight: 5 }}
              //   onPress={}
            />
            <Text style={styles.text}>{item.nrOfDoors} doors</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="clock"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>Year: {item.year}</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="road"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>Mileage: {item.mileage}km</Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="money-bill"
              type="font-awesome-5"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.text}>
              Consumption: {ConsumptionType[item.consumption]}
            </Text>
          </View>
        </View>
        <Dialog.Actions>
          <Dialog.Button
            title="Close"
            titleStyle={{ color: "black", fontWeight: "bold" }}
            onPress={() => {
              toggleDialog();
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    width: 220,
    margin: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  },
  containerDialog: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  containerRow: { marginTop: 20, display: "flex", flexDirection: "row" },
});

export default DialogDetailsCar;
