import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Job() {
    const imgHeight = 200;
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="companyname">Company name</label><br/>
                                <input type="text" id="companyname" name="companyname"/>
                            </div>
                            <div>
                                <label htmlFor="position">Position</label><br/>
                                <input type="text" id="position" name="position"/>
                            </div>
                            <div>
                                <label htmlFor="jobyears">Job years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                                <input type="text" id="jobyears" name="jobyears"/>
                            </div>
                            <input type="button" value="Add"/>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <svg width="495" height={imgHeight} viewBox="0 0 495" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
                        <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My job</text>
                    </svg>
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Job;