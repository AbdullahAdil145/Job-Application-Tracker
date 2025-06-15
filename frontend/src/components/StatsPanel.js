import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function StatsPanel() {
  const [applications, setApplications] = useState([]);
  const [total, setTotal] = useState(0);
  const [avgPay, setAvgPay] = useState(0);
  const [topCompany, setTopCompany] = useState('N/A');

  useEffect(() => {
    fetch('http://localhost:3000/applications')
      .then(res => res.json())
      .then(data => {
        setApplications(data);
        setTotal(data.length);

        const pays = data.map(app => parseFloat(app.compensation?.min) || 0);
        const avg = pays.reduce((a, b) => a + b, 0) / pays.length || 0;
        setAvgPay(avg.toFixed(2));

        const companyCount = {};
        data.forEach(app => {
          const company = app.company_name || 'Unknown';
          companyCount[company] = (companyCount[company] || 0) + 1;
        });
        const top = Object.entries(companyCount).sort((a, b) => b[1] - a[1])[0];
        setTopCompany(top?.[0] || 'N/A');
      });
  }, []);

  const StatCard = ({ label, value }) => (
    <Grid item xs={12} sm={4}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Paper>
    </Grid>
  );

  return (
    <Grid container spacing={2} sx={{ my: 3 }}>
      <StatCard label="Total Applications" value={total} />
      <StatCard label="Average Pay" value={`$${avgPay}`} />
      <StatCard label="Top Company" value={topCompany} />
    </Grid>
  );
}

export default StatsPanel;
