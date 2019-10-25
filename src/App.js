import React from 'react';
import FTimg from './shooting-free-throw.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={FTimg} className="App-logo" alt="logo" />
        <p>
          Building through <code>src/App.js</code> file.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Free Throw MVP
        </a>
      </header>
    </div>
  );
}

export default App;
