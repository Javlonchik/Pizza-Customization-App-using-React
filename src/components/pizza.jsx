import React, { useState } from 'react';

function PizzaCustomization() {
  // useState hook to store the selected size and toppings
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);


  // sizes and toppings data
  const sizes = [
    { name: 'Normal', price: 4.99 },
    { name: 'Family', price: 7.99 }

  ];
  const toppings = [
    { name: 'Cheese', price: 1.99 },
    { name: 'Pepperoni', price: 1.99 },
    { name: 'Salami', price: 1.99 },
    { name: 'Bacon', price: 1.99 },
    { name: 'Mushroom', price: 1.99 },
    { name: 'Tomato', price: 1.99 },
    { name: 'Sausage', price: 1.99 },
    { name: 'Onion', price: 1.99 },
    { name: 'Black olives', price: 1.99 },
    { name: 'Green pepper', price: 1.99 }
  ];

  // function to handle size selection
  const handleSizeSelection = (e) => {
    setSelectedSize(e.target.value);
  }

  // function to handle topping selection
  const handleToppingSelection = (e) => {
    const topping = e.target.value;
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  }

  // function to calculate total cost
  const calculateTotalCost = () => {
    let totalCost = 0;
    if (selectedSize) {
      totalCost += sizes.find((size) => size.name === selectedSize).price;
    }
    selectedToppings.forEach((topping) => {
      totalCost += toppings.find((t) => t.name === topping).price;
    });
    return totalCost.toFixed(2);
  }

  return (
    <div>
      {/* Size selector */}
      <div>
        <p className='titles'>Size:</p>
        {sizes.map((size) => (
          <div key={size.name}>
            <input className='spacing' 
                id={size.name} 
                type="radio"
                name="size"
                value={size.name}
                onChange={handleSizeSelection}
            />
            <label htmlFor={size.name} >{size.name} (${size.price})</label>
          </div>
        ))}
      </div>
      {/* Toppings selector */}
      <div>
        <p className='titles'>Toppings:</p>
        {toppings.map((topping) => (
          <div key={topping.name}>
            <input className='spacing'
                id={topping.name}
                type="checkbox"
                value={topping.name}
                onChange={handleToppingSelection}
            />
            <label htmlFor={topping.name}>{topping.name}</label>
          </div>
        ))}
      </div>
      {/* Summary */}
      <div>
        <p className='titles'>Summary:</p>
        {selectedSize ? `${selectedSize} pizza, Toppings: ${selectedToppings.join(', ')}` : 'No size selected'}
        <br />
        <p className='titles'>Total cost: <span className='price'>${calculateTotalCost()}</span></p>
      </div>
    </div >
    );
}

export default PizzaCustomization;