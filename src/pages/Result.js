import React from 'react';
import Navigation from '../components/Navigation';

function Result() {
    return (
        <>
            <Navigation/>
            <section id="section">
                {localStorage.getItem('svgImageProgrammingStored')}
            </section>
        </>
    );
}

export default Result;