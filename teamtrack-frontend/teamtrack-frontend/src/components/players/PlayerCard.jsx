import React from 'react';
import { Box, Typography, Avatar, Divider, IconButton } from '@mui/material';
import { PhotoCamera, Close } from '@mui/icons-material';
import Button from '../ui/Button';

export default function PlayerCard({ player, onClose }) {
  return (
    <Box sx={{
      maxWidth: 500,
      mx: 'auto',
      p: 3,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 3,
      position: 'relative'
    }}>
      {/* Close button */}
      <IconButton 
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16
        }}
      >
        <Close />
      </IconButton>

      {/* Header with avatar */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        {/* Player photo upload */}
        <Box sx={{ position: 'relative', mr: 3 }}>
          <Avatar
            src={player.photo_url}
            sx={{
              width: 100,
              height: 100,
              border: '2px solid',
              borderColor: 'primary.main'
            }}
          />
          <IconButton
            color="primary"
            aria-label="upload player photo"
            component="label"
            sx={{
              position: 'absolute',
              bottom: -8,
              right: -8,
              bgcolor: 'background.paper'
            }}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera fontSize="small" />
          </IconButton>
        </Box>

        {/* Player name and basic info */}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {player.player_name}
          </Typography>
          <Typography color="text.secondary">
            #{player.jersey_number} • {player.sex}
          </Typography>
        </Box>
      </Box>

      {/* License photo upload */}
      <Box sx={{ mb: 3, p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
        <Typography variant="subtitle2" gutterBottom>
          License Photo
        </Typography>
        {player.license_photo_url ? (
          <img 
            src={player.license_photo_url} 
            alt="License" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: 150,
              borderRadius: 4,
              marginBottom: 8
            }} 
          />
        ) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 3,
            bgcolor: 'action.hover',
            borderRadius: 1
          }}>
            <PhotoCamera fontSize="large" color="disabled" />
            <Typography color="text.disabled">
              No license photo uploaded
            </Typography>
          </Box>
        )}
        <Button 
          variant="outlined" 
          fullWidth
          component="label"
          startIcon={<PhotoCamera />}
        >
          Upload License
          <input hidden accept="image/*" type="file" />
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Player details in two columns */}
      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 2
      }}>
        <DetailItem label="Email" value={player.email} />
        <DetailItem label="Phone" value={player.phone_number} />
        <DetailItem label="Date of Birth" value={player.date_of_birth} />
        <DetailItem label="School" value={player.school} />
        <DetailItem label="Date Joining" value={player.date_joining} />
        <DetailItem label="Date Leaving" value={player.date_leaving} />
        <DetailItem label="Facebook" value={player.facebook} />
      </Box>
    </Box>
  );
}

// Helper component for consistent detail items
function DetailItem({ label, value }) {
  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography>
        {value || '-'}
      </Typography>
    </Box>
  );
}