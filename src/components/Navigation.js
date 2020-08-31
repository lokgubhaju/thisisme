import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation">
            <ul>
                <li><NavLink to="/" exact activeStyle={{ 'color':'#3aad7f' }}>Home</NavLink></li>
                <li><NavLink to="/s/personal" exact activeStyle={{ 'color':'#3aad7f' }}>Personal</NavLink></li>
                <li><NavLink to="/s/programming" exact activeStyle={{ 'color':'#3aad7f' }}>Programming</NavLink></li>
                <li><NavLink to="/s/technologies" exact activeStyle={{ 'color':'#3aad7f' }}>Technologies</NavLink></li>
                <li><NavLink to="/s/education" exact activeStyle={{ 'color':'#3aad7f' }}>Education</NavLink></li>
                <li><NavLink to="/s/job" exact activeStyle={{ 'color':'#3aad7f' }}>Job</NavLink></li>
                <li><NavLink to="/s/certificates" exact activeStyle={{ 'color':'#3aad7f' }}>Certificates</NavLink></li>
                <li><NavLink to="/s/social" exact activeStyle={{ 'color':'#3aad7f' }}>Social</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;