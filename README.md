# Speedrun Portfolio

## Description & Motivation
This project is a collection of all the speedruns I have done over the years, consisting of information for each game and category such as what times I have achieved, when those times were achieved, videos for each run, etc. I also included a brief history of how I came to be a speedrunner, as well as sections about my latest and future runs. I wanted to incorporate something I'm passionate about into my programming practice and saw this as a good opportunity to do that! 

## Technologies Used
* MERN stack (MongoDB, React.js, Express.js, Node.js)
* CSS
* Bootstrap
* GraphQL / Apollo Server
* Node-fetch
* [Speedrun.com API](https://github.com/speedruncomorg/api)


## Link to Deployed Application
[Direct link to webpage](https://speedrun-portfolio.herokuapp.com/)

## Preview
![A preview of my portfolio](https://github.com/ottobisno/speedrun-portfolio/blob/main/client/src/img/other/preview.JPG)

## Challenges
* Seeding the database with Speedrun.com's API took some effort - almost everything needed to be reformatted. This was more time consuming than anything, but it was also probably one of the most satisfying aspects of working on this project.
* Bootstrap operates from a mobile-first perspective and I definitely approached this project from a desktop-first perspective. This lead to my CSS media queries being a bit messy and unintuitive in the end. In hindsight I would approach the styling of this project differently. 
* Styling the speedrun cards such that the images never leave the borders at any given resolution was a pain. I felt I had to do a lot of hacky fixes to get them to work. In the end they look fine, but I'm not proud of the way the CSS is written for them.

## Future Improvements
* Organize games and categories in a manual order by adding an "Order" property to the game and category models in the database.
* Add an arrow button to take the user back to the top of the page once they have scrolled near the bottom.
* Look into conditionally taking the user back up to the "My Speedruns" section based on where they are on the page. It's convenient to be taken there when you click one of the "More Details" buttons from somewhere below this section, but it's quite annoying otherwise.
* Add a brief description of my history with each game, to be shown when the user clicks one of the games' respective "More Details" buttons.

## Questions

For any questions, please reach out to [ottobisno143@yahoo.com](mailto:ottobisno143@yahoo.com)