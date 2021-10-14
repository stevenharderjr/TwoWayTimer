import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';
import App from '../client/components/App';

// const path = require('path');
// const express = require('express');
const app = express();
const port = 3000;

const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`;
const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`;

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('/', (req, res) => {
  const jsx = ReactDOMServer.renderToString(
    <App />
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Task/Reward Timer</title>
        ${clientBundleStyle}
      </head>
      <body>
        <div id='ssr-app'>${jsx}</div>
        ${clientBundleScript}
      </body>
    </html>
  `);
});

// app.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('PUT request received');
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
