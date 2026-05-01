"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  searchItem: string;
  setSearchItem: (value: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
};
