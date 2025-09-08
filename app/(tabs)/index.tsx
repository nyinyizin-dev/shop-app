import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          // flex: 1,
          flexGrow: 1,
          // flexShrink: 1,  // default - 0
          // flexBasis: 0, // default - auto
        }}
      >
        <Image source={require("@/assets/images/mountain.jpg")} />
      </View>
      <View
        style={{
          // flex: 1,
          flexGrow: 1,
          // flexShrink: 1,
          // flexBasis: 0,
        }}
      >
        <Image source={require("@/assets/images/mountain.jpg")} />
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     marginTop: 50,
//     color: "#f3d31fed",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
