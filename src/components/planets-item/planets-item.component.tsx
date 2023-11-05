import { PlanetsItemProps } from './planets-item.types';

import './planets-item.styles.scss';

const PlanetsItem = (props: PlanetsItemProps) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    population,
    climate,
    terrain,
  } = props.planet;

  return (
    <div className="planetsItemContainer">
      <h2>Planet: {name}</h2>
      <p>Diameter: {diameter}</p>
      <p>Rotation period: {rotation_period}</p>
      <p>Orbital period: {orbital_period}</p>
      <p>Climate: {climate}</p>
      <p>Terrain: {terrain}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default PlanetsItem;
