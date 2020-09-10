import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Certificates() {
    const imgHeight = 200;

    const [valueCertificatesTitle, setValueCertificatesTitle] = useLocalStorage(
        'certificatesTitleValueStored'
      );
    const valueChangeCertificatesTitle = event => setValueCertificatesTitle(event.target.value);

    const [valueCertificatesId, setValueCertificatesId] = useLocalStorage(
        'certificatesIdValueStored'
      );
    const valueChangeCertificatesId = event => setValueCertificatesId(event.target.value);

    const [valueCertificatesDate, setValueCertificatesDate] = useLocalStorage(
        'certificatesDateValueStored'
      );
    const valueChangeCertificatesDate = event => setValueCertificatesDate(event.target.value);

    const certificatesTitleText = (valueCertificatesTitle === '') ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueCertificatesTitle.length <= 2) ? <text x="25" y="60" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 2 characters</text> : <text x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesTitle}</text>;
    const certificatesIdText = (valueCertificatesId === '') ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueCertificatesId.length <= 3) ? <text x="25" y="114" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with more than 3 characters</text> : <text x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesId}</text>;
    const certificatesDateText = (valueCertificatesDate === '') ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Nothing here</text> : (valueCertificatesDate.length < 7) ? <text x="25" y="168" fill="hsl(0, 63.5%, 50.6%)" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">Please, add a text with 7 or more characters</text> : <text x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesDate}</text>;

    const svgImageCertificates = (
        <svg width="495" height={imgHeight} viewBox="0 0 495 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <text x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate title</text>
            {certificatesTitleText}
            <text x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate ID</text>
            {certificatesIdText}
            <text x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate received date</text>
            {certificatesDateText}
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
                                <label htmlFor="certificatetitle">Certificate title</label><br/>
                                <input onChange={valueChangeCertificatesTitle} value={valueCertificatesTitle} type="text" id="certificatetitle" name="certificatetitle"/>
                            </div>
                            <div>
                                <label htmlFor="certificateid">Certificate ID</label><br/>
                                <input onChange={valueChangeCertificatesId} value={valueCertificatesId} type="text" id="certificateid" name="certificateid"/>
                            </div>
                            <div>
                                <label htmlFor="certificatereceiveddate">Certificate received date <span>(MM/YYYY)</span></label><br/>
                                <input onChange={valueChangeCertificatesDate} value={valueCertificatesDate} type="text" id="certificatereceiveddate" name="certificatereceiveddate"/>
                            </div>
                        </form>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> if necessary, type the name of the organization in the title.<br/><span>*</span> for information about data, see <Link to="/i/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    {svgImageCertificates}
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Certificates;