import React from 'react';
import './App.css';
import { Button } from "@mui/material"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+"/img/logo.svg"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={()=> {console.log("clicked button")}}>Click me</Button>
      </header>
    </div>
  );
}

export default App;
