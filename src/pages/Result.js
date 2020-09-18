import React from 'react';
import Navigation from '../components/Navigation';

function Result() {
    const svgImageProgrammingResult = (localStorage.getItem('programmingValueStored') === '') ? null : <svg width="495" height="82" viewBox="0 0 495 82" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/><text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Programming languages I code in</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{localStorage.getItem('programmingValueStored')}</tspan></text></svg>;

    return (
        <>
            <Navigation/>
            <section id="section">
                {svgImageProgrammingResult}
            </section>
        </>
    );
}

export default Result;