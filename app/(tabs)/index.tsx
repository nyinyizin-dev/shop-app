import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10,
        alignContent: 'center',
        alignItems:'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ backgroundColor: "#CA64E3", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#CA64ae", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#f3d31fed", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#CA64E3", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#CA64E3", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#f3d31fed", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#CA64ae", width: 100, height: 100 }} />
      <View style={{ backgroundColor: "#CA64E3", width: 100, height: 100 }} />
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
