import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Personal() {
    const imgHeight = 200;
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="fullname">My full name</label><br/>
                                <input type="text" id="fullname" name="fullname"/>
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
                <div>
                    <svg width="495" height={imgHeight} viewBox="0 0 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
                        <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My full name</text>
                        <text x="25" y="66" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Languages I speak</text>
                        <text x="25" y="96" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My hobbies</text>
                    </svg>
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Personal;