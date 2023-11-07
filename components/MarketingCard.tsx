import { Image, Text, View } from "react-native";
import { fontFamilies } from "../styles/base";

export default function MarketingCard() {
  return (
    <View
      className="w-full mb-7 flex flex-row justify-between relative"
      style={{ borderRadius: 10 }}
    >
      <View
        className="bg-[#3669C9] py-8 pl-6 pr-12"
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Text
          className="text-white font-bold text-xl mb-2"
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
        className="absolute right-0 -z-10 h-full"
        style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
      />
    </View>
  );
}
