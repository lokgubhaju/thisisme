import React from 'react';
import './App.css';

import Section from'./components/Section';

function App() {
  return (
    <div className="App">
      <header id="header">
        <h1>thisisme</h1>
        <p>Create cool images containing useful<br/>information about you and your work<br/>for your GitHub readme</p>
        <a href="#">Start</a>
      </header>
      <main id="main">
        <Section/>
      </main>
    </div>
  );
}

export default App;
