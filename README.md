# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Dhruv Sood**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/obtainable-bead-beryl

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [X] User can view statistics after winning game on time taken and number of guesses left
* [X] Styling added to center-align all items and view time remaining at bottom
* [X] Alert pops up at every point user guesses a sequence correctly

## Video Walkthrough

Here's a walkthrough of implemented user stories:
* Random Patterns
![Random Patterns](https://imgur.com/a/6QCSN9N.gif)
<br>

* Strikes
![Strikes](https://imgur.com/a/PG2X8q1.gif)

* Timer
![Timer](https://imgur.com/a/J2jw65M.gif)

* Game end
![Game end](https://imgur.com/a/4Bz4tnz.jpg)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used YouTube and Google images to retrieve the sound clips for each of my buttons. 

Images: 
* [Sin](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.thenounproject.com%2Fpng%2F1176481-200.png&f=1&nofb=1)
* [Guitar](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Felectric_guitar%2Felectric_guitar_PNG24176.png&f=1&nofb=1) 
* [Piano](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fpiano%2Fpiano_PNG10879.png&f=1&nofb=1)
* [Flute](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Flute-PNG-Transparent-Image.png&f=1&nofb=1)
* [Dog](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fdog%2Fdog_PNG50317.png&f=1&nofb=1)

Audio:
* [Sin](https://www.youtube.com/watch?v=rqRDla4zIZs)
* [Guitar](https://www.youtube.com/watch?v=SbZZ80siqcQ) 
* [Piano](https://www.youtube.com/watch?v=9IW976mL8Xg)
* [Flute](https://www.youtube.com/watch?v=llFvE71yj1w)
* [Dog](https://www.youtube.com/watch?v=aReRSVpg298)

[Learning how to use setInterval and clearInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

[Learning how to play audio and have it restart](https://stackoverflow.com/questions/13337197/how-to-restart-an-embedded-sound-in-javascript)


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
One of the challenges I encountered was in using parts of the assets folder, and it took me some time to figure out that it requires a src
link rather than a local path similar to the other website projects I have worked on. I also had to edit some of the audio clips so there
was no delay between the clip starting and any bit of audio playing. I made these edits using a piece of software known as Audacity. 
Another challenge I faced in creating this submission was with the optional task on setting a timer. I wanted the timer to only appear once
the pattern had fully been shown. However, since I had also decreased the clueHoldTime by 50ms with each iteration, and I was using seconds 
to kee track of this, I had to create a hotfix that was as accurate as it could be through estimation, by approximating that each iteration 
would take 1 "progress"'s worth of time less than what is shown. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I have worked on some web development projects in the past, but this was my first time working in Glitch. Other than providing a simple
way for beginners in web development, I was wondering what other benefits an online coding editor such as Glitch or JSFiddle might provide
compared to creating and running projects locally using a convential editor such as VSCode. I was also interested in learning more about 
custom browser events that utilise existing ones. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
After testing the app for a longer period of time, I noticed that it was a lot of motion to drag the cursor to each of the buttons and then to correct, 
so I would want to add a feature that would map a keyboard key (the numpad keys from 1-5) to each of the buttons and allow the user to trigger sounds 
and play the game in a similar fashion. I would also want to add a leaderboard that would be saved on a user's browser session using cookies that would 
keep track of all who had played the game and sort them in order of how quickly they were able to finish the game or their completion rates. 


## License

    Copyright Dhruv Sood

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
