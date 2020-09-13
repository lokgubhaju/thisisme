import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

function Certificates() {
    const imgHeight = 194;

    const [valueCertificatesTitle1, setValueCertificatesTitle1] = useLocalStorage(
        'certificatesTitleValueStored1'
      );
    const valueChangeCertificatesTitle1 = event => setValueCertificatesTitle1(event.target.value);

    const [valueCertificatesId1, setValueCertificatesId1] = useLocalStorage(
        'certificatesIdValueStored1'
      );
    const valueChangeCertificatesId1 = event => setValueCertificatesId1(event.target.value);

    const [valueCertificatesDate1, setValueCertificatesDate1] = useLocalStorage(
        'certificatesDateValueStored1'
      );
    const valueChangeCertificatesDate1 = event => setValueCertificatesDate1(event.target.value);

    const certificatesTitleText1 = (valueCertificatesTitle1 === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate title</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesTitle1}</tspan></text>;
    const certificatesIdText1 = (valueCertificatesId1 === '') ? null : <text x="25" y="36"><tspan x="25" y="90" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate ID</tspan><tspan x="25" y="114" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesId1}</tspan></text>;
    const certificatesDateText1 = (valueCertificatesDate1 === '') ? null : <text x="25" y="36"><tspan x="25" y="144" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Certificate received date</tspan><tspan x="25" y="168" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueCertificatesDate1}</tspan></text>;

    const svgImageCertificates = (
        <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
            <rect x="25" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            <rect x="175" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            <rect x="325" y="52" width="140px" height="118px" rx="4.5" fill="#FAFBFC" stroke="#E4E2E2"/>
            {certificatesTitleText1}
            {certificatesIdText1}
            {certificatesDateText1}
         </svg>
    );

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            <form>
                                <div>
                                    <label htmlFor="certificatetitle">Certificate title</label><br/>
                                    <input onChange={valueChangeCertificatesTitle1} value={valueCertificatesTitle1} type="text" id="certificatetitle" name="certificatetitle" minlength="0" maxlength="40"/>
                                </div>
                                <div>
                                    <label htmlFor="certificateid">Certificate ID</label><br/>
                                    <input onChange={valueChangeCertificatesId1} value={valueCertificatesId1} type="text" id="certificateid" name="certificateid" minlength="0" maxlength="40"/>
                                </div>
                                <div>
                                    <label htmlFor="certificatereceiveddate">Certificate received date <span>(MM/YYYY)</span></label><br/>
                                    <input onChange={valueChangeCertificatesDate1} value={valueCertificatesDate1} type="text" id="certificatereceiveddate" name="certificatereceiveddate" minlength="0" maxlength="7"/>
                                </div>
                            </form>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> if necessary, type the name of the organization in the title.<br/><span>*</span> for information about data, see <Link to="/privacy-policy" exact>Privacy Policy</Link>.</p>
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