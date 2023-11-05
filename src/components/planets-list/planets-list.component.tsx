import PlanetsItem from '../planets-item/planets-item.component';

import { PlanetsListProps } from './planets-list.types';

import './planets-list.styles.scss';

const PlanetsList = (props: PlanetsListProps) => {
  return (
    <div className="planetsListContainer">
      {props.isLoading ? (
        <p className="planetsListLoader">Loading planets...</p>
      ) : (
        props.planets &&
        props.planets.map((planet) => {
          return <PlanetsItem key={planet.name} planet={planet} />;
        })
      )}
    </div>
  );
};

export default PlanetsList;
