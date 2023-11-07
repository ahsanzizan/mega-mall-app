import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import type { Product } from "../../types/product.type";
import { getProductById } from "../../lib/queries/product.queries";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function ViewProduct() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const init = async () => {
      try {
        const product = await getProductById(Number(id));
        setProduct(product);
      } catch (error) {
        return false;
      }
      return true;
    };

    init();
  }, []);

  return (
    <ScrollView className="px-6 py-10">
      
    </ScrollView>
  );
}
