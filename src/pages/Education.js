import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Education() {
    const imgHeight = 194;

    const [valueEducationName, setValueEducationName] = useLocalStorage(
        'educationNameValueStored'
      );
    const valueChangeEducationName = event => setValueEducationName(event.target.value);

    const [valueEducationTitle, setValueEducationTitle] = useLocalStorage(
        'educationTitleValueStored'
      );
    const valueChangeEducationTitle = event => setValueEducationTitle(event.target.value);

    const [valueEducationYears, setValueEducationYears] = useLocalStorage(
        'educationYearsValueStored'
      );
    const valueChangeEducationYears = event => setValueEducationYears(event.target.value);

    {/*const educationTitlePositionTitle = (valueEducationName === '') ? 36 : 90;
    const educationTitlePositionText = (valueEducationName === '') ? 60 : 114;
    const educationYearsPositionTitle = (valueEducationName === '' && valueEducationTitle === '') ? 36 : 144 && (valueEducationTitle === '') ? 90 : 144 && (educationTitlePositionTitle === 36) ? 90 : 144;
    const educationYearsPositionText = (valueEducationName === '' && valueEducationTitle === '') ? 60 : 168 && (valueEducationTitle === '') ? 114 : 168 && (educationTitlePositionText === 60) ? 114 : 168;

    const educationNameText = (valueEducationName === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">College name</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationName}</tspan></text>;
    const educationTitleText = (valueEducationTitle === '') ? null : <text x="25" y="36"><tspan x="25" y={educationTitlePositionTitle} fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career title</tspan><tspan x="25" y={educationTitlePositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationTitle}</tspan></text>;
    const educationYearsText = (valueEducationYears === '') ? null : <text x="25" y="36"><tspan x="25" y={educationYearsPositionTitle} fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career years</tspan><tspan x="25" y={educationYearsPositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationYears}</tspan></text>;*/}

    const educationTitlePositionTitle = (valueEducationName === '') ? 68 : 106;
    const educationTitlePositionText = (valueEducationName === '') ? 84 : 122;
    const educationYearsPositionTitle = (valueEducationName === '' && valueEducationTitle === '') ? 68 : 144 && (valueEducationTitle === '') ? 106 : 144 && (educationTitlePositionTitle === 68) ? 106 : 144;
    const educationYearsPositionText = (valueEducationName === '' && valueEducationTitle === '') ? 84 : 160 && (valueEducationTitle === '') ? 122 : 160 && (educationTitlePositionText === 84) ? 122 : 160;

    const educationNameText = (valueEducationName === '') ? null : <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">College name</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationName}</tspan></text>;
    const educationTitleText = (valueEducationTitle === '') ? null : <text x="30" y="67"><tspan x="30" y={educationTitlePositionTitle} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career title</tspan><tspan x="30" y={educationTitlePositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationTitle}</tspan></text>;
    const educationYearsText = (valueEducationYears === '') ? null : <text x="30" y="67"><tspan x="30" y={educationYearsPositionTitle} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career years</tspan><tspan x="30" y={educationYearsPositionText} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationYears}</tspan></text>;

    const svgImageEducation = (
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My education</text>
            <g>
                <rect x="25" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
                {educationNameText}
                {educationTitleText}
                {educationYearsText}
            </g>
            <rect x="253" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            {/*educationNameText}
            {educationTitleText}
            {educationYearsText*/}
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
                                <label htmlFor="collegename">College name</label><br/>
                                <input onChange={valueChangeEducationName} value={valueEducationName} type="text" id="collegename" name="collegename"/>
                            </div>
                            <div>
                                <label htmlFor="careertitle">Career title</label><br/>
                                <input onChange={valueChangeEducationTitle} value={valueEducationTitle} type="text" id="careertitle" name="careertitle"/>
                            </div>
                            <div>
                                <label htmlFor="careeryears">Career years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span></label><br/>
                                <input onChange={valueChangeEducationYears} value={valueEducationYears} type="text" id="careeryears" name="careeryears"/>
                            </div>
                            <button id="toggle-button" onClick="">Toggle form</button>
                            <p> each form corresponds to each container image</p>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> only up to 2 cards.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageEducation}
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>    
                </div>
            </div>
        </>
    );
}

export default Education;