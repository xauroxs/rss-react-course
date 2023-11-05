import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Beer } from '../../punk-api/types/punk-api.types';

import { getBeerById } from '../../punk-api/utils/beers.utils';

import './panel.styles.scss';

const Panel = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [beer, setBeer] = useState<Beer>({} as Beer);

  useEffect(() => {
    if (isLoading) {
      getBeerById(searchParams.get('id') || '')
        .then((response) => {
          console.log(response[0]);
          setBeer(response[0]);
        })
        .catch(() => {
          setBeer({} as Beer);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading, searchParams]);

  const handleClose = () => {
    searchParams.delete('id');
    setSearchParams(searchParams);

    navigate('/beers');
  };

  const { name, tagline, abv, description, image_url } = beer;

  return (
    <>
      <div className="panelBackground" onClick={handleClose}></div>
      <div className="panelContainer">
        <div>
          <button onClick={handleClose}>Close</button>
          <div>
            <img src={image_url} alt={`${name} image`} />
          </div>
          <div>
            <h2>{name}</h2>
            <p>Tagline: {tagline}</p>
            <p>ABV: {abv}</p>
            <p>Description: {description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
