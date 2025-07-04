import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  MenuItem, 
  InputAdornment, 
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme
} from '@mui/material';
import { 
  Close,
  Person,
  Email,
  Numbers,
  Phone,
  School,
  Facebook,
  Male,
  Female
} from '@mui/icons-material';
import { createPlayer, updatePlayer } from '../../services/playerService';
import Button from '../ui/Button';

export default function PlayerForm({ player, onClose }) {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    player_name: '',
    email: '',
    date_of_birth: '',
    jersey_number: '',
    facebook: '',
    phone_number: '',
    school: '',
    date_joining: '',
    date_leaving: '',
    sex: '',
  });

  useEffect(() => {
    if (player) {
      setFormData({
        ...player,
        date_of_birth: player.date_of_birth || '',
        date_joining: player.date_joining || '',
        date_leaving: player.date_leaving || '',
      });
    }
  }, [player]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (player) {
      await updatePlayer(player.id, formData);
    } else {
      await createPlayer(formData);
    }
    onClose();
  };

  return (
    <Dialog 
      open 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          boxShadow: theme.shadows[10],
          overflow: 'hidden'
        }
      }}
    >
      {/* Header avec bouton fermeture */}
      <DialogTitle sx={{ 
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 2,
        pr: 6,
        position: 'relative'
      }}>
        <Typography variant="h6" fontWeight="bold">
          {player ? 'Edit Player Profile' : 'Create New Player'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            color: 'primary.contrastText',
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
            mb: 3
          }}>
            {/* Colonne gauche */}
            <Box>
              {/* Nom complet */}
              <TextField
                fullWidth
                label="Full Name"
                name="player_name"
                value={formData.player_name}
                onChange={handleChange}
                required
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* Numéro de maillot */}
              <TextField
                fullWidth
                label="Jersey Number"
                name="jersey_number"
                type="number"
                value={formData.jersey_number}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Numbers color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* Genre */}
              <TextField
                select
                fullWidth
                label="Gender"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
              >
                <MenuItem value="">
                  <em>Select Gender</em>
                </MenuItem>
                <MenuItem value="Male">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Male fontSize="small" /> Male
                  </Box>
                </MenuItem>
                <MenuItem value="Female">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Female fontSize="small" /> Female
                  </Box>
                </MenuItem>
              </TextField>
            </Box>

            {/* Colonne droite */}
            <Box>
              {/* Téléphone */}
              <TextField
                fullWidth
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* Facebook */}
              <TextField
                fullWidth
                label="Facebook Profile"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Facebook color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* École */}
              <TextField
                fullWidth
                label="School"
                name="school"
                value={formData.school}
                onChange={handleChange}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <School color="action" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />

              {/* Date de naissance */}
              <TextField
                fullWidth
                label="Date of Birth"
                name="date_of_birth"
                type="date"
                value={formData.date_of_birth}
                onChange={handleChange}
                margin="normal"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Dates importantes */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            mb: 3
          }}>
            <TextField
              fullWidth
              label="Date Joining"
              name="date_joining"
              type="date"
              value={formData.date_joining}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Date Leaving"
              name="date_leaving"
              type="date"
              value={formData.date_leaving}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Box>

          {/* Boutons d'action */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            gap: 2,
            mt: 4
          }}>
            <Button 
              variant="outlined" 
              onClick={onClose}
              sx={{ minWidth: 120 }}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained"
              sx={{ minWidth: 120 }}
            >
              {player ? 'Update' : 'Create'}
            </Button>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}