import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Social() {
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="platformsocialmedia">Platform/social media</label><br/>
                                <input type="text" id="platformsocialmedia" name="platformsocialmedia"/>
                            </div>
                            <div>
                                <label htmlFor="linkto">Link to</label><br/>
                                <input type="text" id="linkto" name="linkto"/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <h1>ok?</h1>
                </div>
            </div>
        </>
    );
}

export default Social;