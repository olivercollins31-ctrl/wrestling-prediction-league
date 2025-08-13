import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        setEvents(data);
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      {events.length === 0 ? (
        <p>No events found</p>
      ) : (
        events.map((event) => (
          <div key={event.id} className="bg-gray-800 p-4 rounded mb-4">
            <h3 className="text-lg font-bold">{event.name}</h3>
            <p className="text-sm text-gray-400">
              {new Date(event.date).toLocaleDateString()} - {event.location}
            </p>
            <Link to={`/predictions/${event.id}`}>
              <button className="mt-2 bg-purple-600 px-4 py-2 rounded">
                Make Predictions
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
