import { Component, ReactNode } from 'react';

import { PlanetsItemProps } from './planets-item.types';

class PlanetsItem extends Component<PlanetsItemProps> {
  render(): ReactNode {
    const {
      name,
      rotation_period,
      orbital_period,
      diameter,
      population,
      climate,
      terrain,
    } = this.props.planet;

    return (
      <div>
        <h2>Planet: {name}</h2>
        <p>Diameter: {diameter}</p>
        <p>Rotation period: {rotation_period}</p>
        <p>Orbital period: {orbital_period}</p>
        <p>Climate: {climate}</p>
        <p>Terrain: {terrain}</p>
        <p>Population: {population}</p>
      </div>
    );
  }
}

export default PlanetsItem;
