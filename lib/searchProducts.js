import { allProducts } from "@/data/products";

export const searchProducts = (query) => {
  const Q = query.toLowerCase().trim();

  if (!Q) return [];

  return allProducts.filter((p) => {
    const title = p.title.toLowerCase();
    const category = p.category.toLowerCase();
    const desc = p.desc.toLowerCase();

    return title.includes(Q) || category.includes(Q) || desc.includes(Q);
  });
};
