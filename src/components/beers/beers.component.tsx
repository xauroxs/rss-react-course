import { useEffect, useState } from 'react';

import Search from '../search/search.component';
import BeersList from '../beers-list/beers-list.component';
import BuggyButton from '../buggy-button/buggy-button.component';

import { LocalStorage } from '../../constants/local-storage.constants';

import {
  getAllBeers,
  getBeersWithParams,
} from '../../punk-api/utils/beers.utils';
import { BeersResponse } from '../../punk-api/types/punk-api.types';

const Beers = () => {
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
      if (searchTerm === '') {
        getAllBeers()
          .then((response) => setSearchResult(response))
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        getBeersWithParams({ beerName: searchTerm })
          .then((response) => {
            setSearchResult(response);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
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

export default Beers;
