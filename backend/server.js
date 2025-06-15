const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/stealthy')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const applicationSchema = new mongoose.Schema({
  form_url: String,
  applied_at: String,
  job_title: String,
  job_posting_date: String,
  compensation: {
  min: Number,
  max: Number
	},
  company_name: String
});

const Application = mongoose.model('Application', applicationSchema);

app.post('/save', async (req, res) => {
  try {
    const appData = new Application(req.body);
    await appData.save();
    res.json({ message: 'Application saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving application' });
  }
});

app.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
});

app.put('/applications/:id', async (req, res) => {
  try {
    const updatedApp = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedApp);
  } catch (err) {
    res.status(500).json({ message: 'Error updating application' });
  }
});

app.delete('/applications/:id', async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting application' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
