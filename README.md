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

#Problems/learnings along the way: The design implementaion took a bit longer than expected. Espacially the responsivnes was tricky to implement. I had to play around with different media query breakpoints and proper css styling for the svgs in order to get the sizing of each "player card" rigth, so they sit nice and smooth on all screen sizes. One issue could be the different intrinsict sizes and ratios of the svgs. There was some unexpected behaviour with css grid and the positioning of the items. The svg's collapsed/dissapeared, when I put on display grid on the player card container and placed the items. I had to explicitly set the width for the svgs, but this may be due to the grid algorithm. The trickiest part, was the little "player point details box" which indicates the current score of each player. After some struggles with choosing the right markup and css styling, I decided to use divs for each bracket with the pseudo after element alongside flexbox, which gave me the best result.

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
