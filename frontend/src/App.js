import React, { useMemo, useState } from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import StatsPanel from './components/StatsPanel';
import SearchBar from './components/SearchBar';
import ApplicationsList from './components/ApplicationsList';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');
  const [searchQuery, setSearchQuery] = useState('');

  const theme = useMemo(() =>
    createTheme({ palette: { mode } }), [mode]);

  const handleToggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Header mode={mode} toggleTheme={handleToggleTheme} />
        <StatsPanel />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ApplicationsList searchQuery={searchQuery} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
