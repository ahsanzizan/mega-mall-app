import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ViewProduct() {
  const { id } = useLocalSearchParams();
  return <Text>{id}</Text>;
}
