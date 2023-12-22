import { Image, Text, View } from "react-native";
import { fontFamilies } from "../styles/base";

export default function MarketingCard() {
  return (
    <View
      className="relative mb-7 flex w-full flex-row justify-between"
      style={{ borderRadius: 10 }}
    >
      <View
        className="bg-primary py-8 pl-6 pr-12"
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Text
          className="mb-2 text-xl font-bold text-white"
          style={{ fontFamily: fontFamilies.bold }}
        >
          Gratis Ongkir{"\n"}Selama PPKM!
        </Text>
        <Text
          className="text-white"
          style={{ fontSize: 10, fontFamily: fontFamilies.regular }}
        >
          Periode Mei - Agustus 2020
        </Text>
      </View>
      <Image
        source={require("../assets/images/cover.png")}
        className="absolute right-0 -z-10 h-full w-[65%]"
        style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
      />
    </View>
  );
}
