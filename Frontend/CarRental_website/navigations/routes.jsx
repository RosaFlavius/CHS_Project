import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/user/home/home";
import Car from "../pages/user/car/car";
import Profile from "../pages/user/profile/profile";
import SignUp from "../pages/user/signup/signup";
import ROUTES from "./constants";
import Login from "../pages/user/login/login";

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
      initialRouteName={ROUTES.LOGIN}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignUp} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          headerBackVisible: false,
        }}
      />
      <Stack.Screen name={ROUTES.CAR} component={Car} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}
export default Routes;
