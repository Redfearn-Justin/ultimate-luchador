# Ultimate-Luchador
### Final project - Matt, Justin, Gavin

*Luchador Web Game with PvP and RPG elements*

### Project Insight

   Ultimate-Luchador is a contemporary browser-based PvP video game with RPG elements entwined within, complete with a "Luchador" theme. The goal of the game is be the Luchador with the most "fame"! How do you get fame? Why, by winning fights of course! Along the course of the game, players get to change moves, update their stats through fights, and fight on to get the top. However, players will only get a certain amount of "fights" at a time: this being represented by "tickets". These "tickets" will replenish at a said rate, at a predetermined amount of time. 

### Technologies utilized

* **Backend**: Node.js, React.js, React-Redux, SQL, various Node.js packages, Firebase, Cron-job
* **Frontend**: HTML, CSS, Javascript, Firebase
* **Other**: MVC, MySQL, Heroku

## Instructions

### Sign In Process

**New Players**

1) Click the "Create Account" button

2) Enter your email, and a password for your account

* These will be used to save all your progression data

3) Upon successful creation, you'll automatically be logged into the game

**Returning Players**

* If your existing browser session is in tact, you'll automatically be logged in with the account you initially signed up with.

**If not**

1) Press the "Log In" button

2) Enter the credentials you used to set up your original account

3) Upon successful log in, you'll automatically be logged into the game

### Gameplay

* As mentioned above, Ultimate-Luchador has contemporary "RPG" elements; With more time spent within the game, you'll gain: experience, new moves, updated stats, and (with more fame) face tougher foes. 
* Fighting mechanics are auto-generated, meaning the player doesn't actually participate in the fight itself.
* Upon entering a fight, based on the moves your Luchador has been *taught*, the fight will be simulated in an alternating fashion. This is where a move's *power* and *speed* come into play.
   * Additionally, when in the fight screen, you can either select the "fight" button - which will slowly render the process of the fight. If you're pressed for time, feel free to press the "skip" button to jump immediately to the "results" page.
