import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const performOperation = (operator) => {
    const value = parseFloat(input);
    if (isNaN(value)) return;

    switch (operator) {
      case 'add':
        setResult(result + value);
        break;
      case 'subtract':
        setResult(result - value);
        break;
      case 'multiply':
        setResult(result * value);
        break;
      case 'divide':
        if (value !== 0) {
          setResult(result / value);
        } else {
          alert('Cannot divide by zero!');
        }
        break;
      default:
        break;
    }
  };

  const resetInput = () => setInput('');
  const resetResult = () => setResult(0);

  return (
    <div className="calculator">
      <h1>Simplest Working Calculator</h1>
      <h2>{result}</h2>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter number"
      />
      <div className="buttons">
        <button onClick={() => performOperation('add')}>add</button>
        <button onClick={() => performOperation('subtract')}>subtract</button>
        <button onClick={() => performOperation('multiply')}>multiply</button>
        <button onClick={() => performOperation('divide')}>divide</button>
        <button className="reset" onClick={resetInput}>reset input</button>
        <button className="reset" onClick={resetResult}>reset result</button>
      </div>
    </div>
  );
}

export default App;

