import { Route, Routes } from 'react-router-dom';

import Beers from '../components/beers/beers.component';

import './app.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Beers />} />
      </Route>
    </Routes>
  );
};

export default App;
