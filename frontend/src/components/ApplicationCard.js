import React from 'react';
import {
  Card, CardContent, Typography, Button, CardActions, Link
} from '@mui/material';

function ApplicationCard({ app, onEdit, onDelete }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{app.job_title || "No Title"}</Typography>
        <Typography variant="body2">
          <strong>Company:</strong> {app.company_name || "Unknown"}
        </Typography>
        <Typography variant="body2">
          <strong>Posted:</strong> {app.job_posting_date || "N/A"}
        </Typography>
        <Typography variant="body2">
          <strong>Pay:</strong> ${app.compensation?.min || "?"} - ${app.compensation?.max || "?"}
        </Typography>
        <Typography variant="body2">
          <strong>URL:</strong> <Link href={app.form_url} target="_blank" rel="noopener">{app.form_url}</Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEdit(app)}>Edit</Button>
        <Button size="small" color="error" onClick={() => onDelete(app._id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default ApplicationCard;
