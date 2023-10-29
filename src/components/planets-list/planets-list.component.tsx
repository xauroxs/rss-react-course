import { Component, ReactNode } from 'react';

import PlanetsItem from '../planets-item/planets-item.component';

import { PlanetsListProps } from './planets-list.types';

class PlanetsList extends Component<PlanetsListProps> {
  render(): ReactNode {
    return (
      <div>
        {this.props.isLoading ? (
          <p>Loading planets...</p>
        ) : (
          this.props.planets &&
          this.props.planets.map((planet) => {
            return <PlanetsItem key={planet.name} planet={planet} />;
          })
        )}
      </div>
    );
  }
}

export default PlanetsList;
