import { Text } from "@rneui/base";
import { Avatar, Divider, Button, Icon } from "@rneui/themed";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import env from "../../../environment.json";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../../navigations/constants";

const Profile = () => {
  const [userId, setUserId] = useState();
  const navigation = useNavigation();
  const [user, setUser] = useState({});

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

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View styles={styles.containerView}>
        <View style={styles.containerAvatar}>
          {user.picture !== "" ? (
            <Avatar
              rounded
              imageProps={{
                resizeMode: "contain",
                borderRadius: 50,
              }}
              size="xlarge"
              source={{
                uri: `${user.picture}`,
              }}
            />
          ) : (
            <Avatar
              rounded
              imageProps={{
                resizeMode: "contain",
                borderRadius: 50,
              }}
              size="xlarge"
              source={{
                uri: `https://cdn.dribbble.com/users/673318/screenshots/13978786/media/5c307ab803776b5ae728e20e43d545fe.png?compress=1&resize=400x300`,
              }}
            />
          )}

          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <Divider
          width={5}
          color="rgba(28, 28, 28, 0.42)"
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 20,
            borderRadius: 20,
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "serif",
            }}
          >
            Profile info
          </Text>

          <Button
            type="solid"
            size="sm"
            buttonStyle={{
              backgroundColor: "grey",
              width: 140,
              height: 40,
              borderRadius: 50,
              marginRight: 5,
            }}
            onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE)}
          >
            <Icon
              name="edit"
              type="font-awesome-5"
              color="white"
              style={{ marginRight: 5 }}
            />
            Edit Profile
          </Button>
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.containerRow}>
            <Icon
              name="location-pin"
              type="material"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
              }}
            >
              Country: {user.country}
            </Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="location-city"
              type="material"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
              }}
            >
              City: {user.city}
            </Text>
          </View>

          <View style={styles.containerRow}>
            <Icon
              name="phone"
              type="font-awesome"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
              }}
            >
              Phone: {user.phone}
            </Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="calendar"
              type="font-awesome"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
              }}
            >
              Date of birth: {user.dateOfBirth}
            </Text>
          </View>
          <View style={styles.containerRow}>
            <Icon
              name="address-card-o"
              type="font-awesome"
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textOverflow: "ellipsis",
                wordWrap: "break-word",
              }}
            >
              Address: {user.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
  },
  containerAvatar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "55%",
    backgroundColor: "white",
  },
  containerInfo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  containerRow: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  name: {
    fontSize: 30,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    marginTop: 10,
    fontFamily: "serif",
  },
  email: {
    fontSize: 20,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    fontFamily: "serif",
    marginBottom: 5,
  },
});

export default Profile;
