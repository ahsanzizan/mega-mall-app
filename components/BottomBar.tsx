import { router } from "expo-router";
import { View, TouchableOpacity, Text, Image } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import { fontFamilies } from "../styles/base";

interface BottomBarProps {
  currentPath: string;
}

export default function BottomBar({ currentPath }: BottomBarProps) {
  const isInHome =
    !currentPath.includes("wishlist") &&
    !currentPath.includes("order") &&
    !currentPath.includes("account");

  return (
    <View
      style={{ minWidth: 360 }}
      className="bg-white px-6 py-3 block fixed inset-x-0 bottom-0 z-10"
    >
      <View className="flex flex-row justify-between px-2">
        <TouchableOpacity
          onPress={() => {
            router.push("/home");
          }}
          className="flex flex-col items-center gap-2"
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect x="8" width="16" height="16" rx="8" fill="#EFF5FB" />
            <Path
              d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
              stroke={`${isInHome ? "#3669C9" : "#000"}`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text
            className={`${
              isInHome ? "text-[#3669C9]" : "text-black"
            } text-xs font-semibold`}
            style={{fontFamily: fontFamilies.medium}}
          >
            HOME
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/wishlist");
          }}
          className="flex flex-col items-center gap-2"
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.48311 2.81529C2.81152 3.99738 1.17386 8.00569 2.40482 11.8295C3.02947 13.6301 4.04534 15.2485 5.38004 16.5762C7.21101 18.3545 9.22254 19.9194 11.3849 21.2491L11.6304 21.3961C11.8656 21.5369 12.1598 21.5344 12.3926 21.3897L12.6218 21.2473C14.7812 19.9194 16.7927 18.3545 18.6174 16.5824C19.9584 15.2485 20.9743 13.6301 21.5937 11.8452C22.8291 8.00801 21.1847 3.9978 17.512 2.81535L17.2463 2.73623C15.5624 2.27309 13.773 2.5013 12.2645 3.35535L11.9964 3.51429L11.733 3.35623C10.1419 2.45344 8.2404 2.25003 6.48311 2.81529ZM11.3746 4.85427L11.5714 4.99538C11.8307 5.18111 12.1806 5.17742 12.436 4.98625C13.766 3.99057 15.4873 3.70082 17.0641 4.20669C19.9097 5.12284 21.2047 8.28096 20.2064 11.382C19.665 12.9417 18.7687 14.3696 17.5916 15.5405L17.0636 16.0421C15.641 17.3642 14.1026 18.561 12.4691 19.6156L12.0013 19.9098L12.144 19.9998C10.0805 18.7308 8.15375 17.2319 6.40582 15.5343C5.23505 14.3696 4.33877 12.9417 3.79207 11.3664C2.79808 8.27801 4.08746 5.12212 6.93153 4.20646C8.43331 3.72339 10.0706 3.96289 11.3746 4.85427ZM15.8703 6.48374C15.4855 6.36093 15.0739 6.57304 14.951 6.95749C14.8281 7.34194 15.0404 7.75316 15.4252 7.87597C16.1814 8.11735 16.7206 8.79803 16.7881 9.60096C16.822 10.0031 17.1757 10.3017 17.5782 10.2679C17.9807 10.2341 18.2796 9.8807 18.2457 9.47853C18.1288 8.08859 17.1917 6.90551 15.8703 6.48374Z"
              fill={`${currentPath.includes("/wishlist") ? "#3669C9" : "#000"}`}
            />
          </Svg>

          <Text
            className={`${
              currentPath.includes("/wishlist")
                ? "text-[#3669C9]"
                : "text-black"
            } text-xs font-semibold`}
            style={{fontFamily: fontFamilies.medium}}
          >
            WISHLIST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/order");
          }}
          className="flex flex-col items-center gap-2"
        >
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.8801 6.38192C16.6229 3.91976 14.531 2.00004 11.9885 2.00004C10.6836 1.99458 9.42727 2.50773 8.50043 3.42606C7.6959 4.2232 7.19715 5.26864 7.07952 6.38192H7.07864C5.29724 6.38192 3.80058 7.68308 3.38011 9.94232L2.61922 15.8123C1.97155 20.1105 3.99286 22 7.94875 22H16.046C19.7043 22 21.8909 19.8703 21.4419 16.0482L20.6564 9.98167C20.1528 7.69432 18.6947 6.38192 16.9516 6.38192H16.8801ZM15.4138 6.38192C15.1653 4.7215 13.7261 3.44777 11.9855 3.44777C11.0644 3.44391 10.1797 3.80526 9.52708 4.45192C8.99719 4.97695 8.65567 5.65494 8.54594 6.38192H15.4138ZM7.07864 7.82965H16.9516C17.9739 7.82965 18.8719 8.63792 19.2244 10.2299L19.968 15.9973C20.4105 19.0657 18.9375 20.5522 16.046 20.5522H7.94875C4.81775 20.5522 3.55418 19.3711 4.06021 16.0121L4.81697 10.1666C5.10614 8.61886 6.01393 7.82965 7.07864 7.82965ZM14.8652 10.5164C15.267 10.5164 15.5927 10.8405 15.5927 11.2403C15.5927 11.6067 15.319 11.9096 14.9639 11.9575L14.8652 11.9641H14.8208C14.419 11.9641 14.0933 11.64 14.0933 11.2403C14.0933 10.8738 14.367 10.5709 14.7221 10.523L14.8208 10.5164H14.8652ZM9.937 11.2403C9.937 10.8405 9.61129 10.5164 9.20951 10.5164H9.16512L9.0664 10.523C8.71131 10.5709 8.43762 10.8738 8.43762 11.2403C8.43762 11.64 8.76333 11.9641 9.16512 11.9641H9.20951L9.30822 11.9575C9.66331 11.9096 9.937 11.6067 9.937 11.2403Z"
              fill={`${currentPath.includes("/order") ? "#3669C9" : "#000"}`}
            />
          </Svg>

          <Text
            className={`${
              currentPath.includes("/order") ? "text-[#3669C9]" : "text-black"
            } text-xs font-semibold`}
            style={{fontFamily: fontFamilies.medium}}
          >
            ORDER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/account");
          }}
          className="flex flex-col items-center gap-2"
        >
          <Image
            source={require("../assets/images/profile.jpg")}
            width={24}
            height={24}
            className="w-6 h-6 rounded-full"
          />

          <Text
            className={`${
              currentPath.includes("/account") ? "text-[#3669C9]" : "text-black"
            } text-xs font-semibold`}
            style={{fontFamily: fontFamilies.medium}}
          >
            ACCOUNT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
