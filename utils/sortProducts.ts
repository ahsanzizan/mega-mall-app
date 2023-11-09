import { Product } from "../types/product.type";

const define = {
  topRated: 4.5,
  specialOffers: 40,
};

export function getTopRatedProducts(products: Product[]) {
  return products.filter((product) => product.rating > define.topRated);
}

export function getSpecilOffersProducts(products: Product[]) {
  return products.filter(
    (product) =>
      product.discountPercentage &&
      product.discountPercentage > define.specialOffers
  );
}
