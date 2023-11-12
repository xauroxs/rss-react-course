import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app.component';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { SearchProvider } from './contexts/search.context';
import { BeersProvider } from './contexts/beers.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <SearchProvider>
          <BeersProvider>
            <App />
          </BeersProvider>
        </SearchProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
