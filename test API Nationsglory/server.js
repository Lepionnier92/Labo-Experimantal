const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/proxy', async (req, res) => {
  try {
    const response = await axios.get('https://publicapi.nationsglory.fr/oauth/checkToken', {
      params: {
        access_token: req.query.access_token,
        client_secret: req.query.client_secret
      },
      headers: {
        accept: 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
