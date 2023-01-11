import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Button } from "@rneui/themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HelperText, TextInput } from "react-native-paper";
import ROUTES from "../../../navigations/constants";
import env from "../../../environment.json";
import {
  editProfileSchema,
  INITAL_FORM_STATE,
} from "../../../validations/editProfileSchema";
import { Formik } from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfile = () => {
  const [userId, setUserId] = useState();
  const [user, setUser] = useState();

  const fetchUser = async () => {
    await axios
      .get(`${env.BASE_URL}` + `User/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const handleSubmit = async (USER) => {
    axios
      .put(`${env.BASE_URL}` + `User/${userId}`, {
        name: user.name,
        email: user.email,
        password: user.password,
        dateOfBirth: USER.dateOfBirth,
        phone: USER.phone,
        country: USER.country,
        city: USER.city,
        address: USER.address,
        picture: user.picture,
        admin: user.admin,
      })
      .then(function (response) {
        if (response) {
          console.log(response);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("LoggedInAccount");
      if (value !== null) {
        console.log(value);
        setUserId(value);
      }
    } catch (e) {
      console.log("error");
    }
  };
  getData();

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <Formik
          initialValues={INITAL_FORM_STATE}
          validationSchema={editProfileSchema}
          onSubmit={(values) => {
            let user = {
              dateOfBirth: values.dateOfBirth,
              phone: values.phone,
              country: values.country,
              city: values.city,
              address: values.address,
            };
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
                value={values.phone}
                label="Phone"
                style={styles.textInput}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                error={!!errors.phone && touched.phone}
              />
              {!!errors.phone && touched.phone ? (
                <View style={{ marginTop: -10, marginBottom: -6 }}>
                  <HelperText visible={!!errors.phone && touched.phone}>
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
                  <HelperText visible={!!errors.country && touched.country}>
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
                  <HelperText visible={!!errors.city && touched.city}>
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
                  <HelperText visible={!!errors.address && touched.address}>
                    {errors.address}
                  </HelperText>
                </View>
              ) : null}
              <Button
                title="Edit"
                titleStyle={{ fontSize: 17 }}
                buttonStyle={styles.button}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
    width: "70%",
    height: "100%",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#1B82A3",
    marginTop: 30,
    height: 50,
    fontSize: 50,
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
  },
  containerTextInputs: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 80,
  },
  textInput: { marginBottom: 5, backgroundColor: "white", color: "#1B82A3" },
});
export default EditProfile;
