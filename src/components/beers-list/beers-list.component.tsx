import { useContext } from 'react';

import { BeersContext } from '../../contexts/beers.context';

import BeersItem from '../beers-item/beers-item.component';
import Pagination from '../pagination/pagination.component';

import { BeersListProps } from './beers-list.types';

import './beers-list.styles.scss';

const BeersList = (props: BeersListProps) => {
  const { isLoading, page, handlePage, handleItemsPerPage } = props;

  const { beers } = useContext(BeersContext);

  return (
    <div className="beersListContainer">
      {isLoading ? (
        <p className="beersListLoading">Loading beers...</p>
      ) : (
        <>
          <Pagination
            page={page}
            handlePage={handlePage}
            handleItemsPerPage={handleItemsPerPage}
          />
          {beers.length > 0 ? (
            beers.map((beer) => <BeersItem key={beer.id} beer={beer} />)
          ) : (
            <p>No items!</p>
          )}
        </>
      )}
    </div>
  );
};

export default BeersList;
