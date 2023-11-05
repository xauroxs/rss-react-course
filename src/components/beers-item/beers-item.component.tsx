import { BeersItemProps } from './beers-item.types';

import './beers-item.styles.scss';

const BeersItem = (props: BeersItemProps) => {
  const { name, tagline, image_url, abv } = props.beer;

  return (
    <div className="beersItemContainer">
      <div className="beersItemImage">
        <img src={image_url} alt={`${name} image`} />
      </div>
      <div className="beersItemInfo">
        <h2>{name}</h2>
        <p>Tagline: {tagline}</p>
        <p>ABV: {abv}</p>
      </div>
    </div>
  );
};

export default BeersItem;
