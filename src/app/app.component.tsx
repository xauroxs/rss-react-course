import { Component, ReactNode } from 'react';

import Search from '../components/search/search.component';
import PlanetsList from '../components/planets-list/planets-list.component';
import BuggyButton from '../components/buggy-button/buggy-button.component';

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
    isLoading: true,
    searchTerm: localStorage.getItem(LocalStorage.SearchTerm) || '',
    searchResult: {} as PlanetsResponse,
  };

  async componentDidMount() {
    const planetsResponse = await searchPlanets(this.state.searchTerm);

    this.setState({ searchResult: planetsResponse, isLoading: false });
  }

  async componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<AppState>
  ) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({ isLoading: true }, async () => {
        const planetsResponse = await searchPlanets(this.state.searchTerm);

        this.setState({ searchResult: planetsResponse });
      });
    }

    if (this.state.searchResult !== prevState.searchResult) {
      this.setState({ isLoading: false });
    }
  }

  handleSearch(searchTerm: string) {
    const newSearchTerm = searchTerm.trim();

    localStorage.setItem(LocalStorage.SearchTerm, newSearchTerm);

    this.setState({ searchTerm: newSearchTerm });
  }

  render(): ReactNode {
    return (
      <div>
        <BuggyButton />
        <div>
          <Search handleSearch={this.handleSearch} />
        </div>
        <div>
          <PlanetsList
            planets={this.state.searchResult.results}
            isLoading={this.state.isLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;
