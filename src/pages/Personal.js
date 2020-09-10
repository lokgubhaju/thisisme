import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Personal() {
    const imgHeight = 200;

    const [valuePersonalFullname, setValuePersonalFullname] = useLocalStorage(
        'personalFullnameValueStored'
      );
    const valueChangePersonalFullname = event => setValuePersonalFullname(event.target.value);

    const [valuePersonalLanguages, setValuePersonalLanguages] = useLocalStorage(
        'personalLanguagesValueStored'
      );
    const valueChangePersonalLanguages = event => setValuePersonalLanguages(event.target.value);

    const [valuePersonalHobbies, setValuePersonalHobbies] = useLocalStorage(
        'personalHobbiesValueStored'
      );
    const valueChangePersonalHobbies = event => setValuePersonalHobbies(event.target.value);

    const personalFullnameText = (valuePersonalFullname === '') ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valuePersonalFullname.length <= 5) ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 5 characters</text> : <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalFullname}</text>;
    const personalLanguagesText = (valuePersonalLanguages === '') ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valuePersonalLanguages.length <= 2) ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalLanguages}</text>;
    const personalHobbiesText = (valuePersonalHobbies === '') ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valuePersonalHobbies.length <= 2) ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valuePersonalHobbies}</text>;

    const svgImagePersonal = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My full name</text>
            {personalFullnameText}
            <text x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Languages I speak</text>
            {personalLanguagesText}
            <text x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">My hobbies</text>
            {personalHobbiesText}
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
                                <label htmlFor="fullnameValue">My full name</label><br/>
                                <input onChange={valueChangePersonalFullname} value={valuePersonalFullname} type="text" id="fullnameValue" name="fullnameValue"/>
                            </div>
                            <div>
                                <label htmlFor="languagesValue">Languages I speak <span>(comma separated)</span></label><br/>
                                <input onChange={valueChangePersonalLanguages} value={valuePersonalLanguages} type="text" id="languagesValue" name="languagesValue"/>
                            </div>
                            <div>
                                <label htmlFor="hobbiesValue">My hobbies <span>(comma separated)</span></label><br/>
                                <input onChange={valueChangePersonalHobbies} value={valuePersonalHobbies} type="text" id="hobbiesValue" name="hobbiesValue"/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: English, French, ...<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div id="svg-wrapper">
                    {svgImagePersonal}
                    <p id="preview-text">preview</p>
                </div>
            </div>
        </>
    );
}

export default Personal;