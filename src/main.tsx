import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/app.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
