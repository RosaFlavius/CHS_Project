import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Avatar, Input, Icon, Button } from "@rneui/themed";
import { HelperText } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../../navigations/constants";
import env from "../../../environment.json";
import {
  loginSchema,
  INITIAL_FORM_STATE,
} from "../../../validations/loginSchema";
import { Formik } from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const handleSubmit = async (email, password) => {
    await axios
      .get(`${env.BASE_URL}` + `User/users/${email}`)
      .then(function (response) {
        if (response) {
          if (response.data.password === password) {
            navigation.navigate(ROUTES.HOME, {
              userId: `${response.data.id}`,
            });
            storeData(response.data.id);
          }
        }
        // console.log();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const storeData = async (value) => {
    try {
      AsyncStorage.clear();
      await AsyncStorage.setItem(`LoggedInAccount`, value);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Car Rental</Text>
        <View
          style={{
            borderRadius: 100,
            borderColor: "white",
            borderWidth: 5,
          }}
        >
          <Avatar
            rounded
            avatarStyle={{
              borderColor: "white",
            }}
            imageProps={{
              resizeMode: "contain",
              borderRadius: 50,
              borderColor: "white",
            }}
            size="xlarge"
            title="Rosa Flavius"
            source={{
              uri: "https://shmector.com/_ph/13/853993434.png",
            }}
          />
        </View>
      </View>
      <View style={styles.scrollView}>
        <Formik
          initialValues={INITIAL_FORM_STATE}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            handleSubmit(values.email, values.password);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.containerTextInputs}>
              <Input
                label="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                style={{ color: "white" }}
                errorProps={!!errors.email && touched.email}
                errorMessage={errors.email}
                leftIcon={
                  <Icon
                    name="mail"
                    type="material"
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                }
              />
              <Input
                label="Password"
                style={{ color: "white" }}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                errorProps={!!errors.password && touched.password}
                errorMessage={errors.password}
                leftIcon={
                  <Icon
                    name="lock"
                    type="font-awesome-5"
                    color="white"
                    style={{ marginRight: 5 }}
                  />
                }
                secureTextEntry={true}
              />

              <Button
                title="Sign In"
                titleStyle={{ fontSize: 17 }}
                buttonStyle={styles.button}
                onPress={handleSubmit}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTES.SIGNUP)}
                activeOpacity={0.7}
              >
                <Text
                  style={{ color: "#1B82A3", marginLeft: 100, marginTop: 15 }}
                >
                  Don't have an account yet?
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  subtitleText: {
    color: "white",
  },
  scrollView: {
    backgroundColor: "black",
    width: "70%",
    height: "100%",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#1B82A3",
    marginTop: 50,
    height: 55,
    fontSize: 50,
  },
  container: {
    backgroundColor: "black",
    alignItems: "center",
  },
  containerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  containerTextInputs: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textInput: { marginBottom: 5, backgroundColor: "white", color: "#1B82A3" },
});
export default Login;
