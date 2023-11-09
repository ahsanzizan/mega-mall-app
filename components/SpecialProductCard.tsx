import { View, Image, Text, TouchableOpacity } from "react-native";
import type { ImageSourcePropType } from "react-native";
import Svg, { Path } from "react-native-svg";
import { fontFamilies } from "../styles/base";

interface SpecialProductCardProps {
  title: string;
  imageUri: ImageSourcePropType;
  backgroundColor: string;
}

export default function SpecialProductCard({
  title,
  imageUri,
  backgroundColor,
}: SpecialProductCardProps) {
  return (
    <View
      style={{ backgroundColor: `${backgroundColor}`, borderRadius: 10 }}
      className="px-6 py-5 flex flex-row justify-between mb-7 items-center"
    >
      <View>
        <Text
          className="mb-3 text-xl text-white"
          style={{ fontFamily: fontFamilies.bold }}
        >
          {title}
        </Text>
        <TouchableOpacity className="flex flex-row gap-3 items-center">
          <Text
            className="text-sm text-neutral"
            style={{ fontFamily: fontFamilies.bold }}
          >
            Shop now
          </Text>
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path
              d="M4.1665 10H15.8332"
              stroke="white"
              strokeWidth="1.4375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10 4.16663L15.8333 9.99996L10 15.8333"
              stroke="white"
              strokeWidth="1.4375"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <Image source={imageUri} style={{ width: 118, height: 135 }} />
    </View>
  );
}
