import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import api from "@/api/axios";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await api.get('/users/2');
        // console.log(response.data)
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.text}>Hello Networking</Text>
      {isLoading && <ActivityIndicator />}
      {user ? <Text>{user?.email}</Text> : <Text>No User Found</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: "#CA64E3",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
});
