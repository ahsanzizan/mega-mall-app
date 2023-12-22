import React from "react";
import { View, Text, Image } from "react-native";
import { Post } from "../types/post.type";
import { fontFamilies } from "../styles/base";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <View className="mb-8 flex w-full flex-row items-start justify-between pl-8 pr-3">
      <View style={{ maxWidth: 225 }} className="flex flex-col gap-3">
        <Text className="text-sm" style={{ fontFamily: fontFamilies.medium }}>
          {post.title}
        </Text>
        <Text className="text-xs" style={{ fontFamily: fontFamilies.regular }}>
          {post.body.substring(0, 35) + "..."}
        </Text>
        <Text className="text-xs text-neutral">13 Jan 2021</Text>
      </View>
      <Image
        source={require("../assets/images/post-cover.png")}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
}
