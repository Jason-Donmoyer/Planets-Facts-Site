
// Variables
const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const navBtnsContainer = document.getElementById('nav-btns-container');
const mainContentContainer = document.getElementById('main-content');

const planetData = [];


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


async function getData() {
  const res = await fetch('http://localhost:3000/data')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    for (let i in data) {
      planetData.push(data[i]);
    }
    let planetNumber = 0;
    console.log(planetData[planetNumber].overview.content);
  });
}

getData();


