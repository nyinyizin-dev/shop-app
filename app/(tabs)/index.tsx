import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Title from "@/components/shop/Title";
import { categories } from "@/data/index";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const [select, setSelect] = useState(1);

  const handleSelect = useCallback((id: number) => {
    setSelect(id);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/n.png")}
          style={styles.logo}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Cart />
      </View>
      <Image
        source={require("@/data/shop/banner6.png")}
        style={styles.banner}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <View style={{ paddingHorizontal: 15 }}>
        <Title title="Shop By Category" btnText="Sell All" />
        <FlashList
          data={categories}
          extraData={select}
          renderItem={({ item }) => (
            <Category {...item} select={select} onSelect={handleSelect} />
          )}
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={90}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        />

        <Title title="Recomended for You" btnText="Sell All" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  logo: {
    width: 50,
    height: 25,
  },
  banner: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
