Rock, Paper, Scissors Game

#Task: Design and code a functional, responsive rock, paper, scissors game.

#Goal: Practice and recap JavaScript bascics by impleting the so far learned theory concepts. (Variables, functions, arrays, DOM manipulation, event handlers, conditionals, for loops)

#Technology: I choosed to go with HTML and basic, but modern vanilla CSS (CSS Grid and Flexbox), to focus on JavaScript. So no fancy frameworks or build tools for this game.

Plan:

1. Brainstorming: write down basic design and functionality ideas
2. Research design assets, fonts and colors
3. Design the app using adobe XD
4. Write basic hmtl markup
5. Code basic layout with CSS
6. Implement functionality with JavaScript
7. Implement a color theme switch

#Problems/learnings along the way: The design implementaion took a bit longer than expected. Espacially the responsivnes was tricky to implement. I had to play around with different media query breakpoints and proper css styling for the svgs in order to get the sizings of the elements rigth, so they sit nice and smooth on all screen sizes. The svgs have different intrinsict sizes, which led to some weird missalignment of the svg boxes and the layout on desktop looked a bit of.

There was some unexpected behaviour with the svgs in firefox (but not in chrome). The svg's collapsed/dissapeared, when I put on display grid on the player card container and placed the items by using the grid algorithms, as long as the size was set in %. I had to explicitly set the widths in px or use vw units to make it work. I decided to go with viewport units, so the svgs wouldnt loose their dynamic/responsive sizing. Lastyl I also specified an aspect ratio. This helped with the overall spacing and layout without having to worry about media query breakpoints too much and still make it look okayish on different screen sizes. Since the focus of this little game, was to practice some JavaScript concepts.

The little "player points details box" which indicates the current score of each player was also tricky to implement. After some struggles with choosing the right markup and css styling, I decided to use divs for each bracket with the pseudo after element alongside flexbox, which gave me the best result.

When debbuging code, always check for typos first and make sure the variable naming is self explaining. I wasted a lot of time searching for mistakes in the code and the logic, and it turned out that I used the wrong variable.

#game logic:
Build a rock-paper-scissors game:

Game logic:

1. Two players in a best of three game
2. One unique array for each player that stores the current points/score
3. A variable for each player that stores the current hand of each player
4. "Hands" array that’s stores all possible hands: rock, paper and scissors
5. A function that generates a random number and stores it in a variable and finally picks a rondom item from the hands array for each player
6. A function with an if-else statement that checks the current hand of each player and decides which hand wins the current round - the winner of each round should be displayed on the interface and the score added to the score/point array
7. A button to start the game: this button invokes the getHand() function to generate the hands, stores these to the currentHand variable for each player (the game should end, if a player has 3 points - so the button should also check if a player already has 3 points)
8. The winner of the game should be displayed on the interface
9. A button to reset the game: a function that sets the game to its initial state or optional reset the game autoimatically after one player wins the game
