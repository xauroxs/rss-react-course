import { ReactNode, createContext, useState } from 'react';

import { LocalStorage } from '../constants/local-storage.constants';

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext({
  searchTerm: localStorage.getItem(LocalStorage.SearchTerm) || '',
} as SearchContextType);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );

  const value: SearchContextType = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
