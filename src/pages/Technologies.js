import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Technologies() {
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="technologies">Technologies I use <span>(comma separated)</span></label><br/>
                                <input type="text" id="technologies" name="technologies"/>
                            </div>
                            <input type="button" value="Add"/>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: git, Visual Studio Code, ...<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <h1>ok?</h1>
                </div>
            </div>
        </>
    );
}

export default Technologies;