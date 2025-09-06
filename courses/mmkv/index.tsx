import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage";
import { SafeAreaView } from "react-native-safe-area-context";

import { MMKV, MMKVENC } from "@/mmkv/store";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [user, setUser] = useMMKVStorage("user", MMKV, "unknown");
  // const [policy, setPolicy] = useMMKVStorage("policy", SETTING, "");
  const [token, setToken] = useMMKVStorage("token", MMKVENC, "");

  const setString = async () => {
    await MMKV.setStringAsync("user", name);
  };

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Text style={{ fontSize: 24 }}>Hello - {name}</Text>
      <TextInput
        placeholder="Enter your nmae"
        onChangeText={(val) => setName(val)}
        defaultValue={name}
        style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
      />
      <Button title="Save to MMKV" onPress={() => setUser(name)} />
      <Text style={{ fontSize: 24 }}>{user}</Text>
      <Button title="Save to setString MMKV" onPress={setString} />
      <Text style={{ fontSize: 24 }}>Token : {token}</Text>
      <Button title="Save to MMKVENC" onPress={()=>setToken('asdf1234')} />
    </SafeAreaView>
  );
}
