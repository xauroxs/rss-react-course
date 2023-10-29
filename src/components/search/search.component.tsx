import { Component, FormEvent, ReactNode } from 'react';

import { SearchProps, SearchState } from './search.types';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state: Readonly<SearchState> = {
    searchTerm: '',
  };

  handleChange(e: FormEvent<HTMLInputElement>) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleClick() {
    this.props.handleSearch(this.state.searchTerm);

    this.setState({ searchTerm: '' });
  }

  render(): ReactNode {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

export default Search;
