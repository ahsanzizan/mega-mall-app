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
import MarketingCard from "../components/MarketingCard";

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
      <MarketingCard />
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
