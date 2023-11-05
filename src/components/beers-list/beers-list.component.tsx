import BeersItem from '../beers-item/beers-item.component';

import { BeersListProps } from './beers-list.types';

import './beers-list.styles.scss';

const BeersList = (props: BeersListProps) => {
  const { beers, isLoading } = props;

  return (
    <div className="beersListContainer">
      {isLoading ? (
        <p className="beersListLoading">Loading beers...</p>
      ) : (
        beers.map((beer) => <BeersItem key={beer.id} beer={beer} />)
      )}
    </div>
  );
};

export default BeersList;
