import React from 'react';
import Navigation from '../components/Navigation';

function Education() {
    return (
        <>
            <Navigation/>
            <section className="section">
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
        </>
    );
}

export default Education;