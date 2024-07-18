import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === '.') {
      const parts = display.split(/[+\-*/]/);
      const currentNumber = parts[parts.length - 1];
      if (currentNumber.includes('.')) return;
    }

    if (/[+\-*/]/.test(value)) {
      if (/[+\-*/]$/.test(display)) {
        if (value === '-') {
          setDisplay(display + value);
        } else {
          setDisplay(display.replace(/[+\-*/]+$/, value));
        }
      } else {
        setDisplay(display + value);
      }
    } else if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  const calculateResult = () => {
    try {
      const result = evaluate(display.replace(/--/g, '+').replace(/\*-/g, '* -'));
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div id="container">
      <h1>JavaScript Calculator</h1>
      <div id="display">{display}</div>
      <div id="buttons">
        <button id="clear" onClick={clearDisplay}>AC</button>
        <button id="divide" onClick={() => handleClick('/')}>/</button>
        <button id="multiply" onClick={() => handleClick('*')}>*</button>
        <button id="subtract" onClick={() => handleClick('-')}>-</button>
        <button id="seven" onClick={() => handleClick('7')}>7</button>
        <button id="eight" onClick={() => handleClick('8')}>8</button>
        <button id="nine" onClick={() => handleClick('9')}>9</button>
        <button id="add" onClick={() => handleClick('+')}>+</button>
        <button id="four" onClick={() => handleClick('4')}>4</button>
        <button id="five" onClick={() => handleClick('5')}>5</button>
        <button id="six" onClick={() => handleClick('6')}>6</button>
        <button id="equals" onClick={calculateResult}>=</button>
        <button id="one" onClick={() => handleClick('1')}>1</button>
        <button id="two" onClick={() => handleClick('2')}>2</button>
        <button id="three" onClick={() => handleClick('3')}>3</button>
        <button id="zero" onClick={() => handleClick('0')}>0</button>
        <button id="decimal" onClick={() => handleClick('.')}>.</button>
      </div>
      <h3>by Tiffany</h3>
    </div>
  );
}

export default App;
