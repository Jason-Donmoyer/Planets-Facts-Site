
// Variables
const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const navBtnsContainer = document.getElementById('nav-btns-container');
const mainContentContainer = document.getElementById('main-content');

// Facts Selection Buttons
const factsBtnsContainer = document.getElementById('fact-selection-btns-container');

const overviewSelectionBtn = document.getElementById('overview-selection-btn');
const structureSelectionBtn = document.getElementById('structure-selection-btn');
const geologySelectionBtn = document.getElementById('geology-selection-btn');

const overviewSelectionMarker = document.getElementById('overview-selection-marker');
const structureSelectionMarker = document.getElementById('structure-selection-marker');
const geologySelectionMarker = document.getElementById('geology-selection-marker');


// Planet images
const planetImg = document.getElementById('planet-img-container');
const planetStructureImg = document.getElementById('planet-structure-img-container');
const planetGeologyImg = document.getElementById('planet-geology-img-container');


// Planet Info Containers
const planetOverviewCopy = document.getElementById('planet-overview-copy');
const planetStructureCopy = document.getElementById('planet-structure-copy');
const planetGeologyCopy = document.getElementById('planet-surface-copy');


// Main H1
const mainHeadline = document.querySelector('.main-headline').textContent.toLowerCase();


// Planet Info links
const planetSrc = document.getElementById('planet-src-copy');
// const structureSrc = document.getElementById('structure-src-copy');
// const geologySrc = document.getElementById('surface-src-copy');

// let planetNumber = 0;

const planetData = [];

// Check to see if planet number is defined in localStorage
// localStorage.getItem('planetNumber') ? planetNumber = localStorage.getItem('planetNumber') : planetNumber = 0;


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


// CREATE REUSABLE FUNCTION FOR LISTENERS ON NAV BTNS

// Add event listeners and store planet number to extract data from API
for (let i = 0; i < navBtnsArr.length; i++) {
  // console.log(navBtnsArr[i].children[0].children[1].textContent.toLowerCase());
  navBtnsArr[i].addEventListener('click', () => {
    // planetNumber = i;
    // localStorage.setItem('planetNumber', planetNumber);
    // console.log(planetNumber);
    const link = document.createElement('a');
      if (`/${navBtnsArr[i].children[0].children[1].textContent.toLowerCase()}` === '/mercury') {
        link.href = '/';
        // planetNumber = 0;
      } else {
        link.href = `/${navBtnsArr[i].children[0].children[1].textContent.toLowerCase()}`;
      }   
      // localStorage.setItem('planetNumber', planetNumber);
      document.body.appendChild(link);
      link.click();
      link.remove();
  })
}


// Add event listenter to nav Buttons to Lg Screen Nav Menu

const mercuryNavBtnLg = document.getElementById('mercury-nav-btn-lg');
const venusNavBtnLg = document.getElementById('venus-nav-btn-lg');
const earthNavBtnLg = document.getElementById('earth-nav-btn-lg');
const marsNavBtnLg = document.getElementById('mars-nav-btn-lg');
const jupiterNavBtnLg = document.getElementById('jupiter-nav-btn-lg');
const saturnNavBtnLg = document.getElementById('saturn-nav-btn-lg');
const uranusNavBtnLg = document.getElementById('uranus-nav-btn-lg');
const neptuneNavBtnLg = document.getElementById('neptune-nav-btn-lg');

// Array to hold nav buttons for lg screen nav
const navBtnsArrLg = [
  mercuryNavBtnLg,
  venusNavBtnLg,
  earthNavBtnLg,
  marsNavBtnLg,
  jupiterNavBtnLg,
  saturnNavBtnLg,
  uranusNavBtnLg,
  neptuneNavBtnLg
];


// Add event listeners and store planet number to extract data from API for lg screen nav
for (let i = 0; i < navBtnsArrLg.length; i++) {
  // console.log(navBtnsArr[i].children[0].children[1].textContent.toLowerCase());
  navBtnsArrLg[i].addEventListener('click', () => {
    
    // planetNumber = i;
    // localStorage.setItem('planetNumber', planetNumber);
    // console.log(planetNumber);
    const link = document.createElement('a');
      if (`/${navBtnsArrLg[i].children[1].textContent.toLowerCase()}` === '/mercury') {
        link.href = '/';
        // planetNumber = 0;
      } else {
        link.href = `/${navBtnsArrLg[i].children[1].textContent.toLowerCase()}`;
      }   
      // localStorage.setItem('planetNumber', planetNumber);
      document.body.appendChild(link);
      link.click();
      link.remove();
  })
}


// CHANGE TO MOUSEOVER EVENT -- create reusable function
// // Change color of planet marker on Desktop
// navBtnsArrLg.forEach(btn => btn.id === `${mainHeadline}-nav-btn-lg` ? btn.children[0].classList.add('desktop-planet-color-active') : btn.children[0].classList.remove('desktop-planet-color-active'));



function colorBarHover(arr) {
  arr.forEach(item => item.children[0].classList.remove(`${mainHeadline}-color`));
  arr.forEach(item => item.children[0].classList.add(`${item.children[1].textContent.toLowerCase()}-color`));
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('mouseenter', (e) => {
      arr[i].children[0].classList.add('desktop-planet-color-active');
      console.log(e.target.children[1].textContent.toLowerCase());
    });
    arr[i].addEventListener('mouseleave', () => {
      arr[i].children[0].classList.remove('desktop-planet-color-active');
    });
  }
}


const selectinoBtnsContainer = [
  overviewSelectionBtn,
  structureSelectionBtn,
  geologySelectionBtn
];

// function selectionBtnHover(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].addEventListener('mouseenter', (e) => {
//       if (!e.target.classList.contains('selection-btn-active')) {
//         e.target.style.backgroundColor = 'rgba(216, 216, 216, 0.2)';
//         // e.target.style.opacity = 0.2;
//       }
//     });
//     arr[i].addEventListener('mouseleave', (e) => {
//       if (!e.target.classList.contains('selection-btn-active')) {
//         e.target.style.backgroundColor = '';
//         // e.target.style.opacity = 0.2;
//       }
//     })
//   }
//}




// Planet facts selection Buttons event listeners
overviewSelectionBtn.addEventListener('click', () => {
  // selection markers
  overviewSelectionMarker.style.display = 'block';
  overviewSelectionBtn.classList.add('selection-btn-active')
  structureSelectionMarker.style.display = 'none';
  structureSelectionBtn.classList.remove('selection-btn-active');
  geologySelectionMarker.style.display = 'none';
  geologySelectionBtn.classList.remove('selection-btn-active');

  // planet images
  planetImg.style.display = 'flex';
  planetStructureImg.style.display = 'none';
  planetGeologyImg.style.display = 'none';

  // planet info copy
  planetOverviewCopy.style.display = 'block';
  planetStructureCopy.style.display = 'none';
  planetGeologyCopy.style.display = 'none';

});

structureSelectionBtn.addEventListener('click', () => {
  // selection markers
  structureSelectionMarker.style.display = 'block';
  structureSelectionBtn.classList.add('selection-btn-active');
  overviewSelectionMarker.style.display = 'none';
  overviewSelectionBtn.classList.remove('selection-btn-active');
  geologySelectionMarker.style.display = 'none';
  geologySelectionBtn.classList.remove('selection-btn-active');

  // planet images
  planetImg.style.display = 'none';
  planetStructureImg.style.display = 'flex';
  planetGeologyImg.style.display = 'none';


  // planet info copy
  planetOverviewCopy.style.display = 'none';
  planetStructureCopy.style.display = 'block';
  planetGeologyCopy.style.display = 'none';

});

geologySelectionBtn.addEventListener('click', () => {
  // selection markers
  geologySelectionMarker.style.display = 'block';
  geologySelectionBtn.classList.add('selection-btn-active');
  overviewSelectionMarker.style.display = 'none';
  overviewSelectionBtn.classList.remove('selection-btn-active');
  structureSelectionMarker.style.display = 'none';
  structureSelectionBtn.classList.remove('selection-btn-active');

  // planet images
  planetImg.style.display = 'none';
  planetStructureImg.style.display = 'none';
  planetGeologyImg.style.display = 'flex';

  // planet info copy
  planetOverviewCopy.style.display = 'none';
  planetStructureCopy.style.display = 'none';
  planetGeologyCopy.style.display = 'block';

});


// W3 Schools JS Media Queries Example 
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addEventListener(myFunction) // Attach listener function on state changes




colorBarHover(navBtnsArrLg);
// selectionBtnHover(selectinoBtnsContainer);


// Get data from API
// async function getData() {
//   const res = await fetch('http://localhost:3000/data')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     for (let i in data) {
//       planetData.push(data[i]);
//     }
//     // let planetNumber = 0;
//     console.log(planetData[planetNumber].overview.content);
//   });
// }

//getData();



