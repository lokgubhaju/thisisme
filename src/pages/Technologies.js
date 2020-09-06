import React from 'react';
import Navigation from '../components/Navigation';

function Technologies() {
    return (
        <>
            <Navigation/>
            <section className="section">
                <form>
                    <div>
                        <label htmlFor="technologies">Technologies I use <span>(comma separated)</span></label><br/>
                        <input type="text" id="technologies" name="technologies"/>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Technologies;