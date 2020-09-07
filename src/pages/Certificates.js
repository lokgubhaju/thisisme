import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Certificates() {
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
                    <h1>ok?</h1>
                </div>
            </div>
        </>
    );
}

export default Certificates;