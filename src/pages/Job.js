import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Job() {
    const imgHeight = 200;

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

    const jobCompanyText = (valueJobCompany === '') ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueJobCompany.length <= 2) ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobCompany}</text>;
    const jobPositionText = (valueJobPosition === '') ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueJobPosition.length <= 2) ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobPosition}</text>;
    const jobYearsText = (valueJobYears === '') ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueJobYears.length < 15) ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with 15 or more characters</text> : <text x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueJobYears}</text>;

    const svgImageJob = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Company name</text>
            {jobCompanyText}
            <text x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Position</text>
            {jobPositionText}
            <text x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Job years</text>
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