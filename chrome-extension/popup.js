document.addEventListener('DOMContentLoaded', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab && tab.url) {
    document.getElementById('form_url').value = tab.url;
  }
});

document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    form_url: document.getElementById('form_url').value,
    company_name: document.getElementById('company').value,
    job_title: document.getElementById('title').value,
    job_posting_date: document.getElementById('date').value,
    compensation: {
      min: document.getElementById('pay_min').value,
      max: document.getElementById('pay_max').value
    }
  };

  try {
    const res = await fetch('http://localhost:3000/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    const statusDiv = document.getElementById('status');

    if (res.ok) {
      statusDiv.textContent = 'Application saved!';
      statusDiv.style.color = 'green';
    } else {
      statusDiv.textContent = 'Error saving application';
      statusDiv.style.color = 'red';
    }
  } catch (err) {
    document.getElementById('status').textContent = 'Server error';
  }
});
