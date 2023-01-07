import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/user/home/home";
import Car from "../pages/user/car/car";
import Profile from "../pages/user/profile/profile";
import ROUTES from "./constants";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 5,
          backgroundColor: "white",
        },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.CAR} component={Car} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}
export default Routes;
