import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = express.Router();

app.use(cors());
// app.use(express.static('public'));


// ROUTES

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
  console.log(`App is cocked, locked and READY TO ROCK! on port ${process.env.PORT}`);
});