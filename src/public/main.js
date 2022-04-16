
// Variables
const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const navBtnsContainer = document.getElementById('nav-btns-container');
const mainContentContainer = document.getElementById('main-content');
let planetNumber;

const planetData = [];

// Check to see if planet number is defined in localStorage
localStorage.getItem('planetNumber') ? planetNumber = localStorage.getItem('planetNumber') : planetNumber = 0;


// Hamburger Menu Functions

// variable to hold state of hamburger menu
let isActive = false;

// Function to show hidden nav menu on mobile devices
hamburgerMenuBtn.addEventListener('click', () => {
  // If Active, close menu
  if (isActive) {
    console.log(true);
    navBtnsContainer.style.display = 'none';
    mainContentContainer.style.display = 'block';
    isActive = false;
  // If !Active, open menu
  } else if (!isActive) {
    console.log(false);
    navBtnsContainer.style.display = 'block';
    mainContentContainer.style.display = 'none';
    isActive = true;
  }
  
});

// Add event listenter to nav Buttons

const mercuryNavBtn = document.getElementById('mercury-nav-btn');
const venusNavBtn = document.getElementById('venus-nav-btn');
const earthNavBtn = document.getElementById('earth-nav-btn');
const marsNavBtn = document.getElementById('mars-nav-btn');
const jupiterNavBtn = document.getElementById('jupiter-nav-btn');
const saturnNavBtn = document.getElementById('saturn-nav-btn');
const uranusNavBtn = document.getElementById('uranus-nav-btn');
const neptuneNavBtn = document.getElementById('neptune-nav-btn');

// Array to hold nav buttons
const navBtnsArr = [
  mercuryNavBtn,
  venusNavBtn,
  earthNavBtn,
  marsNavBtn,
  jupiterNavBtn,
  saturnNavBtn,
  uranusNavBtn,
  neptuneNavBtn
];

// Add event listeners and store planet number to extract data from API
for (let i = 0; i < navBtnsArr.length; i++) {
  // console.log(navBtnsArr[i].children[0].children[1].textContent.toLowerCase());
  navBtnsArr[i].addEventListener('click', () => {
    planetNumber = i;
    localStorage.setItem('planetNumber', planetNumber);
    console.log(planetNumber);
    const link = document.createElement('a');
      if (`/${navBtnsArr[i].children[0].children[1].textContent.toLowerCase()}` === '/mercury') {
        link.href = '/';
      } else {
        link.href = `/${navBtnsArr[i].children[0].children[1].textContent.toLowerCase()}`;
      }   
      document.body.appendChild(link);
      link.click();
      link.remove();
  })
}


// Get data from API
async function getData() {
  const res = await fetch('http://localhost:3000/data')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    for (let i in data) {
      planetData.push(data[i]);
    }
    // let planetNumber = 0;
    console.log(planetData[planetNumber].overview.content);
  });
}

getData();



