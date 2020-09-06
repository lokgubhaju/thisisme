import React from 'react';
import Navigation from '../components/Navigation';

function Programming() {
    return (
        <>
            <Navigation/>
            <section className="section">
                <form>
                    <div>
                        <label htmlFor="programming">Programming languages I code in <span>(comma separated)</span></label><br/>
                        <input type="text" id="programming" name="programming"/>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Programming;