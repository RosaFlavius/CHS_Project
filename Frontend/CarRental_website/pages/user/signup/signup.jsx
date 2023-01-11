import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { HelperText, TextInput } from "react-native-paper";
import env from "../../../environment.json";
import {
  registerSchema,
  INITAL_FORM_STATE,
} from "../../../validations/registerSchema";
import { Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../../navigations/constants";

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
    borderRadius: 4,
    backgroundColor: "#1B82A3",
    marginTop: 20,
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
    marginTop: 20,
  },
  textInput: { marginBottom: 5, backgroundColor: "white", color: "#1B82A3" },
});

export default function SignUp() {
  const [validEmail, setValidEmail] = useState(false);
  const navigation = useNavigation();

  // const emailAlreadyExists = (email) => {
  //   axios
  //     .get(`${env.BASE_URL}` + `User/users/${email}`)
  //     .then(function (response) {
  //       if (response) {
  //         setValidEmail(false);
  //       } else {
  //         setValidEmail(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const handleSubmit = (user) => {
    axios
      .post(`${env.BASE_URL}` + `User`, {
        name: user.name,
        email: user.email,
        password: user.password,
        dateOfBirth: user.dateOfBirth,
        phone: user.phone,
        country: user.country,
        city: user.city,
        address: user.address,
        picture: "",
        admin: false,
      })
      .then(function (response) {
        if (response) {
          navigation.goBack(ROUTES.LOGIN);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titleText}>Welcome to CarRental!</Text>
        <Text style={styles.subtitleText}>
          Let's get you a ride as fast as possible!
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={INITAL_FORM_STATE}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            let user = {
              name: values.name,
              email: values.email,
              password: values.password,
              dateOfBirth: values.dateOfBirth,
              phone: values.phone,
              country: values.country,
              city: values.city,
              address: values.address,
              admin: false,
            };
            // emailAlreadyExists(values.email);
            handleSubmit(user);
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
              <TextInput
                value={values.name}
                label="Name"
                style={styles.textInput}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={!!errors.name && touched.name}
              />
              {!!errors.name && touched.name ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.name && touched.name}
                  >
                    {errors.name}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.email}
                label="Email"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={!!errors.email && touched.email}
              />
              {/* {validEmail === false ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText style={{ color: "white" }} visible={!validEmail}>
                    Email already exists!
                  </HelperText>
                </View>
              ) : null} */}
              {!!errors.email && touched.email ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.email && touched.email}
                  >
                    {errors.email}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.password}
                label="Password"
                secureTextEntry
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={!!errors.password && touched.password}
              />
              {!!errors.password && touched.password ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.password && touched.password}
                  >
                    {errors.password}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.phone}
                label="Phone"
                style={styles.textInput}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                error={!!errors.phone && touched.phone}
              />
              {!!errors.phone && touched.phone ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.phone && touched.phone}
                  >
                    {errors.phone}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.dateOfBirth}
                label="DateOfBirth"
                style={styles.textInput}
                onChangeText={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                error={!!errors.dateOfBirth && touched.dateOfBirth}
              />
              {!!errors.dateOfBirth && touched.dateOfBirth ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.dateOfBirth && touched.dateOfBirth}
                  >
                    {errors.dateOfBirth}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.country}
                label="Country"
                style={styles.textInput}
                onChangeText={handleChange("country")}
                onBlur={handleBlur("country")}
                error={!!errors.country && touched.country}
              />
              {!!errors.country && touched.country ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.country && touched.country}
                  >
                    {errors.country}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.city}
                label="City"
                style={styles.textInput}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                error={!!errors.city && touched.city}
                helperText={errors.city}
              />
              {!!errors.city && touched.city ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.city && touched.city}
                  >
                    {errors.city}
                  </HelperText>
                </View>
              ) : null}

              <TextInput
                value={values.address}
                label="Address"
                style={styles.textInput}
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                error={!!errors.address && touched.address}
              />
              {!!errors.address && touched.address ? (
                <View style={{ marginTop: -10, marginBottom: -20 }}>
                  <HelperText
                    style={{ color: "white" }}
                    visible={!!errors.address && touched.address}
                  >
                    {errors.address}
                  </HelperText>
                </View>
              ) : null}

              <Button
                buttonStyle={styles.button}
                size="lg"
                onPress={handleSubmit}
              >
                Register
              </Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
