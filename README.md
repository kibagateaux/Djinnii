https://kibagateaux.github.io/Djinnii/

If getting undisclosed packaging error it is probably from "react-native-moves-api" custom package
https://github.com/kibagateaux/node-moves



Ideas : 
  -How to incorporate dietary habits into game?
  -Does how they feed imaginary Djinn reflect how they feed themmselves?
  -Ping them at "eating' times and ask to be fed what player is eating, only works if we know theyre eating habits or they follow general pattern
  -Health stats affect both character and activity stats
  -What if all users contribute to a universal Avatar? A universal psyche essentially a mrker for how healthy society a whole is

Make more game-y / active :
  -Find a genie sprite or something to make it seem less like a real person
  -Turn activity into stats, avg calories / day = stamina, total time active per week = intelligence, etc
  -Djinn gets restless if 1 hour without Moves API notif so they tells you to bring them for a walk
  "Feed" it with cake, meat, fruit which affect health stats
  -Rewarded for going to new places in the world
  -Adapt it into existing games like soccer. Each player is wearing their Djinn on their arm, playing like a regular game. E.g. They have all paired to say they are playing together. Random timer (or goal) happens and Djinns notify players of rule/team/objective change in the game. 
  -App pings you motivationally during exercise. "Your Djinn is working out too, blah blah blah, yay teamwork!" 

$ "Play Day" serves 2 functions:
  Review each event and alter stats table, etc
  Educate user on their activity lifecycles

Incorporate food buying into app with amazon mobile pay. If we see they are not buying the right foods suggest foods directly

App Features :
  $ Scrollable multiple days
  More monsterous Djinn

  Make it seem more like you are taking care of a pet
    Add feed function
  Proactive nudging. If it needs to run it will display/push notification running to motivate you



Code Features :
  walk function to handle nested activities in "place"s
  Seriously need to normalize data structures on backend // Do this in leiu of ^^^
  Very important to add geolocation to all possible data, even double checking Moves data


  Design Patterns:
    - Invoking Lambdas that only update DB and returns empty to caller, Components call data straight from DB as single source of truth. This is because more things than just the resource updated will be affected (e.g. running to stats, eating to emotion, emotion to relationships) so we will save pulling in all updates at once and wait for the data to be called when needed. When using Apollo this will be optimized further with GraphQL, frameowork, caching, etc.
    - All calculations should be base 6 to align with time. (e.g. margins are base 6 or divisible by 6)


Data :


App Description :

  **Abstract:** This is not supposed to replicate users real life behavior. It is an a fun, educational app that brings to light a variety of life tips, mainly concerning nutrition and fitness while also touching on psychology, meditation, and social aspects of life. 

  ^fck that **Abstract 2.0** This app is at it's purest an "Abstraction of Self". It will be your mirror image in every meaningful way while still being it's own person. It is a friend,
  an advisor, a mom, everything it needs to be in order to help you perform better.

**WHY**
  Teaches growth mindset to create positive feedback cycles between different aspects of your life. Based on scientific (sleep impacts, screen time) and behavioural design studies (nudge principles, gamification, intrinsic motivation).


  **Djinn Stats Model**
  Financial 
    Take Mint data 
    Spending patterns in general and how they correlate with physical patterns (visiting locations, hours sleeping)
    Makes it easier to trackfood purchases
  Mental 
    Sleep patterns and how they affect nutritional habits, heart rate, etc.
    Access Ginger.io app data? 
  Nutrition
    Demonstrates how diets and food groups affect disparate parts of your health (high sugar intake affects mental health, eating out affects financial health)
  Exercise



App Rules : 
  Exercise x minutes per week && y days per week (+str, stm, happiness | - )
  Interact with nature and with other people (+ happiness, int,  | -)
  Food intake affects stats (+ veg, frt, fat, hyd | - sgr, )
  Sleep ( +happiness)
  Resilience? Codify how long they can work out
  Moderation 





  User Stories 
  |Name|Use Case|Other UX things|
  |_________|____________|___________|
  |Cherbroni Myerson| Started using it school through his gym class. She and her friends picked up on it and use it outside of school when playing in the park and at basketball practice| **blah blah blah**|

# Degbugging Help
Do not use `awsmobile pull` it does not have all the right resources configured
TODOS:
------

Setup Lambda callback to auto confirm users on signup
Set up local version of game
Figure out how to redirect back to Login automatically if not logged in through router component (trouble would be accessing redux store or local storage)