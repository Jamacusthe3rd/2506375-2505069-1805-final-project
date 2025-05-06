---------------------------------------------------------------------------------------------------------

PROJECT NAME: The Vegabond Hero
---------------------------------------------------------------------------------------------------------
BY (METALLICODE)
MEMBERS: (James Stimpson, 2506375 and Matthew Hands, 2505069) 

LINK TO GITHUB REPO: [https://github.com/Jamacusthe3rd/2506375-2505069-1805-final-project.git]
LINK TO GITHUB PAGES: [https://jamacusthe3rd.github.io/2506375-2505069-1805-final-project/]

---------------------------------------------------------------------------------------------------------
CONTROLS:
WASD- Movement
SPACEBAR- Attack (partially non functioning)

---------------------------------------------------------------------------------------------------------
OVERVIEW OF PROJECT
---------------------------------------------------------------------------------------------------------
This project is an action-adventure game, where you play as a wandering warrior, making their living through completing tasks for people.
This project uses tiles to make it's levels. However unlike most games using tiles for the landscape, this has the notable feature of free movement, not being restricted to clunky tile-based movement.
the game follows themes of fantasy and exploration. It takes inspiration from The Legend of Zelda (1986).

---------------------------------------------------------------------------------------------------------
INDIVIDUAL CONTRIBUTION
---------------------------------------------------------------------------------------------------------
James Stimpson:
I did most of the coding for this project. I handled the Player's movement and attacking, the creation of Tile Maps, Level Transitions, and the HUD/healthbar. 
I also heavily developed the base code for NPCs and Enemies, allowing them to work effectively in the main project and be added to levels through the Tile Rules.
I created the narrative of the villager's struggle, using the dialogue cycle Matthew created to allow the townspeople to speak to the player. 
This was used to make the town feel welcoming, for the functional purpose of giving info to the player, but also for giving the player a sense of responsibility, to help those who have asked you to save their village.
I drew all of the sprites used in the final game. The tiles, the player, enemy, and NPCs. 

---------------------------------------------------------------------------------------------------------
THEMES
---------------------------------------------------------------------------------------------------------
Communication of our themes was done early on, ensuring we had an idea set in stone, so that we could effectively work forward from there.
For our game, we focussed heavily on an upbeat fantasy theme with lots of colour, making it pop.
The NPCs will be welcoming, full of energy in their speech, and will be safe from harm throughout gameplay.
The enemies will be colourful, and not look too scary, to keep in with the upbeat theme.

---------------------------------------------------------------------------------------------------------
DESIGN
---------------------------------------------------------------------------------------------------------
We planned to use a fan favourite fantasy monster, the Slime, as our enemies. 
They are incredibly versitile for a game, as they have a simple design, and can vary in colour to create enemies of different strengths, attack types, and movement patterns.
The use of these monsters fits perfectly with our fantasy theme, and the bright, varying colours of the enemies would make the game pop as intended in the theme.
Slimes are also an enemy that does not look too scry for the player.
The use of classes would also make implementing different enemies more straightforward to code.

Our planning for this can be seen in our Miro board, called CFTA Project. https://miro.com/welcomeonboard/K1BSY1J3MHBkSm1vRFBSV05oMDZaNlFISStSQ0c1NTNPYWFhclkyUFU1YTFsaFRwdnd4RmZqVmcxbFUzWGdmcEZJb0lQVmtSeWZiUmU4OUc5TzRxZTVacm95Y3NCSmNtVGZDQTdtTEpKVXVEWmpVSmNNMnpmOUFNOEpLekV0NlpBS2NFMDFkcUNFSnM0d3FEN050ekl3PT0hdjE=?share_link_id=132508916883

---------------------------------------------------------------------------------------------------------
AESTHETIC DIMENSIONS
---------------------------------------------------------------------------------------------------------
To achieve parity for technical aspects of the project, I worked on the main code, and any side code was sent to me by Matthew.
I would then edit and develop upon the side code to make it work within the main code, then add it.
As for artistic parity, we labelled specific pixel sizes for tiles, npcs, and enemies, to ensure all was drawn to fit within the same size tile. (32x32pixels drawing, upped to 50x50 in the code)
Most artwork was done by me only, so differences in artistic styles clashing was not an issue.
Thematic demands were easy to achieve parity between, as we set our theme and some initial story ideas early on in the project, and followed from there.
Overall, we successfully met our aesthetic goal, keeping our work uniform through the use of having one main coder, setting up set values for things like size of art/sprites, and early communication

---------------------------------------------------------------------------------------------------------
UNREALISED ASPECTS OF PROJECT
---------------------------------------------------------------------------------------------------------
In the setbacks section, I spoke about what we had to cut out of the game during our coding process. 
However, there are also many aspects we had in our early plan that we would have liked to include, along with a few others, thought of while making the game.

Attacking the enemies. This is something that needs to be added to make the game function as intended. 

display of enemies' health. will help the player to know how strong the opponent is.

Sound effects/music. Sound really helps for player engagement. 
It can also help to make a game fun, through things like a ding noise when the player does something successfully, like kill an enemy or find an object.

Magic attacks. These spells would use up bars of mana, displayed in the HUD with the healthbar. 
Would allow player to learn new spells as quest rewards. Some spells could be fireball, call lightning, and protection.

Heart crystals. Inspired by Terraria (2011), these items would permanently increase the player's max health.
These would be placed in a few secret areas, (such as the hidden room behind the far right house) and could also act as a quest reward.

Coin and shop system. Player collects coins from dead enemies, which can buy items and stronger weapons/armour.

---------------------------------------------------------------------------------------------------------
SETBACKS AND HOW THEY WERE OVERCOME
---------------------------------------------------------------------------------------------------------

One large setback in this project was Matthew explaining that he would be unable to meet his goals for the project, due to personal reasons. He showed resourcefulness in letting me know, as it gave us time to come up with a solution.
In the workplace, people can be off sick, or not in work for many reasons, but the work has to continue, on schedule. So I picked up most of the workload he was unable to complete, which I believe shows initiative, good teamworking, and managing group dynamics effectively. Along with supporting the progress of the project so deadlines in the workplace are met.
However, it did prove to be too much work with the approaching deadline, and some things had to be cut from our planning. The main thing cut was having fully functioning enemies.
The enemies are drawn, walk, and collide with the tiles, individually from each other. Being able to damage and kill the enemies, however, had to be cut from the final code.
Through these steps, I overcame the setback and completed many of the things we had planned for the project.

We chose to make the player movement be smooth between the level's tiles. 
It was inspired by The legend of Zelda's movement system, which I found added to the fun and freedom of the game compared to similar games with a more basic tile movement.
It did however create some trouble at a few stages of the game's development. For example, collision with tiles became considerably harder to implement. 
It brought many failed attempts (such as being able to walk between two adjacent collision tiles) before I created something that felt right, and worked as intended.
Once it worked, it was worth it. The movement felt fresh, and it made the gameplay able to be much more precise with hitboxes and triggers in an area, if we were to develop the game further past this assignment.
