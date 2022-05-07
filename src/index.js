import express from 'express';
import { engine } from 'express-handlebars';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = express.Router();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));


const data = [];


app.use(cors());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, './assets')));

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

 
// returns data to send to client
function getPlanetData(id) {
  return {
    planetImg: data[id].images.planet,
    planetStructureImg: data[id].images.internal,
    planetGeologyImg: data[id].images.geology,
    planetName: data[id].name,
    planetColor: data[id].name.toLowerCase(),
    planetOverview: data[id].overview.content,
    planetSrc: data[id].overview.source,
    planetStructure: data[id].structure.content,
    planetGeology: data[id].geology.content,
    rotationTime: data[id].rotation,
    revolutionTime: data[id].revolution,
    radius: data[id].radius,
    temperature: data[id].temperature,
  };
}


// ROUTES


router.get('/data', (req, res) => {
  res.send(data);
})

app.get('/', (req,res) => {
  res.render('home', getPlanetData(0));
});

router.get('/venus', (req,res) => {
  res.render('home', getPlanetData(1));
});

router.get('/earth', (req,res) => {
  res.render('home', getPlanetData(2));
});

router.get('/mars', (req,res) => {
  res.render('home', getPlanetData(3));
});

router.get('/jupiter', (req,res) => {
  res.render('home', getPlanetData(4));
});

router.get('/saturn', (req,res) => {
  res.render('home', getPlanetData(5));
});

router.get('/uranus', (req,res) => {
  res.render('home', getPlanetData(6));
});

router.get('/neptune', (req,res) => {
  res.render('home', getPlanetData(7));
});

// Router
app.use('/', router);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up and running on port ${process.env.PORT || 3000}`);
});