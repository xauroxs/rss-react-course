import { ChangeEvent, useContext, useState } from 'react';

import { SearchContext } from '../../contexts/search.context';

import { LocalStorage } from '../../constants/local-storage.constants';

import './search.styles.scss';

const Search = () => {
  const { setSearchTerm } = useContext(SearchContext);

  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(LocalStorage.SearchTerm) || ''
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClick = () => {
    const newSearchTerm = searchValue.trim();

    localStorage.setItem(LocalStorage.SearchTerm, newSearchTerm);
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchValue}
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
