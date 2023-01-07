import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Routes from "./navigations/routes";
import Profile from "./pages/user/profile/profile";
import SignUp from "./pages/user/signup/signup";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <Profile /> */}
        {/* <Routes /> */}
        <SignUp />
        {/*
          <StatusBar style="auto" /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
