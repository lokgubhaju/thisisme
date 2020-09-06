import React from 'react';
import Navigation from '../components/Navigation';

function Certificates() {
    return (
        <>
            <Navigation/>
            <section className="section">
                <form>
                    <div>
                        <label htmlFor="certificatetitle">Certificate title</label><br/>
                        <input type="text" id="certificatetitle" name="certificatetitle"/>
                    </div>
                    <div>
                        <label htmlFor="certificateid">Certificate ID</label><br/>
                        <input type="text" id="certificateid" name="certificateid"/>
                    </div>
                    <div>
                        <label htmlFor="certificatereceiveddate">Certificate received date <span>(MM/YYYY)</span></label><br/>
                        <input type="text" id="certificatereceiveddate" name="certificatereceiveddate"/>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Certificates;