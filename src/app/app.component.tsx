import { Component, ReactNode } from 'react';

import Search from '../components/search/search.component';

import { AppProps, AppState } from './app.types';
import { PlanetsResponse } from '../star-wars-api/types/star-wars-api.types';

import './app.styles.scss';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  state: Readonly<AppState> = {
    searchTerm: '',
    searchResult: {} as PlanetsResponse,
  };

  handleSearch(searchTerm: string) {
    this.setState({ searchTerm });
  }

  render(): ReactNode {
    return (
      <div>
        <div>
          <Search handleSearch={this.handleSearch} />
        </div>
      </div>
    );
  }
}

export default App;
