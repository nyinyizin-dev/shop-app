import {  Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import POSTS from "@/data/posts.json"

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 18,marginBottom: 10 }}>Hello Local Storage</Text>
      {POSTS.posts.map(post => (
        <Text key={post.id} style={{marginBottom: 10, fontSize: 14}}>
        Title : {post.title}
        </Text>
      ))}
    </SafeAreaView>
  );
}
