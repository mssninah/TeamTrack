import React, { useState, useEffect } from 'react';
import { getPlayers, deletePlayer } from '../../services/playerService';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';
import Table from '../ui/Table';
import Button from '../ui/Button';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    loadPlayers();
  }, []);

  const loadPlayers = async () => {
    try {
      const res = await getPlayers();
      setPlayers(res.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deletePlayer(id);
        loadPlayers();
      } catch (error) {
        console.error('Error deleting player:', error);
      }
    }
  };

  const handleEdit = (player) => {
    setEditingPlayer(player);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingPlayer(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    loadPlayers();
  };

  const handleDetails = (player) => {
    setSelectedPlayer(player);
  };

  const closeDetails = () => {
    setSelectedPlayer(null);
  };

  return (
    <div>
      <h1>Players</h1>

      {!showForm && !selectedPlayer && (
        <Button onClick={handleAdd}>Add New Player</Button>
      )}

      {!showForm && !selectedPlayer && (
        <Table
          columns={[
            'Name', 
            'Jersey', 
            'Date of Birth', 
            'Sex', 
            'Phone', 
            'Facebook', 
            'School', 
            'Joining Date', 
            'Actions'
          ]}
          data={players.map(player => [
            player.player_name || '-',
            player.jersey_number ?? '-',
            player.date_of_birth ? new Date(player.date_of_birth).toLocaleDateString() : '-',
            player.sex || '-',
            player.phone_number || '-',
            player.facebook || '-',
            player.school || '-',
            player.date_joining ? new Date(player.date_joining).toLocaleDateString() : '-',
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button onClick={() => handleDetails(player)}>Details</Button>
              <Button onClick={() => handleEdit(player)}>Edit</Button>
              <Button onClick={() => handleDelete(player.id)}>Delete</Button>
            </div>
          ])}
        />
      )}

      {showForm && (
        <PlayerForm player={editingPlayer} onClose={handleFormClose} />
      )}

      {selectedPlayer && (
        <PlayerCard player={selectedPlayer} onClose={closeDetails} />
      )}
    </div>
  );
}
