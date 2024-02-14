import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = ({ value }) => {
  // A function that performs an expensive calculation
  const calculateResult = (input) => {
    console.log("Calculating result...");
    // Imagine a time-consuming calculation here
    return input * 2;
  };

  // Use useMemo to memoize the result of the calculateResult function
  const memoizedResult = useMemo(() => calculateResult(value * value), [value]);

  return (
    <div>
      <p>Input value: {value}</p>
      <p>Memoized Result: {memoizedResult}</p>
    </div>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState(5);

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value, 10))}
      />
      <ExpensiveCalculationComponent value={inputValue} />
    </div>
  );
};

export default App;
