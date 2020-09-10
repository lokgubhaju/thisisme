import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Education() {
    const imgHeight = 200;

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

    const educationNameText = (valueEducationName === '') ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueEducationName.length <= 2) ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationName}</text>;
    const educationTitleText = (valueEducationTitle === '') ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueEducationTitle.length <= 2) ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationTitle}</text>;
    const educationYearsText = (valueEducationYears === '') ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueEducationYears.length < 15) ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with 15 or more characters</text> : <text x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueEducationYears}</text>;

    const svgImageEducation = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">College name</text>
            {educationNameText}
            <text x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career title</text>
            {educationTitleText}
            <text x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Career years</text>
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