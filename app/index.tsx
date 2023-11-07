import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  getAllCategories,
  getAllProducts,
} from "../utils/queries/product.queries";
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
import { Post } from "../types/post.type";
import { getAllPosts } from "../utils/queries/post.queries";
import PostCard from "../components/PostCard";

export default function RootPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const allProducts = await getAllProducts();
        const allCategories = await getAllCategories();
        const allPosts = await getAllPosts();

        setProducts(allProducts);
        setCategories(allCategories);
        setPosts(allPosts);
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
      <View className="w-full">
        <Text
          className="text-base mb-14"
          style={{ fontFamily: fontFamilies.medium }}
        >
          Latest News
        </Text>
        <View className="w-full mb-7">
          <View className="flex flex-col gap-8">
            {posts &&
              posts
                .slice(0, 5)
                .map((post) => <PostCard key={post.id} post={post} />)}
          </View>
        </View>
        <TouchableOpacity
          className="w-full py-4 mb-20 border border-[#0C1A30]"
          style={{ borderRadius: 10 }}
        >
          <Text className="text-center">See All News</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
