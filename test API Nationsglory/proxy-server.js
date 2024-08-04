const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  const options = {
    url: url,
    headers: {
      'Authorization': 'Bearer NGAPI_2QcqcEVbl%B%C(AxitjS$FLzMN8PtR)K714229c08db526fcf6db83f6d8e72e92'
    }
  };
  request(options).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
