// Add some basic JS

// Create h2 element
const h2 = document.createElement("h2");
h2.textContent = "The big boy you are!";

// Add the h2 element to the body element in the DOM
document.querySelector('body').appendChild(h2);

// Create a paragraph element
const p = document.createElement('p');
p.textContent = 'Remember, losing is part of the game!'

// Add the p element to the body element in the DOM
document.querySelector('body').appendChild(p);