import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Job() {
    const imgHeight = 194;

    const [valueJobCompany, setValueJobCompany] = useLocalStorage(
        'jobCompanyValueStored'
      );
    const valueChangeJobCompany = event => setValueJobCompany(event.target.value);

    const [valueJobPosition, setValueJobPosition] = useLocalStorage(
        'jobPositionValueStored'
      );
    const valueChangeJobPosition = event => setValueJobPosition(event.target.value);

    const [valueJobYears, setValueJobYears] = useLocalStorage(
        'jobYearsValueStored'
      );
    const valueChangeJobYears = event => setValueJobYears(event.target.value);

    const jobCompanyText = (valueJobCompany === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Company name</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobCompany}</tspan></text>;
    const jobPositionText = (valueJobPosition === '') ? null : <text x="25" y="36"><tspan x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Position</tspan><tspan x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobPosition}</tspan></text>;
    const jobYearsText = (valueJobYears === '') ? null : <text x="25" y="36"><tspan x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Job years</tspan><tspan x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobYears}</tspan></text>;

    const svgImageJob = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            {jobCompanyText}
            {jobPositionText}
            {jobYearsText}
         </svg>
    );

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <form>
                            <div>
                                <label htmlFor="companyname">Company name</label><br/>
                                <input onChange={valueChangeJobCompany} value={valueJobCompany} type="text" id="companyname" name="companyname"/>
                            </div>
                            <div>
                                <label htmlFor="position">Position</label><br/>
                                <input onChange={valueChangeJobPosition} value={valueJobPosition} type="text" id="position" name="position"/>
                            </div>
                            <div>
                                <label htmlFor="jobyears">Job years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                                <input onChange={valueChangeJobYears} value={valueJobYears} type="text" id="jobyears" name="jobyears"/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageJob}
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Job;