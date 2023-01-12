import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Routes from "./navigations/routes";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
