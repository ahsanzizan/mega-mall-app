import { Product } from "../../types/product.type";

export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const products: Product[] = res.products;
  return products;
}

export async function getAllCategories() {
  const res = await fetch("https://dummyjson.com/products/categories").then(
    (res) => res.json()
  );

  const categories: string[] = res;
  return categories;
}
