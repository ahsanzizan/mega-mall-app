import { View, Text, TouchableOpacity } from "react-native";
import { fontFamilies } from "../styles/base";

interface SectionHeaderProps {
  title: string;
  seeAllHref: string;
}

export default function SectionHeader({
  title,
  seeAllHref,
}: SectionHeaderProps) {
  return (
    <View className="mb-5 flex flex-row justify-between">
      <Text className="text-base" style={{ fontFamily: fontFamilies.medium }}>
        {title}
      </Text>
      <TouchableOpacity>
        <Text
          className="text-primary"
          style={{ fontFamily: fontFamilies.regular }}
        >
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
}
