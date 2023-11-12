export type BeersListProps = {
  isLoading: boolean;
  page: string;
  handlePage: (page: string) => void;
  handleItemsPerPage: (itemsPerPage: string) => void;
};
