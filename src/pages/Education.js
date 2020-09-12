import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Education() {
    const imgHeight = 194;

    const [valueEducationName1, setValueEducationName1] = useLocalStorage(
        'educationNameValueStored1'
      );
    const valueChangeEducationName1 = event => setValueEducationName1(event.target.value);

    const [valueEducationTitle1, setValueEducationTitle1] = useLocalStorage(
        'educationTitleValueStored1'
      );
    const valueChangeEducationTitle1 = event => setValueEducationTitle1(event.target.value);

    const [valueEducationYears1, setValueEducationYears1] = useLocalStorage(
        'educationYearsValueStored1'
      );
    const valueChangeEducationYears1 = event => setValueEducationYears1(event.target.value);

    const educationTitlePositionTitle1 = (valueEducationName1 === '') ? 68 : 106;
    const educationTitlePositionText1 = (valueEducationName1 === '') ? 84 : 122;
    const educationYearsPositionTitle1 = (valueEducationName1 === '' && valueEducationTitle1 === '') ? 68 : 144 && (valueEducationTitle1 === '') ? 106 : 144 && (educationTitlePositionTitle1 === 68) ? 106 : 144;
    const educationYearsPositionText1 = (valueEducationName1 === '' && valueEducationTitle1 === '') ? 84 : 160 && (valueEducationTitle1 === '') ? 122 : 160 && (educationTitlePositionText1 === 84) ? 122 : 160;

    const educationInnerCard1 = (valueEducationName1 !== '' || valueEducationTitle1 !== '' || valueEducationYears1 !== '') ? <rect x="25" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : null;

    const educationNameText1 = (valueEducationName1 === '') ? null : <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">College name</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationName1}</tspan></text>;
    const educationTitleText1 = (valueEducationTitle1 === '') ? null : <text x="30" y="67"><tspan x="30" y={educationTitlePositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career title</tspan><tspan x="30" y={educationTitlePositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationTitle1}</tspan></text>;
    const educationYearsText1 = (valueEducationYears1 === '') ? null : <text x="30" y="67"><tspan x="30" y={educationYearsPositionTitle1} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career years</tspan><tspan x="30" y={educationYearsPositionText1} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationYears1}</tspan></text>;

    const [valueEducationName2, setValueEducationName2] = useLocalStorage(
        'educationNameValueStored2'
      );
    const valueChangeEducationName2 = event => setValueEducationName2(event.target.value);

    const [valueEducationTitle2, setValueEducationTitle2] = useLocalStorage(
        'educationTitleValueStored2'
      );
    const valueChangeEducationTitle2 = event => setValueEducationTitle2(event.target.value);

    const [valueEducationYears2, setValueEducationYears2] = useLocalStorage(
        'educationYearsValueStored2'
      );
    const valueChangeEducationYears2 = event => setValueEducationYears2(event.target.value);

    const educationTitlePositionTitle2 = (valueEducationName2 === '') ? 68 : 106;
    const educationTitlePositionText2 = (valueEducationName2 === '') ? 84 : 122;
    const educationYearsPositionTitle2 = (valueEducationName2 === '' && valueEducationTitle2 === '') ? 68 : 144 && (valueEducationTitle2 === '') ? 106 : 144 && (educationTitlePositionTitle2 === 68) ? 106 : 144;
    const educationYearsPositionText2 = (valueEducationName2 === '' && valueEducationTitle2 === '') ? 84 : 160 && (valueEducationTitle2 === '') ? 122 : 160 && (educationTitlePositionText2 === 84) ? 122 : 160;

    const educationInnerCardPosition2 = (educationInnerCard1 === null) ? <rect x="25" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/> : <rect x="253" y="52" width="215px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>;
    const educationInnerCard2 = (valueEducationName2 !== '' || valueEducationTitle2 !== '' || valueEducationYears2 !== '') ? educationInnerCardPosition2 : null;

    const educationNameText2 = (valueEducationName2 === '') ? null : <text x="258" y="67"><tspan x="258" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">College name</tspan><tspan x="258" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationName2}</tspan></text> && (educationInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">College name</tspan><tspan x="30" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationName2}</tspan></text> : <text x="258" y="67"><tspan x="258" y="68" fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">College name</tspan><tspan x="258" y="84" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationName2}</tspan></text>;
    const educationTitleText2 = (valueEducationTitle2 === '') ? null : <text x="258" y="67"><tspan x="258" y={educationTitlePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career title</tspan><tspan x="258" y={educationTitlePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationTitle2}</tspan></text> && (educationInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={educationTitlePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career title</tspan><tspan x="30" y={educationTitlePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationTitle2}</tspan></text> : <text x="258" y="67"><tspan x="258" y={educationTitlePositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career title</tspan><tspan x="258" y={educationTitlePositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationTitle2}</tspan></text>;
    const educationYearsText2 = (valueEducationYears2 === '') ? null : <text x="258" y="67"><tspan x="258" y={educationYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career years</tspan><tspan x="258" y={educationYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationYears2}</tspan></text> && (educationInnerCard1 === null) ? <text x="30" y="67"><tspan x="30" y={educationYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career years</tspan><tspan x="30" y={educationYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationYears2}</tspan></text> : <text x="258" y="67"><tspan x="258" y={educationYearsPositionTitle2} fill="#333" fontFamily="Segoe UI" fontWeight="700" fontSize="11px">Career years</tspan><tspan x="258" y={educationYearsPositionText2} fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="12px">{valueEducationYears2}</tspan></text>;

    /*const addMoreText = () => {
        let checkbox = document.getElementById("more-button");
        if (checkbox.checked === true) {
            return const asdfg = 8;
        } else {
            alert('oka');
        }
    }*/
    /*const asdfg = () => {
    let checkbox = document.getElementById("more-button");
    const texty = (checkbox.checked === true) ? <text x="70" y="36" fill="#0ff" fontFamily="Segoe UI" fontWeight="600" fontSize="14px">OenasPefaseg</text> : null;
    //return texty;
}*/

    const svgImageEducation = (
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My education</text>
            {/*asdfg.texty*/}
            <g>
                {educationInnerCard1}
                {educationNameText1}
                {educationTitleText1}
                {educationYearsText1}
            </g>
            <g>
                {educationInnerCard2}
                {educationNameText2}
                {educationTitleText2}
                {educationYearsText2}
            </g>
         </svg>
    );

    const [form, changeForm] = useState(false);
    const toggleForm = () => changeForm(!form);

    const educationForm1 = (
        <form>
            <p className="currentform-text">current form: 1</p>
            <div>
                <label htmlFor="collegename1">College name</label><br/>
                <input onChange={valueChangeEducationName1} value={valueEducationName1} type="text" id="collegename1" name="collegename1"/>
            </div>
            <div>
                <label htmlFor="careertitle1">Career title</label><br/>
                <input onChange={valueChangeEducationTitle1} value={valueEducationTitle1} type="text" id="careertitle1" name="careertitle1"/>
            </div>
            <div>
                <label htmlFor="careeryears1">Career years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span></label><br/>
                <input onChange={valueChangeEducationYears1} value={valueEducationYears1} type="text" id="careeryears1" name="careeryears1"/>
            </div>
        </form>
    );

    const educationForm2 = (
        <form>
            <p className="currentform-text">current form: 2</p>
            <div>
                <label htmlFor="collegename2">College name</label><br/>
                <input onChange={valueChangeEducationName2} value={valueEducationName2} type="text" id="collegename2" name="collegename2"/>
            </div>
            <div>
                <label htmlFor="careertitle2">Career title</label><br/>
                <input onChange={valueChangeEducationTitle2} value={valueEducationTitle2} type="text" id="careertitle2" name="careertitle2"/>
            </div>
            <div>
                <label htmlFor="careeryears2">Career years <span>(MM/YYYY-MM/YYYY) or (YYYY/YYYY)</span></label><br/>
                <input onChange={valueChangeEducationYears2} value={valueEducationYears2} type="text" id="careeryears2" name="careeryears2"/>
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
                            {form ? educationForm2 : educationForm1}
                            <button id="toggle-button" onClick={toggleForm}>Toggle form</button>
                            <p>each form corresponds to each inner card.</p>
                            <input id="more-button" type="checkbox"></input>
                            <p>check this checkbox to let know people there's more information.</p>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> only up to 2 inner cards.<br/><span>*</span> add "Present" if necessary (eg. 04/2000-Present).<br/><span>*</span> for information about data, see <Link to="/privacy-policy" exact>Privacy Policy</Link>.</p>
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