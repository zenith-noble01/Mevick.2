import { ArrowDownward } from "@material-ui/icons"
import "./class.css"

const Classes = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="classes">
            <div className="classTop">
                make a live class with your students by chosing one of your classes <ArrowDownward/>
            </div>
            <div className="liveClassesContainr">
            <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Class</th>
            <th className="widgetLgTh">Title</th>
            <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <div className="parentItem">
                <select className="newUserSelect" name="active" id="active">
                    <option value="Form 4">Form 4</option>
                    <option value="Form 5">Form 5</option>
                    <option value="LSA">LSA</option>
                    <option value="LSS">LSS</option>
                    <option value="USA">USA</option>
                    <option value="USS">USS</option>
                </select>
            </div>
            </td>
            <td className="widgetLgDate">
                <div className="parentIteml">
                    <input className="names" type="email" placeholder="mevik@gmail.com" required />
                </div>
            </td>
            <td className="widgetLgStatus">
                <a href="https://milesconfrence.vercel.app/">
                    <Button type="START__MEETING" />
                </a>
            </td>
        </tr>
      </table>
            </div>
        </div>
    )
}

export default Classes
