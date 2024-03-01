# The Mine: No JS, CSS only adventure game

A Pen created on CodePen.io. Original URL: [https://codepen.io/mustafaismail22/pen/NeLMYB](https://codepen.io/mustafaismail22/pen/NeLMYB).

My contribution to the Codepen Halloween challenge. Lot's of stuff going on here. The concept initially started off as a simple 'Walk down a corridor and avoid traps' game, but it just kinda escalated from there. I decided i wanted to go up and down, solve puzzles etc.

The logic behind it is actually relatively simple and uses a 7+ year old technique. By clicking on an arrow (in this case a label), it checks the relevant input and then using the : checked pseudo selector, we can traverse down the DOM the correct amount of iterations and shift the entire viewport a whole 'segment' over. The lifts work entirely the same way except instead when we click down, we are actually checking the segment below.

As for game logic, we use the same concept again. The pickaxe for example is a label for a checkbox. When we click it, the checkbox is checked, then, when we click the boulder, we tell css to see if *both* the boulder and pickaxe inputs are checked. If it is, display it none, otherwise show a message.

Don't ask how i did the lock mechanism....i kinda fluked it somehow. Just a bunch of check boxes overlayed on top of each other. They hide when clicked to show the one underneath. As for how the code is checked, take a look at the checkCode mixin.

Everything else is pretty standard. Bunch of animations, a circular clipping mask for the game viewport etc.

I added a bunch of mixins to help add animated sprites, object comparisons and interactive items into the grid. Things like makeInteractiveObjectAt($objectID, $Segment, $Tile)

The sprites were drawn by me in Pyxel (would not have been able to do this if i hadnt bought it). Unfortunately i'm not a pixel artist, i really wish i was because this would really have the quality feel i wanted. If you're a pixel artist and would like to contribute though.... :)

I had some potential pitfalls along the way. One of them being an intermittent 413 error from Codepen. I think this had something to do with the compiled SASS being too large. It forced me to rethink some of the ways things were written. It is however, still very very un-optimised. It started off being extremely versatile, change a few numbers here and boom different sized level, all inputs and label generated for you. But now if i change a digit somewhere it will more than likely destroy the massive chain of interactions. 