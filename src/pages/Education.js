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

    const educationNameText = (valueEducationName === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">College name</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationName}</tspan></text>;
    const educationTitleText = (valueEducationTitle === '') ? null : <text x="25" y="36"><tspan x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career title</tspan><tspan x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationTitle}</tspan></text>;
    const educationYearsText = (valueEducationYears === '') ? null : <text x="25" y="36"><tspan x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career years</tspan><tspan x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationYears}</tspan></text>;

    const svgImageEducation = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            {educationNameText}
            {educationTitleText}
            {educationYearsText}
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
                                <label htmlFor="careeryears">Career years <span>(MM/YYYY-MM/YYYY)</span></label><br/>
                                <input onChange={valueChangeEducationYears} value={valueEducationYears} type="text" id="careeryears" name="careeryears"/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
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