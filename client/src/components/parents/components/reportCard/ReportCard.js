import React from 'react'
import './reportcard.css'
import zenith from '../../../images/secon1.jpg'

const ReportCard = () => {
    return (
        <div className="reportCard">
            <div className="reportTop">
                <button className="printRepor">Print Card</button>
            </div>
            <div className="reportContainer">
                <div className="reportTopContainer">
                    <div className="reportTopContainerLeft">
                        <p>republic of cameroon</p>
                        <p className="motto">peace-work-fatherland</p>
                    </div>
                    <p className="mevreport">Mevick Bilingual Grammer School</p>
                    <div className="reportTopContainerRight">
                        <p>republic of cameroun</p>
                        <p  className="motto">paix-travaile-patrix</p>
                    </div>
                </div>
                <hr />
                <div className="reporttopHeader">
                    <div className="reportTopHeaderLeft">
                        <p className="nameofStudent">Name Of Student: <span>Zenith Noble</span></p>
                        <p className="nameofStudent">Date of Birth: <span>2020/11/20</span></p>
                        <p className="nameofStudent">immatriculation: <span>7654567890988776</span></p>
                        <p className="nameofStudent">accademic Year: <span>2021-2</span></p>
                    </div>
                    <div className="reportTopHeaderCenter">
                        <p className="gender">Gender/Sex: <span>Male</span></p>
                        <p className="gender">Class: <span>Male</span></p>
                    </div>
                    <div className="reportTopHeaderRightt">
                        <img src={zenith} alt="" />
                    </div>
                </div>
                <table className="timetableTable" cellSpacing="2" cellPadding="4" border="2">
                    <tr className="timetableTr">
                        <th className="timetableTh">SUBJECTS</th>
                        <th className="timetableTh">EV1</th>
                        <th className="timetableTh">EV2</th>
                        <th className="timetableTh">Mark</th>
                        <th className="timetableTh">Coef</th>
                        <th className="timetableTh">M*C</th>
                        <th className="timetableTh">Rank</th>
                        <th className="timetableTh">Remark</th>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">BIOLOGY</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">/</td>
                        <td className="timetableDateReportCard">not offering</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                    <tr className="timetableTr">
                        <td className="timetableDateReportCard">CHEMISTRY</td>
                        <td className="timetableDateReportCard">10</td>
                        <td className="timetableDateReportCard">19</td>
                        <td className="timetableDateReportCard">14.5</td>
                        <td className="timetableDateReportCard">5</td>
                        <td className="timetableDateReportCard">72.5</td>
                        <td className="timetableDateReportCard">12th/34</td>
                        <td className="timetableDateReportCard">Good</td>
                    </tr>
                </table>
            <div className="reportFooter">
                
            </div>
            </div>
        </div>
    )
}

export default ReportCard
