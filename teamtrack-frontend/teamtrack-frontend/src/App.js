import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import PlayerList from './components/players/PlayerList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route racine avec le layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<PlayerList />} />
          <Route path="/players" element={<PlayerList />} />
          {/* Ajoutez vos autres routes ici */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;