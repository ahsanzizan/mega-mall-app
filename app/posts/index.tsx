import { useCallback, useEffect, useState } from "react";
import { Post } from "../../types/post.type";
import { getAllPosts } from "../../utils/queries/post.queries";
import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import PostCard from "../../components/PostCard";
import { fontFamilies } from "../../styles/base";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../../components/SearchBar";
import { Path, Svg } from "react-native-svg";
import { Skeleton } from "moti/skeleton";
import { SkeletonCommonProps } from "../../utils/props";

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const allPosts = await getAllPosts();

      setPosts(allPosts);
    } catch (error) {
      return false;
    }
    setIsLoading(false);
    return true;
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ScrollView
      className="bg-[#F8F8F8] px-6 pb-16 pt-5"
      showsVerticalScrollIndicator={false}
    >
      <View className="relative mb-6 flex w-full flex-row items-center justify-between py-5">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Svg width="8" height="15" viewBox="0 0 8 15" fill="none">
            <Path
              d="M2.60003 8.20692C2.41256 8.01939 2.30724 7.76508 2.30724 7.49992C2.30724 7.23475 2.41256 6.98045 2.60003 6.79292L7.18503 2.20692C7.36719 2.01832 7.46798 1.76571 7.4657 1.50352C7.46342 1.24132 7.35825 0.990509 7.17285 0.805101C6.98744 0.619692 6.73663 0.514523 6.47443 0.512245C6.21223 0.509966 5.95963 0.610761 5.77103 0.792919L1.18903 5.37892C0.626616 5.9415 0.310669 6.70443 0.310669 7.49992C0.310669 8.29541 0.626616 9.05834 1.18903 9.62092L5.77503 14.2069C5.96363 14.3891 6.21623 14.4899 6.47843 14.4876C6.74063 14.4853 6.99144 14.3801 7.17685 14.1947C7.36226 14.0093 7.46742 13.7585 7.4697 13.4963C7.47198 13.2341 7.37119 12.9815 7.18903 12.7929L2.60003 8.20692Z"
              fill="#161616"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={{ fontFamily: fontFamilies.bold }} className="text-lg">
          News
        </Text>
        <View></View>
      </View>
      <View className="mb-14">
        <SearchBar placeholder="Search Posts" href="" />
      </View>
      <View className="w-full">
        <View className="mb-7 w-full">
          <Skeleton
            width={"100%"}
            height={156}
            radius={8}
            show={isLoading}
            {...SkeletonCommonProps}
          >
            <View className="flex flex-col gap-8">
              {posts &&
                posts
                  .slice(0, 5)
                  .map((post) => <PostCard key={post.id} post={post} />)}
            </View>
          </Skeleton>
        </View>
      </View>
    </ScrollView>
  );
}
