import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuestionnairePage from './pages/QuestionnairePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;