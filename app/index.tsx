import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  getAllCategories,
  getAllProducts,
} from "../lib/queries/product.queries";
import { useState, useEffect } from "react";
import type { Product } from "../types/product.type";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import ProductCard from "../components/ProductCard";
import { fontFamilies } from "../styles/base";
import SectionHeader from "../components/SectionHeader";

export default function RootPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const allProducts = await getAllProducts();
        const allCategories = await getAllCategories();

        setProducts(allProducts);
        setCategories(allCategories);
      } catch (error) {
        return false;
      }
      return true;
    };

    init();
  }, []);

  return (
    <ScrollView className="px-6 py-16">
      <View
        className="w-full mb-7 flex flex-row justify-between relative"
        style={{ borderRadius: 10 }}
      >
        <View
          className="bg-[#3669C9] py-8 pl-6 pr-12"
          style={{
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          <Text
            className="text-white font-bold text-xl mb-2"
            style={{ fontFamily: fontFamilies.bold }}
          >
            Gratis Ongkir{"\n"}Selama PPKM!
          </Text>
          <Text
            className="text-white"
            style={{ fontSize: 10, fontFamily: fontFamilies.regular }}
          >
            Periode Mei - Agustus 2020
          </Text>
        </View>
        <Image
          source={require("../assets/images/cover.png")}
          className="absolute right-0 -z-10 h-full"
          style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
        />
      </View>
      <View className="mb-5">
        <SectionHeader title="Categories" seeAllHref="" />
        <ScrollView
          className="overflow-visible"
          overScrollMode="never"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row gap-2 overflow-visible">
            {categories &&
              categories.map((category, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    className="px-3 py-2 border border-[#FE3A30] rounded-full"
                  >
                    <Text
                      className="font-medium text-[#FE3A30]"
                      style={{ fontFamily: fontFamilies.medium }}
                    >
                      {category.replace(category[0], category[0].toUpperCase())}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
      <View>
        <SectionHeader title="Featured Products" seeAllHref="" />
        <ScrollView
          className="overflow-visible"
          overScrollMode="never"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row gap-1 overflow-visible">
            {products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
