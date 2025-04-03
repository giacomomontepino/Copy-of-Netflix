import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Intro from "./screens/intro";
import Profile  from "./screens/profile";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="intro"
          component={Intro}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="profile"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
