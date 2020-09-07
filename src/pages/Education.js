import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Education() {
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <section id="section">
                    <form>
                        <div>
                            <label htmlFor="collegename">College name</label><br/>
                            <input type="text" id="collegename" name="collegename"/>
                        </div>
                        <div>
                            <label htmlFor="careertitle">Career title</label><br/>
                            <input type="text" id="careertitle" name="careertitle"/>
                        </div>
                        <div>
                            <label htmlFor="careeryears">Career years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                            <input type="text" id="careeryears" name="careeryears"/>
                        </div>
                    </form>
                </section>
                <aside id="section-aside">
                    <h1>Notes:</h1>
                    <p><span>*</span> all inputs are optional.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link></p>
                </aside>
            </div>
        </>
    );
}

export default Education;