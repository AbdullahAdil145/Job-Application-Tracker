import React from 'react';
import { TextField, Box } from '@mui/material';

function SearchBar({ value, onChange }) {
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Search by job title or company"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
}

export default SearchBar;
