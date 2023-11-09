import { router } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

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
      <TouchableOpacity
        onPress={() => {
          router.push("/home");
        }}
        className="flex flex-col items-center gap-2"
      >
        <Svg
          width="22"
          height="22"
          viewBox="0 0 21 20"
          fill={`${isInHome ? "#3669C9" : "#000"}`}
        >
          <Path d="M5.26919 3.5518C7.71378 1.77571 8.93607 0.887664 10.332 0.836455C10.444 0.832347 10.5561 0.832347 10.668 0.836455C12.0639 0.887664 13.2862 1.77571 15.7308 3.5518C18.1754 5.32789 19.3977 6.21594 19.8778 7.52771C19.9163 7.63294 19.9509 7.73954 19.9816 7.84731C20.3643 9.19073 19.8974 10.6276 18.9636 13.5014L17.386 18.3568C17.1354 19.1282 16.4164 19.6506 15.6052 19.6506C14.5711 19.6506 13.7328 18.8123 13.7328 17.7782V15.2583C13.7328 14.288 12.9462 13.5014 11.9759 13.5014H9.0241C8.05378 13.5014 7.26719 14.288 7.26719 15.2583V17.7782C7.26719 18.8123 6.42887 19.6506 5.39476 19.6506C4.58358 19.6506 3.86465 19.1283 3.61398 18.3568L2.03638 13.5014C1.10263 10.6276 0.635755 9.19073 1.01841 7.84731C1.04911 7.73954 1.08375 7.63294 1.12226 7.52771C1.60232 6.21594 2.82461 5.32789 5.26919 3.5518Z" />
        </Svg>
        <Text
          className={`${
            isInHome ? "text-[#3669C9]" : "text-black"
          } text-xs font-semibold`}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/wishlist");
        }}
        className="flex flex-col items-center gap-2"
      >
        
        <Text
          className={`${
            isInHome ? "text-[#3669C9]" : "text-black"
          } text-xs font-semibold`}
        >
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}
