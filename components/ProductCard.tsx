import { Image, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { Product } from "../types/product.type";
import { TouchableOpacity } from "react-native";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View
      className="mb-8 p-3"
      style={{
        width: 156,
      }}
    >
      <Image
        source={{ uri: product.thumbnail }}
        style={{
          height: 125,
          borderWidth: 1,
          borderColor: "#C4C5C4",
        }}
        className="mb-6 rounded-lg w-full"
      />
      <View>
        <Text className="font-medium text-[#0C1A30] mb-1">{product.title}</Text>
        <Text className="text-[#FE3A30] text-xs font-medium mb-2">
          ${product.price}.00
        </Text>
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-2">
            <View className="flex flex-row items-center" style={{ gap: 3 }}>
              <Svg width="11" height="11" viewBox="0 0 11 10" fill="none">
                <Path
                  d="M5.49984 0.416626L6.91609 3.28579L10.0832 3.74871L7.7915 5.98079L8.33234 9.13413L5.49984 7.64454L2.66734 9.13413L3.20817 5.98079L0.916504 3.74871L4.08359 3.28579L5.49984 0.416626Z"
                  fill="#FFC120"
                />
              </Svg>
              <Text
                className="text-[#0C1A30] font-medium"
                style={{ fontSize: 10 }}
              >
                {product.rating}
              </Text>
            </View>
            <Text
              className="text-[#0C1A30] font-medium"
              style={{ fontSize: 10 }}
            >
              {product.stock} Stocks
            </Text>
          </View>
          <TouchableOpacity>
            <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99992 2.33333C7.64425 2.33333 8.16658 1.811 8.16658 1.16667C8.16658 0.522334 7.64425 0 6.99992 0C6.35559 0 5.83325 0.522334 5.83325 1.16667C5.83325 1.811 6.35559 2.33333 6.99992 2.33333ZM6.99992 8.16667C7.64425 8.16667 8.16658 7.64433 8.16658 7C8.16658 6.35567 7.64425 5.83333 6.99992 5.83333C6.35559 5.83333 5.83325 6.35567 5.83325 7C5.83325 7.64433 6.35559 8.16667 6.99992 8.16667ZM8.16658 12.8333C8.16658 13.4777 7.64425 14 6.99992 14C6.35559 14 5.83325 13.4777 5.83325 12.8333C5.83325 12.189 6.35559 11.6667 6.99992 11.6667C7.64425 11.6667 8.16658 12.189 8.16658 12.8333Z"
                fill="#838589"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
