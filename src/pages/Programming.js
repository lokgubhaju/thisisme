import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Programming() {
    const imgHeight = 200;

    const [value, setValue] = useLocalStorage(
        'programmingValueStored'
      );
    const onChange = event => setValue(event.target.value);

    const programmingText = (value === '') ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (value.length <= 2) ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{value}</text>;

    const svgImageProgramming = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Programming languages I code in</text>
            {programmingText}
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
                                <label htmlFor="programming">Programming languages I code in <span>(comma separated)</span></label><br/>
                                <input type="text" id="programming" name="programming" onChange={onChange} value={value}/>
                            </div>
                            <input type="button" value="Add"/>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: JavaScript, Ruby, ...<br/><span>*</span> non-programming languages are also included (eg. HTML).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageProgramming}
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Programming;