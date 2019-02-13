<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Poker Hand

# Project Summary

In this project, we will practice manipulating the DOM using vanilla Javascript and an html file.

## Setup

Fork and clone this repository and open the folder in your code editor. You can use live-server to see real-time changes from your code in the browser.

## Step 1

### Summary

In this step, we will connect a javascript file to our HTML.

### Instructions

- Create a file in the root of the folder called `index.js`.
- Add a script tag at the bottom of `index.html` and connect the javascript file to our HTML file. You can test this connection by adding a console log if you would like.


### Solution

<details>
<summary> <code> /index.html </code> </summary>
</details>

## Step 2

### Summary

In this step, we will create input fields that can be used to pass information to `index.js`.

### Instructions

- In `index.html`, create 2 input fields under the main tag. The first input will be used to grab the id of each card, the second will be used to assign a style attribute to the card.
- Assign a specific id to both inputs.
- In `index.js`, using getElementById, grab the information of each input field. Assign a variable to each of those, and console.log the results.


### Solution

<details>

<summary> <code> /index.js </code> </summary>

```js
const id = document.getElementById('idInput');
const color = document.getElementById('colorInput');

console.log(id);
console.log(color);
```

</details>

## Step 3

### Summary

In this step, we will target each card using the input fields that we created.

### Instructions

- In `index.html`, assign a specific id to each section tag. These are our 4 cards. Have each id be a different playing card suit (diamonds, clubs, hearts, and spades).
- Create a button under the input fields. 
- Assign two attribute to the button: 
    - A specific id.
    - an onclick event called `setCard`.
- In `index.js`, using getElementById and the onclick event, create a function that captures the card element based off of the value (id) that is passed into first input field.
- Console.log the result, and check the developer console.


### Solution

<details>

<summary> <code> /index.html </code> </summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Styles</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
<body>
  <header>Poker Cards</header>
    <main>
        <section id='diamonds'><span>A</span><span>A</span></section>
        <section id='clubs'><span>A</span><span>A</span></section>
        <section id='hearts'><span>A</span><span>A</span></section>
        <section id='spades'><span>A</span><span>A</span></section>
    </main>
    <input id='idInput' type="text" placeholder='Set ID'>
    <input id='colorInput' type="text" placeholder='Set Color'>
    <button id='btn' onclick='setCard()'>Edit Card</button>
    <script src='./index.js'></script>
</body>
</html>
```

</details>

<details>

<summary> <code> /index.js </code> </summary>

```js
const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

const setCard = () => {
    const card = document.getElementById(id.value)
    console.log(card)
}
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
