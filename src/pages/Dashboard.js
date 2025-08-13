import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Dashboard page showing the next event and leagues joined. This is a
 * static example for the MVP; real data can be fetched from a backend.
 */
function Dashboard() {
  // Sample upcoming event
  const event = {
    name: 'SummerSlam 2025',
    date: 'August 17, 2025',
    promotion: 'WWE',
    location: 'New York, NY',
    description:
      'The hottest event of the summer returns! Check out the match card and make your picks.',
  };

  // Sample leagues for the current user
  const leagues = [
    { id: 1, name: 'Friends League' },
    { id: 2, name: 'Work League' },
    { id: 3, name: 'Family League' },
  ];

  return (
    <div>
      {/* Upcoming Event */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Upcoming Event</h2>
        <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Promotion:</span> {event.promotion}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Date:</span> {event.date}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">Location:</span> {event.location}
        </p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <Link
          to="/predictions"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Make Predictions
        </Link>
      </div>

      {/* Leagues Joined */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Your Leagues</h2>
        <ul className="space-y-2">
          {leagues.map((league) => (
            <li
              key={league.id}
              className="flex justify-between items-center border p-3 rounded hover:bg-gray-50"
            >
              <span>{league.name}</span>
              <Link
                to="/leaderboard"
                className="text-blue-600 hover:underline text-sm"
              >
                View leaderboard
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/leagues"
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Create or Join League
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;