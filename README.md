# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

- Solution URL: [https://github.com/Jason-Donmoyer/Planets-Facts-Site](https://github.com/Jason-Donmoyer/Planets-Facts-Site)
- Live Site URL: [https://planet-facts-app.herokuapp.com/](https://planet-facts-app.herokuapp.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Node.js
- [Handlebars](https://handlebarsjs.com/) - JS template

### What I learned

This is the first project that I am using Node.js and Handlebars.js.
I created a simple json file and hosted it on github pages to make the API call to fetch data on the backend and used handlebars to injuect the data on the frontend pages. I used Express for the routes.

```handlebars
<p id='rotation-time-copy' class='stat-copy'>{{rotationTime}}</p>
```

### Continued development

I would like to refactor the front end JS at some point and possibly use SASS to cut down on the amount of CSS in this project. I also would like to look into using partials with handlebars.js.

## Author

- Frontend Mentor - [@Jason-Donmoyer](https://www.frontendmentor.io/profile/Jason-Donmoyer)
- Twitter - [@TheDuke523](https://twitter.com/TheDuke523)
