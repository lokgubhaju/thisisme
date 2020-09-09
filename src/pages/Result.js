import React from 'react';
import Navigation from '../components/Navigation';
import Personal from '../pages/Personal';

function Result() {
    return (
        <>
            <Navigation/>
            <section className="section">
                {Personal.svgImageTest}
            </section>
        </>
    );
}

export default Result;