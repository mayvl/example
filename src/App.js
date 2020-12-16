import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {counter}
        </p>
        <div>
          <button onClick={() => { setCounter(counter + 1) }}>
            Increase counter
        </button>
          <button onClick={() => { setCounter(counter - 1) }}>
            Decrease counter
        </button>
        </div>

      </header>
    </div>
  );
}

