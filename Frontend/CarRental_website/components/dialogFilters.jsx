import React, { useState } from "react";
import { Dialog, CheckBox } from "@rneui/themed";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

const DialogFilters = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(1);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleDialog}>
          <Icon raised name="filter" type="font-awesome" color="black" />
        </TouchableOpacity>
      </View>
      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Select Preference" />
        {[
          "Budget",
          "Luxury",
          "Available",
          "Low consumption",
          "Mid consumption",
          "High consumption",
          "With air conditioner",
        ].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog} />
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DialogFilters;
