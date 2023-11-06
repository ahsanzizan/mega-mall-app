import { Product } from "../../types/product.types";

export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const products: Product[] = res.products;
  return products;
}
