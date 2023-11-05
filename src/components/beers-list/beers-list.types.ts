import { Beer } from '../../punk-api/types/punk-api.types';

export type BeersListProps = {
  beers: Beer[];
  isLoading: boolean;
  page: string;
  handlePage: (page: string) => void;
  handleItemsPerPage: (itemsPerPage: string) => void;
};
