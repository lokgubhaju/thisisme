import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Certificates() {
    const imgHeight = 200;
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="certificatetitle">Certificate title</label><br/>
                                <input type="text" id="certificatetitle" name="certificatetitle"/>
                            </div>
                            <div>
                                <label htmlFor="certificateid">Certificate ID</label><br/>
                                <input type="text" id="certificateid" name="certificateid"/>
                            </div>
                            <div>
                                <label htmlFor="certificatereceiveddate">Certificate received date <span>(MM/YYYY)</span></label><br/>
                                <input type="text" id="certificatereceiveddate" name="certificatereceiveddate"/>
                            </div>
                            <input type="button" value="Add"/>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> if necessary, type the name of the organization in the title.<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
                        <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My certificate</text>
                    </svg>
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Certificates;