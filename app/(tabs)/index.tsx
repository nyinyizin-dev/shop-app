import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, View, Dimensions, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Title from "@/components/shop/Title";
import { categories, products } from "@/data/index";
import Product from "@/components/shop/Product";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const [select, setSelect] = useState(1);
  const width = Dimensions.get("screen").width;
  const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;
  const itemWidth = width / numColumns - 30;

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

      <FlashList
        ListHeaderComponent={() => (
          <>
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
          </>
        )}
        data={products}
        numColumns={numColumns}
        renderItem={({ item }) => <Product {...item} itemWidth={itemWidth} />}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={300}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 15}}
        // columnWrapperStyle={{paddingHorizontal: 15, paddingBottom: 15}} // not have in FlashList
        ListFooterComponent={()=> (
          <View style={{height: 150}}>
            <Pressable style={styles.button}>
              <Text style={styles.btnText}>Explore more</Text>
            </Pressable>
          </View>
        )}
      />
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
  button:{
    marginTop: 10,
    marginHorizontal:'auto',
    alignItems: 'center',
    backgroundColor: '#007618',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText:{
    color:'white',
    fontWeight: '500'
  },
});
