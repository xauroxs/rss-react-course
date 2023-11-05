import { Beer } from '../../punk-api/types/punk-api.types';

export type BeersListProps = {
  beers: Beer[];
  isLoading: boolean;
};
