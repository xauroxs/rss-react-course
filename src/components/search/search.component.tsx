import { ChangeEvent, useState } from 'react';

import { SearchProps } from './search.types';

import { LocalStorage } from '../../constants/local-storage.constants';

import './search.styles.scss';

const Search = (props: SearchProps) => {
  const { handleSearch } = props;

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="searchBar"
      />
      <button onClick={handleClick} className="searchButton">
        Search
      </button>
    </div>
  );
};

export default Search;
