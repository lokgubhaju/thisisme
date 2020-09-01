import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <header id="header">
            <h1>thisisme</h1>
            <p>Create cool images containing useful<br/>information about you and your work<br/>for your GitHub readme</p>
            <Link to="/s/personal">Start</Link>
            <ul>
                <li>This work is under the <a href="https://github.com/JoseDeFreitas/thisisme/blob/master/license">MIT license</a></li>
                <li><Link to="/i/privacy-policy" exact>Privacy policy</Link></li>
                <li><a href="https://github.com/JoseDeFreitas/thisisme/blob/master/code-of-conduct.md">Code of conduct</a></li>
                <li><a href="https://github.com/JoseDeFreitas/thisisme/blob/master/contribute.md">Contribute</a></li>
            </ul>
        </header>
    );
}

export default Home;