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

#Problems along the way: The design implementaion took a bit longer than expected. Espacially the responsivnes was tricky to implement. I had to play around with different media querry breakpoints and proper css rules for the svgs in order to get the sizing of each "player card" rigth, in order to let them sit nice and smooth on all screen sizes. Maybe because of the different intrinsict sizes and the ratio of the svgs. There was some weird behaviour with css grid and the positioning of the items. The svg's collapsed/dissapeared, when I put on display grid on the player card container and placed the items. I had to explicitly set the width for the svgs. The trickiest part, was the little "player point details box" which indicates the current score of each player. After some struggles with the markup and the css styling, I decided to use divs for each bracket with the pseudo after element alongside flexbox, which gave me the best result.
