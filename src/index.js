import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = express.Router();

const data = [];

app.use(cors());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/')));

// Get data from API
fetch('https://jason-donmoyer.github.io/JSON-Files/planet-data.json')
  .then(res => res.json())
  .then(planets => {
    // console.log(planets[4].name);
    for (let i in planets) {
      // console.log(planets[i].name);
      data.push(planets[i]);
    }
  })
  .catch(err => {
    console.log(err);
  });




// ROUTES

app.get('/data', (req, res) => {
  res.send(data);
})

router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/venus', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/venus.html'));
});

router.get('/earth', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/earth.html'));
});

router.get('/mars', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/mars.html'));
});

router.get('/jupiter', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/jupiter.html'));
});

router.get('/saturn', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/saturn.html'));
});

router.get('/uranus', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/uranus.html'));
});

router.get('/neptune', (req,res) => {
  res.sendFile(path.join(__dirname+'/public/neptune.html'));
});


app.use('/', router);
app.listen(3000, () => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});