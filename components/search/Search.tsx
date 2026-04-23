"use client";

import { useSearch } from "../../context/SearchContext";

import { searchProducts } from "@/lib/searchProducts";


import ProductCard from "../product/ProductCard";

import Link from "next/link";

const Search = () => {
  const { searchItem } = useSearch();

  const filtered = searchProducts(searchItem);

  if (!searchItem.trim()) return null;

  return (
    <div className="w-full">
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((prod) => (
            <Link href={`/${prod.category}/${prod.id}`} key={prod.id}>
              <ProductCard {...prod} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No matching products found
        </p>
      )}
    </div>
  );
};

export default Search;
