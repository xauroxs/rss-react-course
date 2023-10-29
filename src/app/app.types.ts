import { PlanetsResponse } from '../star-wars-api/types/star-wars-api.types';

export type AppProps = Record<string, never>;

export type AppState = {
  searchTerm: string;
  searchResult: PlanetsResponse;
};
