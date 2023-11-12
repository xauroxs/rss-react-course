import { ReactNode, createContext, useState } from 'react';

import { BeersResponse } from '../punk-api/types/punk-api.types';

type BeersContextType = {
  beers: BeersResponse;
  setBeers: React.Dispatch<React.SetStateAction<BeersResponse>>;
};

export const BeersContext = createContext({} as BeersContextType);

export const BeersProvider = ({ children }: { children: ReactNode }) => {
  const [beers, setBeers] = useState<BeersResponse>([]);

  const value = {
    beers,
    setBeers,
  };

  return (
    <BeersContext.Provider value={value}>{children}</BeersContext.Provider>
  );
};
