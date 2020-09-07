import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Job() {
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
                    <h1>ok?</h1>
                </div>
            </div>
        </>
    );
}

export default Job;