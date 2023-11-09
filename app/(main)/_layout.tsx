import { Slot, usePathname } from "expo-router";
import { SafeAreaView, View } from "react-native";
import BottomBar from "../../components/BottomBar";

export default function MainLayout() {
  const pathname = usePathname();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        margin: "auto",
        backgroundColor: "#F8F8F8",
      }}
    >
      <Slot />
      <View>
        <BottomBar currentPath={pathname.replace("/", " ")} />
      </View>
    </SafeAreaView>
  );
}
