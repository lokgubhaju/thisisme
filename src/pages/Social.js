import React from 'react';
import Navigation from '../components/Navigation';

function Social() {
    return (
        <>
            <Navigation/>
            <section className="section">
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
        </>
    );
}

export default Social;