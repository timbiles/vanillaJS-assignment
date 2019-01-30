<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will be creating practicing manipulating the DOM using vanilla Javascript and an html file.

## Setup

Fork and clone this repository and open the folder in your code editor. You can use live-server to see real-time changes from your code in the browser.

## Step 1

### Summary

In this step, we will create a Javascript file and connect it to our HTML file.

### Instructions

- Create a file called 'index.js'.
- Connect that script file to the HTML page.
  - Feel free to console.log a message to test the connect from your script file.


### Solution

<details>

<summary> <code> /index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <table>
      <tr class="row">
        <td id="0" onclick="play(0)"></td>
        <td id="1" onclick="play(1)"></td>
        <td id="2" onclick="play(2)"></td>
      </tr>
      <tr class="row">
        <td id="3" onclick="play(3)"></td>
        <td id="4" onclick="play(4)"></td>
        <td id="5" onclick="play(5)"></td>
      </tr>
      <tr class="row">
        <td id="6" onclick="play(6)"></td>
        <td id="7" onclick="play(7)"></td>
        <td id="8" onclick="play(8)"></td>
      </tr>
    </table>
    <span>Player </span>
    <span id="player">X</span>
    <span>'s turn</span>
    <script src="./index.js"></script>
  </body>
</html>

```
</details>

## Step 2

### Summary

In this step, we will reassign value of the "player" from X to O when the board is clicked.

### Instructions
- In index.js, create a function called 'play'. This will be activated when any of the boxes are clicked. 
- In the play function, using 'getElementById', identify the span with the id of 'player'. set that equal to a variable. 
- Using that variable, reassign the content of that element to be 'O' if it is 'X', or vice-versa. 


### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
const play = () => {
  const player = document.getElementById('player');

  if (player.innerText === 'X') {
    player.innerText = 'O';
  } else {
    player.innerText = 'X';
  }
};
```

</details>

## Step 2

### Summary

In this step, we will assign the player's value to the content of the square that is clicked.

### Instructions
- Open 'index.js'
- Add a parameter to the function 'play'.
- Using the passed in parameter and 'getElementById', grab the information of the element clicked. Set that equal to a variable.
- Using that variable, assign the square that is clicked to have the value of the current player.

- **Bonus Add an edge case that won't let you reassign a square that has already been clicked!

### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
const play = (val) => {
  const player = document.getElementById('player');
  const element = document.getElementById(val);

  if (player.innerText === 'X') {
    player.innerText = 'O';
    element.innerText = 'X'
  } else {
    player.innerText = 'X';
    element.innerText = 'O'
  }
};
```

</details>






## Black Diamond 


## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2019. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p># vanillaJS-assignment
