import { useState } from 'react';
import './App.css';

function App() {
  const [showvalue, setvalue] = useState('');

  const [result, setResult] = useState('');

  const oprt = ['/', '*', '+', '-', '.'];

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => {
            showDisplay(i.toString());
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const showDisplay = (value) => {
    if (
      (oprt.includes(value) && showvalue === '') ||
      (oprt.includes(value) && oprt.includes(showvalue.slice(-1)))
    ) {
      return;
    }
    setvalue(showvalue + value);
    if (!oprt.includes(value)) {
      setResult(eval(showvalue + value).toString());
    }
  };

  const calculate = () => {
    if (showvalue === '' || oprt.includes(showvalue.slice(-1))) {
      return;
    }
    setvalue(eval(showvalue).toString());
  };
  const deleteLast = () => {
    if (showvalue === '') {
      return;
    }
    const value = showvalue.slice(0, -1);
    setvalue(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span> ({result})</span> : ''}
          {showvalue || '0'}
        </div>
        <div className="oprator">
          <button
            onClick={() => {
              showDisplay('/');
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              showDisplay('*');
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              showDisplay('+');
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              showDisplay('-');
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              deleteLast();
            }}
          >
            DEL
          </button>
        </div>
        <div className="digits">
          {createDigits()}
          <button
            onClick={() => {
              showDisplay('0');
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              showDisplay('.');
            }}
          >
            .
          </button>
          <button onClick={(e) => calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
