import { Product } from "../../types/product.type";

export async function getAllProducts() {
  const res = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const products: Product[] = res.products;
  return products;
}

export async function getAllCategories() {
  const res: string[] = await fetch(
    "https://dummyjson.com/products/categories"
  ).then((res) => res.json());

  return res;
}

export async function getProductsByCategory(category: string) {
  const res = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  const allProducts: Product[] = res.products;
  const productsByCategory = allProducts.filter(
    (product) => product.category === category
  );
  return productsByCategory;
}
