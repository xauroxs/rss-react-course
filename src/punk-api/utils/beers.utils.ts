import { BeerParams } from '../types/punk-api-params.types';
import { BeersResponse } from '../types/punk-api.types';

export const getAllBeers = async (): Promise<BeersResponse> => {
  const url = 'https://api.punkapi.com/v2/beers';

  const response = await fetch(url);
  const beersResponse: BeersResponse = await response.json();

  return beersResponse;
};

export const getBeersWithParams = async (params: BeerParams) => {
  const { beerName, page, perPage } = params;

  const url = `https://api.punkapi.com/v2/beers?beer_name=${
    beerName || ''
  }&page=${page || 1}&per_page=${perPage || 25}`;

  const response = await fetch(url);
  const beersResponse: BeersResponse = await response.json();

  return beersResponse;
};
