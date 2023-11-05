import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Search from '../search/search.component';
import BeersList from '../beers-list/beers-list.component';
import BuggyButton from '../buggy-button/buggy-button.component';

import { LocalStorage } from '../../constants/local-storage.constants';

import {
  getAllBeers,
  getBeersWithParams,
} from '../../punk-api/utils/beers.utils';
import { BeersResponse } from '../../punk-api/types/punk-api.types';

import './beers.styles.scss';

const Beers = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );
  const [searchResult, setSearchResult] = useState<BeersResponse>([]);
  const [page, setPage] = useState(searchParams.get('page') || '1');
  const [itemsPerPage, setItemsPerPage] = useState(
    searchParams.get('perPage') || '20'
  );
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [page, searchParams, setSearchParams]);

  useEffect(() => {
    searchParams.set('perPage', itemsPerPage);
    setSearchParams(searchParams);
  }, [itemsPerPage, searchParams, setSearchParams]);

  useEffect(() => {
    setIsLoading(true);
  }, [searchTerm, page, itemsPerPage]);

  useEffect(() => {
    if (isLoading) {
      if (searchTerm === '') {
        getAllBeers()
          .then((response) => setSearchResult(response))
          .catch((error) => {
            setError(error);
            setSearchResult([]);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        getBeersWithParams({
          beerName: searchTerm,
          page,
          perPage: itemsPerPage,
        })
          .then((response) => {
            setSearchResult(response);
          })
          .catch((error) => {
            setError(error);
            setSearchResult([]);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [isLoading, searchTerm, page, itemsPerPage]);

  const handleSearch = (searchTerm: string) => {
    const newSearchTerm = searchTerm.trim();

    localStorage.setItem(LocalStorage.SearchTerm, newSearchTerm);

    setSearchTerm(newSearchTerm);
  };

  const handleItemsPerPageChange = (itemsPerPage: string) => {
    setItemsPerPage(itemsPerPage);
    setPage('1');
  };

  const handlePageChange = (page: string) => {
    setPage(page);
  };

  const handleFix = () => {
    setPage('1');
    setSearchTerm('');
    setSearchResult([]);
    setIsLoading(false);
    setItemsPerPage('20');

    searchParams.set('page', '1');
    searchParams.set('perPage', '20');

    setSearchParams(searchParams);

    setError(null);
  };

  return (
    <div>
      {error ? (
        <div className="beersError">
          <p>Oops! An error!</p>
          <p>{error.message}</p>
          <button onClick={handleFix}>Fix it!</button>
        </div>
      ) : (
        <>
          <BuggyButton />
          <Search handleSearch={handleSearch} />
          <BeersList
            beers={searchResult}
            isLoading={isLoading}
            page={page}
            handlePage={handlePageChange}
            handleItemsPerPage={handleItemsPerPageChange}
          />
        </>
      )}
    </div>
  );
};

export default Beers;
