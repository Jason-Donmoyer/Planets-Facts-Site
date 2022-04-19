import express from 'express';
import { engine } from 'express-handlebars';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fetch from 'node-fetch';
// import engine from 'consolidate';
// import Handlebars from 'handlebars/runtime.js';
// import { engine } from 'express-handlebars';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// const handlebars = require("express-handlebars");

// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const router = express.Router();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));


//Sets our app to use the handlebars engine
// app.set('view engine', 'handlebars');

//Sets handlebars configurations 
// app.engine('handlebars', handlebars({
//   layoutsDir: __dirname + '/views/layouts',
//   }));

// const { engine } = require("express-handlebars");

// app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );

const data = [];


app.use(cors());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(path.join(__dirname, 'assets')));

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


router.get('/data', (req, res) => {
  res.send(data);
})

app.get('/', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/index.html'));
  res.render('home', {
    planetImg: data[0].images.planet,
    planetName: data[0].name,
    planetOverview: data[0].overview.content,
    rotationTime: data[0].rotation,
    revolutionTime: data[0].revolution,
    radius: data[0].radius,
    temperature: data[0].temperature,
  });
});

router.get('/venus', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/venus.html'));
  res.render('home', {
    planetImg: data[1].images.planet,
    planetName: data[1].name,
    planetOverview: data[1].overview.content,
    rotationTime: data[1].rotation,
    revolutionTime: data[1].revolution,
    radius: data[1].radius,
    temperature: data[1].temperature,
  })
});

router.get('/earth', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/earth.html'));
  res.render('home', {
    planetImg: data[2].images.planet,
    planetName: data[2].name,
    planetOverview: data[2].overview.content,
    rotationTime: data[2].rotation,
    revolutionTime: data[2].revolution,
    radius: data[2].radius,
    temperature: data[2].temperature,
  })
});

router.get('/mars', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/mars.html'));
  res.render('home', {
    planetImg: data[3].images.planet,
    planetName: data[3].name,
    planetOverview: data[3].overview.content,
    rotationTime: data[3].rotation,
    revolutionTime: data[3].revolution,
    radius: data[3].radius,
    temperature: data[3].temperature,
  })
});

router.get('/jupiter', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/jupiter.html'));
  res.render('home', {
    planetImg: data[4].images.planet,
    planetName: data[4].name,
    planetOverview: data[4].overview.content,
    rotationTime: data[4].rotation,
    revolutionTime: data[4].revolution,
    radius: data[4].radius,
    temperature: data[4].temperature,
  })
});

router.get('/saturn', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/saturn.html'));
  res.render('home', {
    planetImg: data[5].images.planet,
    planetName: data[5].name,
    planetOverview: data[5].overview.content,
    rotationTime: data[5].rotation,
    revolutionTime: data[5].revolution,
    radius: data[5].radius,
    temperature: data[5].temperature,
  })
});

router.get('/uranus', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/uranus.html'));
  res.render('home', {
    planetImg: data[6].images.planet,
    planetName: data[6].name,
    planetOverview: data[6].overview.content,
    rotationTime: data[6].rotation,
    revolutionTime: data[6].revolution,
    radius: data[6].radius,
    temperature: data[6].temperature,
  })
});

router.get('/neptune', (req,res) => {
  // res.sendFile(path.join(__dirname+'/public/neptune.html'));
  res.render('home', {
    planetImg: data[7].images.planet,
    planetName: data[7].name,
    planetOverview: data[7].overview.content,
    rotationTime: data[7].rotation,
    revolutionTime: data[7].revolution,
    radius: data[7].radius,
    temperature: data[7].temperature,
  })
});


app.use('/', router);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up and running on port ${process.env.PORT || 3000}`);
});