import { Component, FormEvent, ReactNode } from 'react';

import { SearchProps, SearchState } from './search.types';

import { LocalStorage } from '../../constants/local-storage.constants';

import './search.styles.scss';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state: Readonly<SearchState> = {
    searchTerm: localStorage.getItem(LocalStorage.SearchTerm) || '',
  };

  handleChange(e: FormEvent<HTMLInputElement>) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleClick() {
    this.props.handleSearch(this.state.searchTerm);
  }

  render(): ReactNode {
    return (
      <div className="searchContainer">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          className="searchBar"
        />
        <button onClick={this.handleClick} className="searchButton">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
