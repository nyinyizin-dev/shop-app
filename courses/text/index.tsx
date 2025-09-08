import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import POSTS from "@/data/posts.json";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello Local Storage</Text>
      {POSTS.posts.map((post) => (
        <Text
          key={post.id}
          style={[styles.text, styles.postText, { fontWeight: "bold" }]}
        >
          Title :{" "}
          <Text style={{ fontWeight: "300", fontSize: 14 }}> {post.title}</Text>
          {"\n"}
          Body :{" "}
          <Text style={{ fontWeight: "300", fontSize: 14 }}> {post.body}</Text>
        </Text>
      ))}

      <Text style={{ fontWeight: "bold" }}>
        This is Parent Text. <Text>This is Nested Text</Text>
      </Text>

      <Text
        style={{
          textAlign: "justify",
          fontSize: 14,
          lineHeight: 16,
          // fontStyle: 'normal',
          // fontVariant: 'small-caps',
          fontWeight: "300",
          paddingHorizontal: 10,
          color: 'teal',
          letterSpacing: 1
        }}
        // numberOfLines={3}
        // ellipsizeMode="middle"
        selectable={true}
        allowFontScaling={false}
      >
        {POSTS.content}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "blue",
  },
  postText: {
    marginBottom: 10,
    fontSize: 16,
    color: "teal",
  },
});
