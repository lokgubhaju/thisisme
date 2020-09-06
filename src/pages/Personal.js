import React from 'react';
import Navigation from '../components/Navigation';

function Personal() {
    return (
        <>
            <Navigation/>
            <section className="section">
                <form>
                    <div>
                        <label htmlFor="fullname">My full name</label><br/>
                        <input type="text" id="fullname" name="fullname"/>
                    </div>
                    <div>
                        <label htmlFor="languages">Languages I speak <span>(comma separated)</span></label><br/>
                        <input type="text" id="languages" name="languages"/>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Personal;