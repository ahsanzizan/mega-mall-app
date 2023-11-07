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
    <ScrollView className="p-6">
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
                    className="px-3 py-2 border rounded-full"
                  >
                    <Text className="font-medium">
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
