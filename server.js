const express = require('express');
const ejs = require('ejs');
const path = require('path');
const hikes = require('./hikes');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('./pages'));
app.get('/subscribe', (req, res) => res.render('./pages/subscribe'));
app.get('/gallery', (req, res) => res.render('./pages/gallery'));

app.get('/api/v0/gallery', (req, res) => 
{res.json(hikes)});

app.use((req, res) => {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

