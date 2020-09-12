import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Job() {
    const [valueJobCompany1, setValueJobCompany1] = useLocalStorage(
        'jobCompanyValueStored1'
      );
    const valueChangeJobCompany1 = event => setValueJobCompany1(event.target.value);

    const [valueJobPosition1, setValueJobPosition1] = useLocalStorage(
        'jobPositionValueStored1'
      );
    const valueChangeJobPosition1 = event => setValueJobPosition1(event.target.value);

    const [valueJobYears1, setValueJobYears1] = useLocalStorage(
        'jobYearsValueStored1'
      );
    const valueChangeJobYears1 = event => setValueJobYears1(event.target.value);

    const jobPositionPositionTitle1 = (valueJobCompany1 === '') ? 68 : 106;
    const jobPositionPositionText1 = (valueJobCompany1 === '') ? 84 : 122;
    const jobYearsPositionTitle1 = (valueJobCompany1 === '' && valueJobPosition1 === '') ? 68 : 144 && (valueJobPosition1 === '') ? 106 : 144 && (jobPositionPositionTitle1 === 68) ? 106 : 144;
    const jobYearsPositionText1 = (valueJobCompany1 === '' && valueJobPosition1 === '') ? 84 : 160 && (valueJobPosition1 === '') ? 122 : 160 && (jobPositionPositionText1 === 84) ? 122 : 160;

    const jobInnerCard1 = (valueJobCompany1 !== '' || valueJobPosition1 !== '' || valueJobYears1 !== '') ? <rect x="25" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : null;

    const jobCompanyText1 = (valueJobCompany1 === '') ? null : <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Company name</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobCompany1}</tspan></text>;
    const jobPositionText1 = (valueJobPosition1 === '') ? null : <text x="30" y="67"><tspan x="30" y={jobPositionPositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Position</tspan><tspan x="30" y={jobPositionPositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobPosition1}</tspan></text>;
    const jobYearsText1 = (valueJobYears1 === '') ? null : <text x="30" y="67"><tspan x="30" y={jobYearsPositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Job years</tspan><tspan x="30" y={jobYearsPositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobYears1}</tspan></text>;

    const [valueJobCompany2, setValueJobCompany2] = useLocalStorage(
        'jobCompanyValueStored2'
      );
    const valueChangeJobCompany2 = event => setValueJobCompany2(event.target.value);

    const [valueJobPosition2, setValueJobPosition2] = useLocalStorage(
        'jobPositionValueStored2'
      );
    const valueChangeJobPosition2 = event => setValueJobPosition2(event.target.value);

    const [valueJobYears2, setValueJobYears2] = useLocalStorage(
        'jobYearsValueStored2'
      );
    const valueChangeJobYears2 = event => setValueJobYears2(event.target.value);

    const jobPositionPositionTitle2 = (valueJobCompany2 === '') ? 68 : 106;
    const jobPositionPositionText2 = (valueJobCompany2 === '') ? 84 : 122;
    const jobYearsPositionTitle2 = (valueJobCompany2 === '' && valueJobPosition2 === '') ? 68 : 144 && (valueJobPosition2 === '') ? 106 : 144 && (jobPositionPositionTitle2 === 68) ? 106 : 144;
    const jobYearsPositionText2 = (valueJobCompany2 === '' && valueJobPosition2 === '') ? 84 : 160 && (valueJobPosition2 === '') ? 122 : 160 && (jobPositionPositionText2 === 84) ? 122 : 160;

    const jobInnerCardPosition2 = (jobInnerCard1 === null) ? <rect x="25" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : <rect x="253" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>;
    const jobInnerCard2 = (valueJobCompany2 !== '' || valueJobPosition2 !== '' || valueJobYears2 !== '') ? jobInnerCardPosition2 : null;

    const jobCompanyText2 = (valueJobCompany2 === '') ? null : <text x="258" y="67"><tspan x="258" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Company name</tspan><tspan x="258" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobCompany2}</tspan></text> && (jobInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Company name</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobCompany2}</tspan></text> : <text x="258" y="67"><tspan x="258" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Company name</tspan><tspan x="258" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobCompany2}</tspan></text>;
    const jobPositionText2 = (valueJobPosition2 === '') ? null : <text x="258" y="67"><tspan x="258" y={jobPositionPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Position</tspan><tspan x="258" y={jobPositionPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobPosition2}</tspan></text> && (jobInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={jobPositionPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Position</tspan><tspan x="30" y={jobPositionPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobPosition2}</tspan></text> : <text x="258" y="67"><tspan x="258" y={jobPositionPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Position</tspan><tspan x="258" y={jobPositionPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobPosition2}</tspan></text>;
    const jobYearsText2 = (valueJobYears2 === '') ? null : <text x="258" y="67"><tspan x="258" y={jobYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Job years</tspan><tspan x="258" y={jobYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobYears2}</tspan></text> && (jobInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={jobYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Job years</tspan><tspan x="30" y={jobYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobYears2}</tspan></text> : <text x="258" y="67"><tspan x="258" y={jobYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Job years</tspan><tspan x="258" y={jobYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueJobYears2}</tspan></text>;

    const imgHeight = (jobInnerCard1 === null && jobInnerCard2 === null) ? 62 : 194;

    const svgImageJob = (
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My job experience</text>
            <g>
                {jobInnerCard1}
                {jobCompanyText1}
                {jobPositionText1}
                {jobYearsText1}
            </g>
            <g>
                {jobInnerCard2}
                {jobCompanyText2}
                {jobPositionText2}
                {jobYearsText2}
            </g>
            {/*<rect x="25" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            <rect x="175" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            <rect x="325" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>*/}
         </svg>
    );

    const [form, changeForm] = useState(false);
    const toggleForm = () => changeForm(!form);

    const jobForm1 = (
        <form>
            <p className="currentform-text">current form: 1</p>
            <div>
                <label htmlFor="companyname">Company name</label><br/>
                <input onChange={valueChangeJobCompany1} value={valueJobCompany1} type="text" id="companyname" name="companyname" minlength="0" maxlength="40"/>
            </div>
            <div>
                <label htmlFor="position">Position</label><br/>
                <input onChange={valueChangeJobPosition1} value={valueJobPosition1} type="text" id="position" name="position" minlength="0" maxlength="40"/>
            </div>
            <div>
                <label htmlFor="jobyears">Job years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                <input onChange={valueChangeJobYears1} value={valueJobYears1} type="text" id="jobyears" name="jobyears" minlength="0" maxlength="15"/>
            </div>
        </form>
    );

    const jobForm2 = (
        <form>
            <p className="currentform-text">current form: 2</p>
            <div>
                <label htmlFor="companyname">Company name</label><br/>
                <input onChange={valueChangeJobCompany2} value={valueJobCompany2} type="text" id="companyname" name="companyname" minlength="0" maxlength="40"/>
            </div>
            <div>
                <label htmlFor="position">Position</label><br/>
                <input onChange={valueChangeJobPosition2} value={valueJobPosition2} type="text" id="position" name="position" minlength="0" maxlength="40"/>
            </div>
            <div>
                <label htmlFor="jobyears">Job years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                <input onChange={valueChangeJobYears2} value={valueJobYears2} type="text" id="jobyears" name="jobyears" minlength="0" maxlength="15"/>
            </div>
        </form>
    );

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            {form ? jobForm2 : jobForm1}
                            <button id="toggle-button" onClick={toggleForm}>Toggle form</button>
                            <p> each form corresponds to each inner card.</p>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> only up to 2 inner cards.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/privacy-policy" exact>Privacy Policy</Link>.</p>
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