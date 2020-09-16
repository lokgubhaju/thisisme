import React from 'react';
import Navigation from '../components/Navigation';
import { SvgImageProgramming } from './Programming';

function Result() {
    return (
        <>
            <Navigation/>
            <section id="section">
                <SvgImageProgramming/>
            </section>
        </>
    );
}

export default Result;