import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Personal() {
    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
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
        </>
    );
}

export default Personal;