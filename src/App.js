import React, { useState } from 'react'
import './App.css';
import Characters from "../src/components/Characters";

export default function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Characters />

      </header>

    </div>
  );
}

