import React, { useState } from 'react';

/**
 * Leagues page. Shows the leagues the user belongs to and a form
 * placeholder to create or join a league. In a real application this
 * would integrate with backend data and invite codes.
 */
function Leagues() {
  const [leagues, setLeagues] = useState([
    { id: 1, name: 'Friends League' },
    { id: 2, name: 'Work League' },
  ]);
  const [newLeagueName, setNewLeagueName] = useState('');
  const [message, setMessage] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newLeagueName.trim()) return;
    // Add new league to list (demo only)
    setLeagues((prev) => [
      ...prev,
      { id: prev.length + 1, name: newLeagueName.trim() },
    ]);
    setMessage(`Created league "${newLeagueName.trim()}" (demo only)`);
    setNewLeagueName('');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Leagues</h2>
      <ul className="space-y-2 mb-6">
        {leagues.map((league) => (
          <li
            key={league.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <span>{league.name}</span>
            <span className="text-sm text-gray-500">{`Members: ${Math.floor(Math.random() * 10) + 1}`}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreate} className="space-y-3">
        <h3 className="text-lg font-medium">Create a New League</h3>
        <input
          type="text"
          value={newLeagueName}
          onChange={(e) => setNewLeagueName(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Enter league name"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Create League
        </button>
      </form>
      {message && <p className="text-green-600 mt-3 text-sm">{message}</p>}
    </div>
  );
}

export default Leagues;