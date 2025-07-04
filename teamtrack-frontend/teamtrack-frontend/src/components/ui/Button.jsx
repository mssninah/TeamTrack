import React from 'react';
import { 
  styled, 
  Button as MuiButton,
  ButtonProps,
  CircularProgress,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
// Variants premium avec animations
const ButtonRoot = styled(motion(MuiButton))(({ theme, variant, color = 'primary' }) => ({
  minWidth: '100px',
  borderRadius: '10px',
  textTransform: 'none',
  fontWeight: 600,
  letterSpacing: '0.03em',
  padding: '12px 24px',
  boxShadow: 'none',
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  position: 'relative',
  overflow: 'hidden',
  
  ...(variant === 'contained' && {
    background: `linear-gradient(135deg, ${theme.palette[color].main}, ${theme.palette[color].dark})`,
    color: theme.palette[color].contrastText,
    '&:hover': {
      boxShadow: `0 4px 12px ${alpha(theme.palette[color].main, 0.3)}`,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0))',
      borderRadius: '10px',
    }
  }),

  ...(variant === 'outlined' && {
    border: `2px solid ${theme.palette[color].main}`,
    color: theme.palette[color].main,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, 0.08),
      borderWidth: '2px',
    }
  }),

  ...(variant === 'text' && {
    color: theme.palette[color].main,
    '&:hover': {
      backgroundColor: alpha(theme.palette[color].main, 0.05),
      transform: 'none',
    }
  }),

  '&.Mui-disabled': {
    transform: 'none !important',
  }
}));

// Effet de vague au clic
const RippleEffect = styled('span')(({ color }) => ({
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: alpha(color, 0.3),
  transform: 'scale(0)',
  animation: 'ripple 600ms linear',
  '@keyframes ripple': {
    to: {
      transform: 'scale(4)',
      opacity: 0,
    }
  }
}));

interface PremiumButtonProps extends ButtonProps {
  loading?: boolean;
  tooltip?: string;
}

export default function PremiumButton({
  children,
  loading = false,
  tooltip = '',
  variant = 'contained',
  color = 'primary',
  ...props
}: PremiumButtonProps) {
  const [ripple, setRipple] = React.useState(false);
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
    
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  const buttonContent = (
    <ButtonRoot
      variant={variant}
      color={color}
      disableRipple
      {...props}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {!loading ? (
        <>
          {children}
          {ripple && (
            <RippleEffect
              color={variant === 'contained' ? '#fff' : color}
              style={{ left: coords.x, top: coords.y }}
            />
          )}
        </>
      ) : (
        <CircularProgress size={24} color={variant === 'contained' ? 'inherit' : color} />
      )}
    </ButtonRoot>
  );

  return tooltip ? (
    <Tooltip title={tooltip} arrow>
      {buttonContent}
    </Tooltip>
  ) : (
    buttonContent
  );
}