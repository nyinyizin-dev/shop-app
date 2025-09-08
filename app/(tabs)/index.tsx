import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1,flexDirection:"row" }}>
      <View style={{ backgroundColor: "#CA64E3", flex: 1 }} />
      <View style={{ backgroundColor: "#CA64ae", flex: 2 }} />
      <View style={{ backgroundColor: "#CA64", flex: 3 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: "rgba(243, 211, 31, 0.93)",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
