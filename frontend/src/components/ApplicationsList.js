import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ApplicationCard from './ApplicationCard';

function ApplicationsList({ searchQuery }) {
  const [applications, setApplications] = useState([]);

  const fetchApps = () => {
    fetch('http://localhost:3000/applications')
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(() => setApplications([]));
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      fetch(`http://localhost:3000/applications/${id}`, { method: "DELETE" })
        .then(() => fetchApps());
    }
  };

  const handleEdit = (app) => {
    const job_title = prompt("Edit Job Title:", app.job_title);
    const company_name = prompt("Edit Company Name:", app.company_name);
    const job_posting_date = prompt("Edit Job Posting Date:", app.job_posting_date);
    const min = prompt("Min Pay:", app.compensation?.min || "");
    const max = prompt("Max Pay:", app.compensation?.max || "");

    if (job_title && company_name && job_posting_date && min && max) {
      fetch(`http://localhost:3000/applications/${app._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_title,
          company_name,
          job_posting_date,
          compensation: {
            min: parseFloat(min),
            max: parseFloat(max)
          }
        })
      }).then(() => fetchApps());
    }
  };

  const filtered = applications.filter(app =>
    app.job_title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.company_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!filtered.length) {
    return <Typography variant="body1" sx={{ mt: 2 }}>No applications found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {filtered.map(app => (
        <Grid item xs={12} sm={6} key={app._id}>
          <ApplicationCard app={app} onEdit={handleEdit} onDelete={handleDelete} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ApplicationsList;
