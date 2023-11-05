import { BeersItemProps } from './beers-item.types';

import './beers-item.styles.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

const BeersItem = (props: BeersItemProps) => {
  const { id, name, tagline, image_url, abv } = props.beer;

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleClick = () => {
    searchParams.set('id', id.toString());
    setSearchParams(searchParams);

    navigate(`/beers/details?id=${id}`);
  };

  return (
    <div className="beersItemContainer" onClick={handleClick}>
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
