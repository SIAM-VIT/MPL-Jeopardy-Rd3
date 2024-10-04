There are no points for partial answers in any category

Rapid Fire rules:

2 Teams left, cards open in sequential manner, teams have 10 seconds to answer a questions, 5 seconds buffer to read question.

Total of 7 questions, first team to 4 points wins

6 questions are selected, one from each category, the 7th adopts VIT as a category

Answer is supposed to be written down and the written answer is taken and verified by hosts

All questions are formed with numeric answers, the team with answer closest to the actual answer wins a point, other team gets nothing

If both teams guess the same number, the teams are prompted to guess a different answer
If both answers are equidistant from the actual answer, both teams are prompted to guess a different answer, a hint is given regarding their guess however.
Eg:
If answer is 25 and both teams guess 13, both are to select a new answer.
If answer is 25 and one team guesses 13, the other guesses 37 (difference of 12 on both sides), team A is told to guess again, but their guess is lower than the answer. Team B is told to guess again but their guess was higher than the answer.


Tiebreaker Rules:

A question is presented, the teams then have 45 seconds to think of a funny answer + 5 seconds question reading buffer.

The answers are informed to the website operator anonymously. He will go to the tiebreaker scoreboard (From the tiebreaker page, clicking scoreboard leads to the tiebreaker scoreboard)

Answers are added in a random order, button opens a prompt, entering answer there will update it in the middle column. 

Audience votes on which answer they like more, answer with more votes wins the tie, that team progresses.





Comments for all html files (Each follow the same structure, present in the dialogue html file)
Comments for rapid fire and Tiebreaker is in the rapidfire html file.


Tech Stuff:
All Questions:
Clicking on a card flips it, if already flipped, the cards will close.

Make sure to click on the card. Due to margins and other parameters, clicking to the right of a card or around the card in general will also flip it. For proper functioning and to prevent random questions opening up, make sure to test for clicking or in general just click exactly on the card.

Closing a card post flipping will not stop the timer that starts after flipping.

All cards on flip run a timer based on difficulty (set using js).

Timers are set as time based on difficulty + 5 seconds to read the question.

Using JQuery, the file is set to use cache (via localStorage) to remember which cards have been opened. So even on refresh or leaving and returning to the page the cards that have been opened (Questions that have been answered) remain open (No need to remember which have been answered and which haven't)

There are 9 cards on both the rapid fire and tiebreaker screen, this is purely for symmetry purposes, 7 cards are functional

To make the others functional:
1. In cards.js, extend the array of the category (in start of file)
2. In flip mechanic of that section, copy the code of previous card flip and update numerical nomenclature. (Edit question in html)

For wildcards, once question is revealed, the proceed button won't close the popup, no way to close popup, use scoreboard to move onto next page

Changing wildcards:
1. Replace the content of a regular div with class "flip-card-back" with the div content of the wildcard div (swap the 2)
2. In js, swap the setTimeout lines, wildcard runs with the anonymous function answers. Don't change content, just swap the block of content.
3. Wildcards by default give initial popup 5 seconds after question is revealed, if bidding done, press the proceed button, on proceeding, the question is revealed in same popup, pressing proceed again will not close the popup, timer starts after question is revealed.
4. To change wildcard questions in the js file, for the particular category, target the .text element in the wildcard section in the start of each categorical card flip section.
5. Timers can be changed accordingly as well.
6. For logos, the wildcard uses .html to display the image once proceed is clicked on popup.


If there are any issues after the question is revealed and the timer must be stopped, simply refreshing the page (ctrl + R) will stop the timer, to restart it, close the question card and open it again.


Iconic Dialogues (Exception):
Timer everywhere (except logos) assumes time + 5 seconds buffer, in this section the timer works differently.

Total time = Time to solve + length of audio clip 

The section assumes that anchors announce something along the lines of "All questions of this category are guess the character and movie name based on the audio played.

If the button idea is scrapped and someone wishes to volunteer to manually handle audios, add a 3 second buffer to each question for coordination between operator and audio handler

The timer starts once the button to play the audio is pressed. On pressing the button, the card will flip, however this will not stop the audio or timer, simply click on the card again to flip it.

Only audios worth 500 and 600 points are allowed to be played twice. To play the audio again, the button must be pressed again, however the timer won't stop and they will lose time while listening to it again.


Logos (Exception):
The section assumes that anchors announce something along the lines of "All questions of this category are guess the logo based on the image displayed"

There is no 5 second question reading buffer set. Thus a 15 second question is set as 15 seconds, not 20 seconds