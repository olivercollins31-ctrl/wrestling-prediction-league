import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Predictions from './pages/Predictions';
import Leaderboard from './pages/Leaderboard';
import Leagues from './pages/Leagues';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation bar */}
        <nav className="bg-white shadow mb-6">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-gray-800">Pro Wrestling League</div>
            <div className="space-x-4">
              <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
              <Link to="/predictions" className="text-blue-600 hover:underline">Predictions</Link>
              <Link to="/leaderboard" className="text-blue-600 hover:underline">Leaderboard</Link>
              <Link to="/leagues" className="text-blue-600 hover:underline">Leagues</Link>
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </div>
          </div>
        </nav>
        {/* Main content */}
        <div className="container mx-auto px-4 pb-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;