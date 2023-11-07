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
import CategoryTag from "../components/CategoryTag";
import SpecialProductCard from "../components/SpecialProductCard";

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
    <ScrollView className="px-6 py-16" showsVerticalScrollIndicator={false}>
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
                return <CategoryTag key={i} category={category} />;
              })}
          </View>
        </ScrollView>
      </View>
      <View className="mb-7">
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
      <SpecialProductCard />
      <View className="mb-7">
        <SectionHeader title="Best Selling" seeAllHref="" />
        <ScrollView
          className="overflow-visible"
          overScrollMode="never"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row gap-1 overflow-visible">
            {products &&
              products
                .filter((product) => product.rating > 4.5)
                .map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
