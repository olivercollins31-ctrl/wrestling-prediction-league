import React, { useState } from 'react';

/**
 * Predictions page. Users pick winners for each match and select one
 * match as their joker (double points). This demo stores selections in
 * component state only.
 */
function Predictions() {
  // Sample match card for the upcoming event
  const matches = [
    { id: 1, wrestlerA: 'Roman Reigns', wrestlerB: 'Seth Rollins', titleMatch: true },
    { id: 2, wrestlerA: 'Charlotte Flair', wrestlerB: 'Bayley', titleMatch: true },
    { id: 3, wrestlerA: 'Rhea Ripley', wrestlerB: 'Becky Lynch', titleMatch: false },
    { id: 4, wrestlerA: 'Gunther', wrestlerB: 'Cody Rhodes', titleMatch: false },
  ];

  const [predictedWinners, setPredictedWinners] = useState({});
  const [jokerMatchId, setJokerMatchId] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleWinnerChange = (matchId, winner) => {
    setPredictedWinners((prev) => ({ ...prev, [matchId]: winner }));
    setSaved(false);
  };

  const handleJokerChange = (matchId) => {
    setJokerMatchId(matchId);
    setSaved(false);
  };

  const handleSave = () => {
    // In a real app this would persist predictions to a backend
    setSaved(true);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Make Your Predictions</h2>
      <p className="text-sm text-gray-600 mb-6">
        Select the winner for each match and choose one match as your joker (double points).
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {matches.map((match) => {
          const winner = predictedWinners[match.id] || '';
          return (
            <div key={match.id} className="border p-4 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">
                  {match.wrestlerA} vs. {match.wrestlerB}
                </h3>
                {match.titleMatch && (
                  <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                    Title Match
                  </span>
                )}
              </div>
              <div className="space-y-2 ml-4">
                {[match.wrestlerA, match.wrestlerB].map((wrestler) => (
                  <label key={wrestler} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name={`winner-${match.id}`}
                      value={wrestler}
                      checked={winner === wrestler}
                      onChange={() => handleWinnerChange(match.id, wrestler)}
                      className="form-radio text-blue-600"
                    />
                    <span>{wrestler}</span>
                  </label>
                ))}
              </div>
              <div className="mt-3 ml-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="joker"
                    checked={jokerMatchId === match.id}
                    onChange={() => handleJokerChange(match.id)}
                    className="form-radio text-green-600"
                  />
                  <span className="text-sm text-green-700">Joker Match</span>
                </label>
              </div>
            </div>
          );
        })}
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Predictions
        </button>
        {saved && (
          <p className="text-green-600 mt-2 text-sm">Your predictions have been saved! (demo only)</p>
        )}
      </form>
    </div>
  );
}

export default Predictions;