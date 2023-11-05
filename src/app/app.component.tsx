import { useEffect, useState } from 'react';

import Search from '../components/search/search.component';
import PlanetsList from '../components/planets-list/planets-list.component';
import BuggyButton from '../components/buggy-button/buggy-button.component';

import { PlanetsResponse } from '../star-wars-api/types/star-wars-api.types';

import { searchPlanets } from '../star-wars-api/utils/planets.utils';

import { LocalStorage } from '../constants/local-storage.constants';

import './app.styles.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );
  const [searchResult, setSearchResult] = useState({} as PlanetsResponse);

  useEffect(() => {
    setIsLoading(true);
  }, [searchTerm]);

  useEffect(() => {
    if (isLoading) {
      searchPlanets(searchTerm).then((response) => {
        setSearchResult(response);
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
      <div>
        <Search handleSearch={handleSearch} />
      </div>
      <div>
        <PlanetsList planets={searchResult.results} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
