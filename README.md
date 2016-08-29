##Summary of the work:

*I spent just about 3 hours on this challenge unfortunately I didn’t get a chance to work on it any further.
*This is an angular.js based app
*All styles were coded in Sass first and then converted into css
*All files related to this challenge (all frontend files) are inside the ‘/public' folder.
*To run the app easier, I added a node.js/express.js web server; located at one level higher that the public folder

**To run**:

Assuming that you currently have node.js and npm installed on your machine:

Please run this in debug mode, at the root folder of the unzipped package:

DEBUG=morganStanleySymbolPriceReq:* npm start

It can then be viewed at: localhost:3000



##Answers to questions:

###Given more time, how would you improve your solution? 

If I had more time, I would:

* Improve the styling (gradients, SCSS OOP, etc)
* Would add unit tests, (TDD, Protractor)
* Make a flyout menu with css transitions
* Do more error handling / reporting
* Add caching
* Make use of localStorage to keep the historical prices in the local storage and minimize the size of the data object that is kept in memory. Would have a maxAge property placed in the key/values of the localStorage as well to fetch new historical data after each trading day has finished (Or any other interval if applicable).
* Would add an info panel where the symbol data would get displayed at, when the user clicks any of the buttons (i.e.. 5, 25, 50)

###How would you distribute your component to other teams?

** I would use git to keep track of the changes and share the repository with the team
** Would create a git branch and create a pull request
** Would add reviewers (Member of the team or external teams if applicable) to the pull-request 
** Create a discussion with the team to ensure the solution is on par with everyone else’s expectations and matches requirements on a more broader scope