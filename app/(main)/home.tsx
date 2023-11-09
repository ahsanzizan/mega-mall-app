import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  getAllCategories,
  getAllProducts,
} from "../../utils/queries/product.queries";
import { useState, useEffect } from "react";
import type { Product } from "../../types/product.type";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import ProductCard from "../../components/ProductCard";
import { fontFamilies } from "../../styles/base";
import SectionHeader from "../../components/SectionHeader";
import MarketingCard from "../../components/MarketingCard";
import CategoryTag from "../../components/CategoryTag";
import SpecialProductCard from "../../components/SpecialProductCard";
import { Post } from "../../types/post.type";
import { getAllPosts } from "../../utils/queries/post.queries";
import PostCard from "../../components/PostCard";
import SearchBar from "../../components/SearchBar";

export default function HomePage() {
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
    <ScrollView className="px-6 pb-16 pt-5" showsVerticalScrollIndicator={false}>
      <View className="mb-6 flex flex-row items-center justify-between w-full py-5">
        <Text
          style={{ fontFamily: fontFamilies.bold }}
          className="text-lg text-[#3669C9]"
        >
          Mega Mall
        </Text>
        <View className="flex flex-row items-center gap-5">
          <TouchableOpacity>
            <Svg width="20" height="20" viewBox="0 0 19 20" fill="none">
              <Path
                d="M18.7958 11.3853L17.2125 5.68864C16.7484 4.01976 15.7398 2.55388 14.3469 1.52404C12.9541 0.494189 11.257 -0.040533 9.52537 0.00486712C7.79375 0.0502672 6.12699 0.673184 4.79004 1.7746C3.45308 2.87602 2.52266 4.39273 2.14665 6.08364L0.920818 11.5961C0.785414 12.2053 0.788545 12.837 0.929979 13.4447C1.07141 14.0525 1.34754 14.6207 1.73797 15.1074C2.1284 15.5942 2.62317 15.987 3.18574 16.2569C3.74832 16.5269 4.36434 16.667 4.98832 16.667H5.91665C6.10791 17.6089 6.61893 18.4557 7.3631 19.064C8.10728 19.6722 9.03885 20.0045 9.99998 20.0045C10.9611 20.0045 11.8927 19.6722 12.6369 19.064C13.381 18.4557 13.8921 17.6089 14.0833 16.667H14.7817C15.424 16.667 16.0576 16.5186 16.6331 16.2332C17.2086 15.9478 17.7103 15.5332 18.099 15.0219C18.4877 14.5105 18.753 13.9162 18.874 13.2853C18.995 12.6545 18.9685 12.0042 18.7966 11.3853H18.7958ZM9.99998 18.3336C9.48477 18.3315 8.98279 18.1702 8.56274 17.8719C8.14268 17.5736 7.82505 17.1527 7.65332 16.667H12.3467C12.1749 17.1527 11.8573 17.5736 11.4372 17.8719C11.0172 18.1702 10.5152 18.3315 9.99998 18.3336ZM16.7717 14.0128C16.5394 14.3209 16.2386 14.5705 15.893 14.7419C15.5474 14.9134 15.1666 15.0018 14.7808 15.0003H4.98832C4.61397 15.0002 4.24442 14.9161 3.90694 14.7541C3.56945 14.5921 3.27266 14.3564 3.03845 14.0644C2.80425 13.7724 2.63862 13.4315 2.55379 13.0668C2.46895 12.7022 2.46709 12.3232 2.54832 11.9578L3.77332 6.44448C4.06861 5.11632 4.79941 3.92498 5.84953 3.05985C6.89966 2.19472 8.20884 1.70545 9.56896 1.66982C10.9291 1.63419 12.2621 2.05424 13.3561 2.8632C14.4501 3.67216 15.2422 4.8236 15.6067 6.13448L17.19 11.8311C17.2946 12.2023 17.3113 12.5927 17.2386 12.9714C17.166 13.3501 17.0061 13.7067 16.7717 14.0128Z"
                fill="#0C1A30"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0H0.833333C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833ZM5.83333 20C6.75381 20 7.5 19.2538 7.5 18.3333C7.5 17.4129 6.75381 16.6667 5.83333 16.6667C4.91286 16.6667 4.16667 17.4129 4.16667 18.3333C4.16667 19.2538 4.91286 20 5.83333 20ZM15.3333 18.6667C15.3333 19.5871 14.5871 20.3333 13.6667 20.3333C12.7462 20.3333 12 19.5871 12 18.6667C12 17.7462 12.7462 17 13.6667 17C14.5871 17 15.3333 17.7462 15.3333 18.6667Z"
                fill="#0C1A30"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full mb-7">
        <SearchBar placeholder="Search Product Name" href="/products/search" />
      </View>
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
      <SpecialProductCard
        title={`Modular\nHeadphone`}
        backgroundColor="#3669C9"
        imageUri={require("../../assets/images/special-product.png")}
      />
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
      <SpecialProductCard
        title={`CO2 - Cable\nMultifunction`}
        backgroundColor="#0ACF83"
        imageUri={require("../../assets/images/special-product.png")}
      />
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
