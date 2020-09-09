import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Technologies() {
    const imgHeight = 200;

    const [value, setValue] = useLocalStorage(
        'technologiesValueStored'
      );
    const onChange = event => setValue(event.target.value);

    const technologiesValue = (value === '') ? <text x="25" y="62" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="15px">Nothing here</text> : (value.length <= 2) ? <text x="25" y="62" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="15px">Please, add a text with more than 2 characters</text> : <text x="25" y="62" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="15px">{value}</text>;

    const svgImageTechnologies = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Technologies I use</text>
            {technologiesValue}
        </svg>
    );

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="technologies">Technologies I use <span>(comma separated)</span></label><br/>
                                <input type="text" id="technologies" name="technologies"  onChange={onChange} value={value}/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: Visual Studio Code, React, ...<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageTechnologies}
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Technologies;