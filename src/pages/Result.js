import React from 'react';
import Navigation from '../components/Navigation';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function Result() {
    const svgImageProgrammingPassed = localStorage.getItem('svgImageProgrammingStored')
    const svgImageTechnologiesPassed = localStorage.getItem('svgImageTechnologiesStored')

    const svgImageProgrammingPassedClean = DOMPurify.sanitize(svgImageProgrammingPassed);
    const svgImageTechnologiesPassedClean = DOMPurify.sanitize(svgImageTechnologiesPassed);

    return (
        <>
            <Navigation/>
            <svg width="900" height="192" viewBox="0 0 900 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                {parse(svgImageProgrammingPassedClean)}
                {parse(svgImageTechnologiesPassedClean)}
            </svg>
        </>
    );
}

export default Result;