import { Text } from "@rneui/base";
import { Avatar, Divider, Button, Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

const Profile = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View styles={styles.containerView}>
        <View style={styles.containerAvatar}>
          <Avatar
            rounded
            imageProps={{
              resizeMode: "contain",
              borderRadius: 50,
            }}
            size="xlarge"
            title="Rosa Flavius"
            source={{
              uri: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
            }}
          />
          <Text style={styles.name}>Rosa Flavius</Text>
          <Text style={styles.email}>flavius.rosa@student.upt.ro</Text>
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
        {/* <View>
          <Button
            type="solid"
            size="sm"
            buttonStyle={{
              backgroundColor: "grey",
              width: 140,
              height: 40,
              borderRadius: 50,
            }}
          >
            <Icon
              name="logout"
              type="material"
              color="white"
              style={{ marginRight: 5 }}
            />
            Log Out
          </Button>
        </View> */}

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
              Country: Romania
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
              City: Arad
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
              Phone: 0734892470
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
              Date of birth: 17/07/2000
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
              Address: Str. Banu Maracine Bl H Ap 18
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
