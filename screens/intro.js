import { useEffect } from "react";
import { StyleSheet, Text, Animated, useAnimatedValue } from "react-native";

export default function Intro({ navigation }) {
  const fadeIn = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
0
    //Naviga nello screen Profile
    setTimeout(() => {
      navigation.navigate("profile");
    }, 1500);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeIn }]}>
      <Text style={styles.logo}>Netflix</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272A2C",
  },
  logo: {
    color: "red",
    fontSize: 65,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
