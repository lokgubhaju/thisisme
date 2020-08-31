import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <header id="header">
            <h1>thisisme</h1>
            <p>Create cool images containing useful<br/>information about you and your work<br/>for your GitHub readme</p>
            <Link to="/programming">Start</Link>
        </header>
    );
}

export default Home;