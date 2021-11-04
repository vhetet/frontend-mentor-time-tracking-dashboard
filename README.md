# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Available scripts](#available-scripts)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

#### Desktop
![desktop](./src/assets/screenshots/time-tracking-daskboard-desktop.png)

#### Mobile
![mobile](./src/assets/screenshots/time-tracking-daskboard-mobile.png)

### Links

- Solution URL: [github repo](https://github.com/vhetet/frontend-mentor-time-tracking-dashboard)
- Live Site URL to: [Github page](https://vhetet.github.io/frontend-mentor-time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS var + nesting
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

* Some ad blocker extension will block images when the name contain some words. For example ad block does not like icon-social.svg.
* Learned more about CSS grid. I was seeing this weird behavior where the size of the card in the crid would change when the content width changed even though there was enough space in the card. I updated the grid template to use `1fr` instead of `auto` and it fixed the issue
* how to make the UI scalable based on the font size. So, I knew how REM worked but I never did the cinfig to make the font size change based on the view port. 

### Continued development

* I need to figure out how to make the design more responsive. Right now I have a fixed size for desktop and mobile only start once the screen is less wide than 500px. I need to find the right balance.
* I need to figure out why the margin-bottom is ignored if there is no space at the bottom of the screen but the margin-top isn't. I would also be nice if I could figure out why the padding on the mobile div wrapper does not work vertically. I don't get how to make the container scrollable and force apadding at the top and bottom without adding it to the children.

### Useful resources

- [deploy react app with gh-pages](https://github.com/gitname/react-gh-pages)
- [add scss to react app](https://medium.com/officialrajdeepsingh/how-to-add-scss-sass-in-react-js-6615b6e77e56) (replace node-sass by sass as it is deprecated)
- [CSS grid reminder with css-ttricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS grid exercise - grid garden](https://codepip.com/games/grid-garden/)
- [Make font size scale with the viewport](https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container)

## Author

- Frontend Mentor - [@vhetet](https://www.frontendmentor.io/profile/vhetet)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`
Use gh-pages to deploy the app to the github page
