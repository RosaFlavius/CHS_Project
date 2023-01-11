import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: 40,
    padding: 5,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
  price: {
    fontSize: 40,
    marginRight: 30,
    color: "#304FFE",
  },
  cardCover: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});

const MapCard = ({ item }) => {
  const RightContent = () => (
    <View>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={{ color: "grey", marginLeft: 25 }}>/day</Text>
    </View>
  );
  console.log(item);

  return (
    <Card style={styles.card} elevation={2}>
      <Card.Title
        style={styles.cardTitle}
        title={item.make}
        titleStyle={{ color: "#212121", fontWeight: "300" }}
        titleVariant="displayMedium"
        subtitle={item.model}
        subtitleVariant="bodyLarge"
        subtitleStyle={{ color: "grey" }}
        right={RightContent}
      />
      <Card.Content
        style={{
          marginTop: 8,
          marginBottom: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.location}</Text>
      </Card.Content>
      <Card.Cover
        style={styles.cardCover}
        source={{
          uri: `${item.image}`,
        }}
        resizeMode="contain"
      />
      <Card.Content style={{ height: 50 }} />
    </Card>
  );
};

export default MapCard;
