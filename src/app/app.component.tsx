import { Component, ReactNode } from 'react';

import Search from '../components/search/search.component';
import PlanetsList from '../components/planets-list/planets-list.component';

import { AppProps, AppState } from './app.types';
import { PlanetsResponse } from '../star-wars-api/types/star-wars-api.types';
import { searchPlanets } from '../star-wars-api/utils/planets.utils';

import { LocalStorage } from '../constants/local-storage.constants';

import './app.styles.scss';

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  state: Readonly<AppState> = {
    searchTerm: localStorage.getItem(LocalStorage.SearchTerm) || '',
    searchResult: {} as PlanetsResponse,
  };

  async componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>
  ) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      const planetsResponse = await searchPlanets(this.state.searchTerm);

      this.setState({ searchResult: planetsResponse });
    }
  }

  handleSearch(searchTerm: string) {
    localStorage.setItem(LocalStorage.SearchTerm, searchTerm);

    this.setState({ searchTerm });
  }

  render(): ReactNode {
    return (
      <div>
        <div>
          <Search handleSearch={this.handleSearch} />
        </div>
        <div>
          <PlanetsList planets={this.state.searchResult.results} />
        </div>
      </div>
    );
  }
}

export default App;
