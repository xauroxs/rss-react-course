import { useEffect, useState } from 'react';

import Search from '../components/search/search.component';
import BuggyButton from '../components/buggy-button/buggy-button.component';
import BeersList from '../components/beers-list/beers-list.component';

import { LocalStorage } from '../constants/local-storage.constants';

import { getBeersWithParams } from '../punk-api/utils/beers.utils';
import { BeersResponse } from '../punk-api/types/punk-api.types';

import './app.styles.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );
  const [searchResult, setSearchResult] = useState<BeersResponse>([]);

  useEffect(() => {
    setIsLoading(true);
  }, [searchTerm]);

  useEffect(() => {
    if (isLoading) {
      getBeersWithParams({ beerName: searchTerm })
        .then((response) => {
          setSearchResult(response);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading, searchTerm]);

  const handleSearch = (searchTerm: string) => {
    const newSearchTerm = searchTerm.trim();

    localStorage.setItem(LocalStorage.SearchTerm, newSearchTerm);

    setSearchTerm(newSearchTerm);
  };

  return (
    <div>
      <BuggyButton />
      <Search handleSearch={handleSearch} />
      <BeersList beers={searchResult} isLoading={isLoading} />
    </div>
  );
};

export default App;
