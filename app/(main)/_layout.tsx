import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainLayout() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        margin: "auto",
        backgroundColor: '#F8F8F8'
      }}
    >
        <Slot />
    </SafeAreaView>
  );
}
