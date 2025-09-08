import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

// https://reqres.in/api/users/2
// https://reqres.in/ - domain
// api/users - route
// /2 - route param
// ?page=2 - query string

// {
//     "data": {
//         "id": 2,
//         "email": "janet.weaver@reqres.in",
//         "first_name": "Janet",
//         "last_name": "Weaver",
//         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     },
//     "support": {
//         "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
//         "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."
//     }
// }

// fetch()
// axios
// tanstack query
// rtk query

// API Fetching - Data Fetching
// Request - Response

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export default function HomeScreen() {
  const [user, setUser] = useState<User | null>();

  const fetchData = () => {
    return fetch("https://reqres.in/api/users/2", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setUser(json.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}} >
      <Text style={styles.text}>Hello Networking</Text>
      <Text >{user?.email}</Text>
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
