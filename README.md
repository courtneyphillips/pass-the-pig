#Pass-the-Pig

---

## Synopsis

Pass-the-Pig built by [Erin Collins](https://github.com/theeerincollins) and [Courtney Phillips](https://github.com/courtneymaepdx). Crafted as part of the Spring 2015 JavaScript curriculum at [Epicodus](https://www.epicodus.com/).

## Background

Pass-the-Pig is a pre-existing spin on the on the traditional game of "Pig Dice" that utilizes small plastic pigs instead of dice. As described in the [Wikipedia Article](http://en.wikipedia.org/wiki/Pass_the_Pigs): 

*Each turn involves one player throwing two model pigs, each of which has a dot on one side. The player gains or loses points based on the way the pigs land. Each turn lasts until the player throwing either rolls the pigs in a way that wipes out their current turn score or decides to stop their turn, add their turn score to their total score and pass the pigs to the next player. The winner is the first player to reach a predetermined total score.*

## Scoring

### Game Rules:

The Pass-the-Pigs application follows the same scoring principles as the traditional game. Also described in the [Wikipedia Article](http://en.wikipedia.org/wiki/Pass_the_Pigs): 

#### Single pig
  -   The pig is lying on its side - 0 Points
  -   Razorback - The pig is lying on its back - 5 Points
  -   Trotter - The pig is standing upright - 5 Points
  -   Snouter - The pig is leaning on its snout - 10 Points
  -   Leaning Jowler - The pig is resting on its snout and ear - 15 Points
  
#### Both pigs
  -   _Sider_ - The pigs are on their sides, either both with the spot facing upward or both with the spot facing downward - 1 Point
  -   _Double Razorback_ - The pigs are both lying on their backs - 20 Points
  -   _Double Trotter_ - The pigs are both standing upright - 20 Points
  -   _Double Snouter_ - The pigs are both leaning on their snouts - 40 Points
  -   _Double Leaning Jowler_ - The pigs are both resting between snouts and ears - 60 Points
  -   _Mixed Combo_ - A combination not mentioned above is the sum of the single pigs' scores
  -   _Pig Out_ - If both pigs are lying on their sides, one with the spot facing upwards and one with the spot facing downwards the score for that turn is reset to 0 and the turn changes to the next player
  -   _Makin' Bacon (or Oinker)_ - If both pigs are touching in any position,[3] then the total score is reset to 0 and the turn changes to the next player
  -   _Piggyback_ - If one pig lands completely resting on top of the other, then the player is out of the game.
  
  ### Code Implementation:
  
  
  

## Links

  - Heroku: www.samplelinkhere.com
  - GitHub: www.samplelinkhere.com

## Installation

#### Gems

Pass-the-Pig uses the following gems:

  - Capybara
  - Sinatra
  - RSpec
  - Pry
  - ActiveRecord
  - etcetera
  - etcetera

To install, run `$ gem install bundle` in the command line. Or whatever else you have to do. 

#### Databases

Additionally, Pass-the-Pig utilizes databases via ActiveRecord. Should you clone this repository, simply do the following to establish and prepare similar databases for your own use:

1. Launch the Postgres server by running `$ postgres` in the terminal.
2. Navigate to the project folder and run `$ rake db:create`.
3. Run `$ rake db:migrate` to migrate the changes detailed in db into the database.

## Tests

Both method and integration tests for Pass-the-Pig utilize the RSpec. Simply run `$ gem install rspec`, if it's not already installed, and then the command `rspec`, while located in the project's file.

## Contribute

  - Issue Tracker: https://github.com/courtneymaepdx/PROJECTNAME/issues
  - Source Code: https://github.com/courtneymaepdx/PROJECTNAME
  - Pull Requests: https://github.com/courtneymaepdx/PROJECTNAME/pulls
  
## Development Roadmap

Pass-the-Pig is still a work in progress. The following are features, fixes and tweaks to be implemented as the project develops. Any additional suggestions can be contributed via the Issue Tracker above.

  - Blah
  -

## Contact

Questions, grievances and hellos can be directed to Courtney at <courtney.mae.phillips@gmail.com>.

## License

The MIT License (MIT)

Copyright (c) 2015 Courtney Phillips

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
