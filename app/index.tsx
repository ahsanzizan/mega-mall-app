import { Image, Text, TouchableOpacity, View } from "react-native";
import { getAllProducts } from "../lib/queries/product.queries";
import { useState, useEffect } from "react";
import type { Product } from "../types/product.type";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import ProductCard from "../components/ProductCard";

export default function RootPage() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res);
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
    </ScrollView>
  );
}
