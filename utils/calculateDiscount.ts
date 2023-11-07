export function calcDiscountedPrice(
  amount: number,
  discountPercentage: number
): number {
  return Math.round(amount - amount * (discountPercentage / 100));
}
