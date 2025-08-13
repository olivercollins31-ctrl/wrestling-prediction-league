import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Predictions() {
  const { eventId } = useParams();
  const [matches, setMatches] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [joker, setJoker] = useState(null);

  useEffect(() => {
    async function fetchMatches() {
      const { data, error } = await supabase
        .from('matches')
        .select('*')
        .eq('event_id', eventId);

      if (error) {
        console.error('Error fetching matches:', error);
      } else {
        setMatches(data);
      }
    }

    fetchMatches();
  }, [eventId]);

  const handlePrediction = (matchId, winner) => {
    setPredictions({ ...predictions, [matchId]: winner });
  };

  const handleSave = async () => {
    // Later: send predictions to Supabase
    console.log('Saving predictions:', predictions, 'Joker:', joker);
  };

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Make Predictions</h1>
      {matches.length === 0 ? (
        <p>No matches found for this event.</p>
      ) : (
        matches.map((match) => (
          <div key={match.id} className="bg-gray-800 p-4 rounded mb-4">
            <p className="font-bold">{match.wrestler_a} vs {match.wrestler_b}</p>
            <div className="mt-2">
              <label>
                <input
                  type="radio"
                  name={`match-${match.id}`}
                  onChange={() => handlePrediction(match.id, match.wrestler_a)}
                />
                {match.wrestler_a}
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name={`match-${match.id}`}
                  onChange={() => handlePrediction(match.id, match.wrestler_b)}
                />
                {match.wrestler_b}
              </label>
            </div>
            <label className="block mt-2">
              <input
                type="radio"
                name="joker"
                checked={joker === match.id}
                onChange={() => setJoker(match.id)}
              />
              Make this my Joker match
            </label>
          </div>
        ))
      )}
      <button
        className="bg-purple-600 px-4 py-2 rounded"
        onClick={handleSave}
      >
        Save Predictions
      </button>
    </div>
  );
}

export default Predictions;
