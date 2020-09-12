import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation">
            <ul>
                <li><NavLink id="home-button" to="/" exact>Home</NavLink></li>
                <li><NavLink to="/s/personal" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Personal</NavLink></li>
                <li><NavLink to="/s/programming" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Programming</NavLink></li>
                <li><NavLink to="/s/technologies" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Technologies</NavLink></li>
                <li><NavLink to="/s/education" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Education</NavLink></li>
                <li><NavLink to="/s/job" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Job</NavLink></li>
                <li><NavLink to="/s/certificates" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Certificates</NavLink></li>
                <li><hr id="separator"/></li>
                <li><NavLink to="/s/result" exact activeStyle={{ 'backgroundColor':'hsl(125, 75%, 41%)','color':'hsl(0, 0%, 100%)' }}>Result</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;