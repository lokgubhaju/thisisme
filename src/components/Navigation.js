import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav id="navigation">
            <div>
                <NavLink to="/" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 54%)','color':'hsl(0, 0%, 100%)' }}>Home</NavLink>
            </div>
            <ul>
                <li><NavLink className="link-1" to="/s/personal" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Personal</NavLink></li>
                <li><NavLink to="/s/programming" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Programming</NavLink></li>
                <li><NavLink to="/s/technologies" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Technologies</NavLink></li>
                <li><NavLink to="/s/education" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Education</NavLink></li>
                <li><NavLink to="/s/job" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Job</NavLink></li>
                <li><NavLink to="/s/certificates" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Certificates</NavLink></li>
                <li><NavLink to="/s/social" exact activeStyle={{ 'backgroundColor':'hsl(219, 86%, 57%)','color':'hsl(0, 0%, 100%)' }}>Social</NavLink></li>
                <li><NavLink className="link-2" to="/s/result" exact activeStyle={{ 'backgroundColor':'hsl(123, 72%, 48%)','color':'hsl(0, 0%, 100%)' }}>Result</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;