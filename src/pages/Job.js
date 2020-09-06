import React from 'react';
import Navigation from '../components/Navigation';

function Job() {
    return (
        <>
            <Navigation/>
            <section className="section">
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
                </form>
            </section>
        </>
    );
}

export default Job;