import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Programming() {
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <section id="section">
                    <form>
                        <div>
                            <label htmlFor="programming">Programming languages I code in <span>(comma separated)</span></label><br/>
                            <input type="text" id="programming" name="programming"/>
                        </div>
                    </form>
                </section>
                <aside id="section-aside">
                    <h1>Notes:</h1>
                    <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: JavaScript, Ruby, ...<br/><span>*</span> non-programming languages are also included (eg. HTML).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link></p>
                </aside>
            </div>
        </>
    );
}

export default Programming;