import React from 'react'
import './reportcard.css'
import reportCard from '../../../images/img/creditcard.svg'

const ReportCard = () => {
    return (
        <div className="reportCard">
            <div className="reportCard__container">
                <img src={reportCard} alt="reportCard" />
            </div>
        </div>
    )
}

export default ReportCard
