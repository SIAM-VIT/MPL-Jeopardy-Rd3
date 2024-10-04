On scoreboard the powerup button will randomly generate a powerup and display it in a popup (Favicon exists here as well, tech must update api)

On scoreboard page, the reset button will trigger a popup verifying if it was an accident or reset is required. Clicking cancel does nothing, Clicking proceed will set all scores to 0 (Favicon exists here as well)

Website operator must update all team names in the scoreboard html file prior to starting the round

The scoreboard isn't dynamic so team with most points won't be in 1st, second most in 2nd etc.

The toggle button is set to 1x and 2x, 2x will add/subtract 100 points on using the add or subtract buttons, 1x will add/subtract 50

Powerup Functions (All powerups can only be used by a team if it's their turn and are one time use):
Skip (30%): Used after question revealed. Skip your turn, you don't risk losing any points but the question remains open, no one else can select it.
Redo (30%): Used after question revealed. Close the current question (Refresh page to stop timer), select a new question from the same category.
Boosted Points (10%): Used before question revealed. The next question selected is worth 1.5 times the original points value if answered correctly. If incorrect points lost are the same. 
Eg- a 500 points question with boosted points is worth 750 points (if answered correctly), BUT if answered incorrectly 250 points are deducted.
Skip Others (10%): Before question is revealed. You can skip some other team's next turn.
Steal Powerup (20%): Before question is revealed. Steal some other teams powerup. 
