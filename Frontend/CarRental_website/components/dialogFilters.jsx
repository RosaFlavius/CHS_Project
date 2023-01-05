import React, { useState } from "react";
import { Button, Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
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
        <Icon
          raised
          name="filter"
          type="font-awesome"
          color="black"
          onPress={toggleDialog}
        />
      </View>

      <Dialog isVisible={visible} onBackdropPress={toggleDialog}>
        <Dialog.Title title="Select Preference" />
        {[
          "Option 1",
          "Option 2",
          "Option 3",
          "Option 4",
          "Option 5",
          "Option 6",
          "Option 7",
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
              toggleDialog5();
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
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DialogFilters;
