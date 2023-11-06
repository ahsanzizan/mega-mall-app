import { Text, View } from "react-native";
import { getAllProducts } from "../lib/queries/product.queries";
import { useState, useEffect } from "react";
import { Product } from "../types/product.types";

export default function RootPage() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res);
      } catch (error) {
        return false;
      }
      return true;
    };

    init();
  }, []);

  return (
    <View>
        {products && products.map(product => {
            return (
                <View>
                    <Text></Text>
                </View>
            )
        })}
    </View>
  );
}
