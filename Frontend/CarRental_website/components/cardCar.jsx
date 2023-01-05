import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  card: { borderRadius: 40, padding: 5, margin: 5 },
  cardTitle: {
    marginTop: 30,
  },
  price: {
    fontSize: 40,
    marginRight: 30,
    color: "#304FFE",
  },
  cardCover: {
    marinBottom: 50,
  },
});

const RightContent = () => (
  <View>
    <Text style={styles.price}>$350</Text>
    <Text style={{ color: "grey", marginLeft: 25 }}>/month</Text>
  </View>
);

const CarCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Title
        style={styles.cardTitle}
        title="Toyota"
        titleStyle={{ color: "#212121", fontWeight: "300" }}
        titleVariant="displayMedium"
        subtitle="Yaris iA"
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
        <Text>Engine</Text>
        <Text style={{ marginRight: 32 }}>4-Cyl 1.5 Liter</Text>
      </Card.Content>
      <Card.Cover
        style={styles.cardCover}
        source={{
          uri: "https://www.pngmart.com/files/10/Red-Kia-Car-Transparent-Background.png",
        }}
      />
      <Card.Content style={{ height: 50 }} />
    </Card>
  );
};

export default CarCard;
