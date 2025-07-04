import React from 'react';
import { 
  styled, 
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
  Tooltip,
  alpha
} from '@mui/material';
import {
  FilterList,
  MoreVert,
  ArrowDownward,
  Search
} from '@mui/icons-material';

// Styles premium
const PremiumTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
  background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
  border: '1px solid rgba(0, 0, 0, 0.03)',
  overflow: 'hidden',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: 'linear-gradient(to bottom, #6a11cb, #2575fc)',
  }
}));

const PremiumTableHeaderCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.03),
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
  padding: '16px 24px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  }
}));

const PremiumTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px 24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.05), transparent)',
  }
}));

const PremiumTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    background: 'linear-gradient(to right, rgba(106, 17, 203, 0.02), rgba(37, 117, 252, 0.02))',
    '& td': {
      transform: 'translateX(4px)',
    }
  },
  '&:last-child td': {
    borderBottom: 0,
  }
}));

const TableHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.03)',
});

const TableTitle = styled(Typography)({
  fontWeight: 600,
  fontSize: '1.125rem',
  letterSpacing: '-0.2px',
});

export default function PremiumTable({ columns, data, title = 'Data Table' }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <PremiumTableContainer component={Paper}>
        <TableHeader>
          <TableTitle>{title}</TableTitle>
          <Box>
            <Tooltip title="Search">
              <IconButton size="small" sx={{ mr: 1 }}>
                <Search fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Filter">
              <IconButton size="small" sx={{ mr: 1 }}>
                <FilterList fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="More options">
              <IconButton size="small">
                <MoreVert fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </TableHeader>
        
        <MuiTable sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <PremiumTableHeaderCell key={col}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {col}
                    <Tooltip title="Sort">
                      <IconButton size="small" sx={{ ml: 0.5, p: 0 }}>
                        <ArrowDownward fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </PremiumTableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <PremiumTableRow key={i}>
                {row.map((cell, j) => (
                  <PremiumTableCell key={`${i}-${j}`}>
                    {cell}
                  </PremiumTableCell>
                ))}
              </PremiumTableRow>
            ))}
          </TableBody>
        </MuiTable>
      </PremiumTableContainer>
    </Box>
  );
}