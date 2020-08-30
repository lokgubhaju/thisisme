import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <h1>thisisme</h1>
        <p>Create cool images containing useful information about you and your work</p>
        <a href="#">Start</a>
      </header>
      <main id="main">
        <section id="programming-section" className="section">
          <h1>Programming languages</h1>
        </section>
        <section id="technologies-section" className="section">
          <h1>Technologies</h1>
        </section>
        <section id="education-section" className="section">
          <h1>Education</h1>
        </section>
        <section id="work-section" className="section">
          <h1>Work</h1>
        </section>
        <section id="certificates-section" className="section">
          <h1>Certificates</h1>
        </section>
        <section id="personal-section" className="section">
          <h1>Personal information</h1>
        </section>
        <section id="contact-section" className="section">
          <h1>Contact links</h1>
        </section>
        <section id="finishing" className="section">
          <h1>This is how your image(s) look(s):</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
