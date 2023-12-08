import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Country from './pages/Country';
import AllCitizens from './pages/AllCitizens';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="country" element={<Country />} /> */}
          <Route path="country/:countryId" element={<Country />} />
          <Route path="all-citizens" element={<AllCitizens />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
