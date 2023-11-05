import { Navigate, Route, Routes } from 'react-router-dom';

import Beers from '../components/beers/beers.component';
import Panel from '../components/panel/panel.component';

import './app.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="beers" element={<Beers />}>
          <Route path="details" element={<Panel />} />
        </Route>

        <Route path="" element={<Navigate to="beers" />} />
        <Route path="*" element={<Navigate to="beers" />} />
      </Route>
    </Routes>
  );
};

export default App;
