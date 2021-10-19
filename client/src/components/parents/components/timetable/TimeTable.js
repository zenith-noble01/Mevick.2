import "./timetable.css"
import mevick from '../../../images/secon1.jpg'

const TimeTable = () => {
    return (
        <div className="timetable">
            <h3 className="timetableTitle">Books Issued</h3>
            <table className="timetableTable">
                <tr className="timetableTr">
                    <th className="timetableTh">Teacher</th>
                    <th className="timetableTh">Monday</th>
                    <th className="timetableTh">Tuesday</th>
                    <th className="timetableTh">Wednesday</th>
                    <th className="timetableTh">Thursday</th>
                    <th className="timetableTh">Friday</th>
                    <th className="timetableTh">Saturday</th>
                    <th className="timetableTh">Time</th>
                </tr>
                <tr className="timetableTr">
                    <td className="timetableUser">
                    <img
                    src={mevick}
                    alt=""
                    className="timetableImg"
                    />
                    <span className="timetableName">Mr. Zenith</span>
                    </td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">7:30-12:00</td>
                </tr>
                <tr className="timetableTr">
                    <td className="timetableUser">
                    <img
                    src={mevick}
                    alt=""
                    className="timetableImg"
                    />
                    <span className="timetableName">Mr. Zenith</span>
                    </td> 
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">Physics</td>
                    <td className="timetableDate">7:30-12:00</td>
                </tr>
            </table>
      </div>
    )
}

export default TimeTable
