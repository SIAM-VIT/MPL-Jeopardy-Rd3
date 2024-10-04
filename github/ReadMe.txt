How to play:

1. Normal Rules

This game is optimized for 5 teams. Each team follows a turn order. let the teams be A, B, C, D and E

Assuming turn order is alphabetical, A will go first and select a category. (Tiebreakers and rapid fire are special rounds, only used at end)

Website operator hovers over card revealing the questions button. The button on click will redirect to the category question page.

Team playing chooses a point value, and the question is revealed. On reveal a timer starts in background. Easy questions have 15 seconds, medium have 30 and hard have 45

In addition to this time a 5 second buffer period to read the question is observed. (Exception for iconic dialogues, explained in the Questions readme)

Once time is up, a popup will display (Test positions of popup, be familiar with where it shows up)

After popup is seen, time ends and the team can submit a final answer. Only one answer will be accepted, answer is submitted once said in mike, answers lie with hosts.

Discussion within a team is allowed. Any external discussion or use of resources on the internet or elsewhere is not permitted.

According to the answer recieved, the scoreboard is updated, if correct, the points value on the card are updated. If incorrect, half the points value are deducted. (Eg: if a 500 point question is correct, 500 points are added. if wrong, 250 are deducted)

Every 3 rounds, the team with the lowest score is eliminated. If 2 teams have the same score, a tiebreaker round occurs. (Rules in questions ReadMe)

This elimination goes on until 2 teams remain (End of Round 3, 6 and 9 an elimination occurs), after this rapid fire takes place (Rules in questions ReadMe)

Team winning rapidfire (7 questions, first to 4 points wins)



2. Wildcards

Each category except tiebreaker and rapid fire has one. On opening a rapid fire question teams must bid their points (Auction style), team that bids the most points wins the rights to answer that question.

The teams with points > 0 can bid, any team cannot bid more points than they currently have. Bidding starts at 50 points and increments in 50.

If wildcard is answered correctly, points behind the wildcard are awarded to the team plus a powerup (in Scoreboard ReadMe), if incorrect, points bid are subtracted from the total.

The wildcard questions do not have a fixed difficulty, difficulty level and time to solve depends on the point value assigned to it

If a wildcard is pulled in the first round i.e before every team has a chance to play a regular question at east once, it is close. A different card from the same category is opened. However, the position of the wildcard is known by all teams.

Powerups are manually tracked


Before the event, make sure all cards are closed so no questions are revealed on opening category for the first time.



Homepage Tech Stuff:

Website is not reponsive.

All links, home takes to top of page, powerup and reset direct to scoreboard where all the popups are functional.

Scoreboard takes to scoreboard. Clicking powerup/reset on scoreboard triggers the respective popup.

All cards have a on hover effect, the navbar brand (MPL Logo) leads nowhere on any page.

All addresses (hrefs and src) are relative addresses, works perfectly on live server, for it to work on regular webpage (Not live server, double click html), change all addresses to full directory path.

All CSS files follow the same pattern in each section:
element names, classes, ids, pseudo elements