/*
Build a React app (pizza customization) that can do the following:
There should be a size selector (radio group) on the page where you can select the size of the pizza.
The values can be something like this: small/medium/large or normal/family.
Below the size selector toppings can be selected using checkboxes. There must be 4-10 items
in a list, each list item would have a checkbox in front of it that can be checked.
Under the toppings selector, create a summary box to show what you have selected, eg. Normal pizza, toppings: cheese, pepperoni, salami.
In addition, this box would have a cost calculator that calculates the cost of the pizza in real time.
The size options would be assigned to different prices.
The toppings would have the same price values. The currency can be any.
The page should have some basic design.

 

So it should look something like this:

 

Size:
- Normal ($4.99)
- Family ($7.99)

 

Toppings:
- Cheese
- Pepperoni
- Salami
- Bacon

 

Summary:
Family pizza, toppings: ...
Total cost: $x.xx
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
