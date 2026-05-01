import { cosmeticsProducts } from "./cosmetics";
import { fragranceProducts } from "./fragrance";
import { skinProducts } from "./skin";

export const allProducts = [
  ...cosmeticsProducts,
  ...skinProducts,
  ...fragranceProducts,
];
