import React from 'react';
import Navigation from '../components/Navigation';
import parse from 'html-react-parser';

function Result() {
    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    return (
        <>
            <Navigation/>
            {parse(svgImageProgrammingPassed)}
        </>
    );
}

export default Result;