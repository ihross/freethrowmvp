import React from 'react';
import FreeThrowLogo from './shooting-free-throw.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={FreeThrowLogo} className="free-throw-logo" alt="logo" />
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
