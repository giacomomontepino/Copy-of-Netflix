import {
  View,
  Text,
  StyleSheet,
  useAnimatedValue,
  Animated,
} from "react-native";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProfileBox({ backgroundColor, style, name }) {
  const rotate = useAnimatedValue(0);

  useEffect(() => {
    Animated.timing(rotate, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: backgroundColor }, style]}
      >
        <Text style={styles.point}>.</Text>
        <Text style={styles.point}>.</Text>
        <View>
          <Animated.Text
            style={[
              styles.roundBraces,
              { transform: [{ rotate: rotateInterpolation }] },
            ]}
          >
            <Text>)</Text>
          </Animated.Text>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 130,
    margin: 15,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  point: {
    flex: 1,
    color: "#fff",
    fontSize: 55,
    fontWeight: "bold",
    marginLeft: 41,
  },
  roundBraces: {
    color: "#fff",
    fontSize: 55,
    fontWeight: "bold",
    marginLeft: 50,
  },
  text: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
  },
});
