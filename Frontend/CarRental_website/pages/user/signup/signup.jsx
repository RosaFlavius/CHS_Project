import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Stack } from "@react-native-material/core";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  subtitleText: {
    color: Colors.white,
  },
  scrollView: {
    backgroundColor: "black",

    width: "80%",
    height: "100%",
  },
  button: {
    borderRadius: 4,
    height: 50,
  },
  container: {
    backgroundColor: "black",
    alignItems: "center",
  },
  containerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  containerTextInputs: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Welcome to CarRental!</Text>
        <Text style={styles.subtitleText}>
          Let's get you a ride as fast as possible!
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerTextInputs}>
          <TextInput label="First Name" style={{ marginBottom: 5 }} />
          <TextInput label="Last Name" style={{ marginBottom: 5 }} />
          <TextInput label="Email" style={{ marginBottom: 5 }} />
          <TextInput
            label="Password"
            secureTextEntry
            style={{ marginBottom: 5 }}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry
            style={{ marginBottom: 5 }}
          />
          <TextInput label="Phone" style={{ marginBottom: 5 }} />
          <TextInput label="DateOfBirth" style={{ marginBottom: 5 }} />
          <TextInput label="Country" style={{ marginBottom: 5 }} />
          <TextInput label="City" style={{ marginBottom: 5 }} />
          <TextInput label="Address" style={{ marginBottom: 5 }} />
        </View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Pressed")}
          buttonColor="#1B82A3"
        >
          Register
        </Button>
      </ScrollView>
    </View>
  );
}
