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
    <ScrollView className="px-6 py-10">
      <View
        className="w-full mb-7 flex flex-row justify-between relative"
        style={{ borderRadius: 10 }}
      >
        <View
          className="bg-[#3669C9] py-8 pl-6 pr-10"
          style={{
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          <Text className="text-white font-bold text-xl mb-2">
            Gratis Ongkir{"\n"}Selama PPKM!
          </Text>
          <Text className="text-white" style={{ fontSize: 10 }}>
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
        <View className="mb-5">
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-base">Categories</Text>
            <TouchableOpacity>
              <Text className="text-[#3669C9]">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
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
                    <Text className="font-medium text-[#FE3A30]">
                      {category.replace(category[0], category[0].toUpperCase())}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
      </View>
      <View>
        <View className="mb-5">
          <View className="flex flex-row justify-between">
            <Text className="font-semibold text-base">Featured Products</Text>
            <TouchableOpacity>
              <Text className="text-[#3669C9]">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
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
