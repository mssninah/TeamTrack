import React, { useEffect, useState } from 'react';
import { getPlayers, deletePlayer } from '../../services/PlayerService';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const res = await getPlayers();
      setPlayers(res.data);
    } catch (err) {
      console.error('Error fetching players', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      await deletePlayer(id);
      loadPlayers();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Players</h2>
      <button>Add New Player</button>
      <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Jersey</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(p => (
            <tr key={p.id}>
              <td>{p.player_name}</td>
              <td>{p.jersey_number}</td>
              <td>{p.email}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
