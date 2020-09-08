import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';
import { SVG } from '@svgdotjs/svg.js';

function Personal() {

    const imgHeight = 200;

    const [value, setValue] = useLocalStorage(
        'myValueInLocalStorage'
      );
     
    const onChange = event => setValue(event.target.value);

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="fullname">My full name</label><br/>
                                <input value={value} type="text" onChange={onChange} id="fullname" name="fullname"/>
                            </div>
                            <div>
                                <label htmlFor="languages">Languages I speak <span>(comma separated)</span></label><br/>
                                <input type="text" id="languages" name="languages"/>
                            </div>
                            <div>
                                <label htmlFor="hobbies">My hobbies <span>(comma separated)</span></label><br/>
                                <input type="text" id="hobbies" name="hobbies"/>
                            </div>
                            <input type="button" value="Update"/>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: English, French, ...<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div id="svg-wrapper">
                    <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
                        <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My full name</text>
                        <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{value}</text>
                        <text x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Languages I speak</text>
                        <text x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="13px">Languages I speak</text>
                        <text x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My hobbies</text>
                        <text x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="13px">My hobbies</text>
                    </svg>
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Personal;