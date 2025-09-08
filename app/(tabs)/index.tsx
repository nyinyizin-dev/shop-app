import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ width: 150, height: 150, backgroundColor: "#a39adeff" }} />
      <View style={{ width: 150, height: 150, backgroundColor: "#cfe1d6ff" }} />
      <View
        style={{
          position: "absolute",
          bottom: 100,
          right: 20,
          width: 75,
          height: 75,
          borderRadius: 75,
          backgroundColor: "#dd884bff",
        }}
      >
      </View>
    </SafeAreaView>
  );
}
