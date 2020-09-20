import React from 'react';
import Navigation from '../components/Navigation';
import parse from 'html-react-parser';

function Result() {
    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    const svgImageTechnologiesPassed = localStorage.getItem('svgImageTechnologiesStored')
    return (
        <>
            <Navigation/>
            <svg width="900" height="192" viewBox="0 0 900 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                {parse(svgImageProgrammingPassed)}
                {parse(svgImageTechnologiesPassed)}
            </svg>
        </>
    );
}

export default Result;