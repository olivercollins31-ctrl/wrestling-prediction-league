import React, { useState, useEffect } from 'react';

/**
 * Leaderboard page. Displays a table of users and points. The data is
 * mocked here and refreshes every few seconds to emulate live updates.
 */
function Leaderboard() {
  // Initial mock scores
  const initialScores = [
    { id: 1, name: 'Olly', points: 12 },
    { id: 2, name: 'Alex', points: 10 },
    { id: 3, name: 'Jordan', points: 8 },
    { id: 4, name: 'Sam', points: 6 },
    { id: 5, name: 'Taylor', points: 4 },
  ];

  const [scores, setScores] = useState(initialScores);

  // Simulate live updates by randomly adding points to a random player
  useEffect(() => {
    const interval = setInterval(() => {
      setScores((prev) => {
        const updated = prev.map((entry) => ({ ...entry }));
        // pick random index
        const idx = Math.floor(Math.random() * updated.length);
        updated[idx].points += Math.floor(Math.random() * 3); // add 0–2 points
        // sort descending by points
        updated.sort((a, b) => b.points - a.points);
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
      <p className="text-sm text-gray-600 mb-4">
        Scores update every few seconds to show live ranking changes.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Rank
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
              >
                User
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Points
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scores.map((entry, index) => (
              <tr key={entry.id}>
                <td className="px-4 py-2 text-sm text-gray-700">{index + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{entry.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{entry.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;