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
    marginTop: 70,
  },
  button: {
    borderRadius: 4,
    height: 50,
  },
});

export default function SignUp() {
  return (
    <ScrollView style={styles.scrollView}>
      <Stack spacing={2} style={{ margin: 16, width: 300 }}>
        <Text style={styles.titleText}>Welcome to CarRental!</Text>
        <Text style={styles.subtitleText}>
          Let's get you a ride as fast as possible!
        </Text>
        <TextInput label="First Name" />
        <TextInput label="Last Name" />
        <TextInput label="Email" />
        <TextInput label="Password" secureTextEntry />
        <TextInput label="Confirm Password" secureTextEntry />
        <TextInput label="Phone" />
        <TextInput label="DateOfBirth" />
        <TextInput label="Country" />
        <TextInput label="City" />
        <TextInput label="Address" />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => console.log("Pressed")}
          buttonColor="#1B82A3"
        >
          Register
        </Button>
      </Stack>
    </ScrollView>
  );
}
