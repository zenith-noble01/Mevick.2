import "./book.css";
import mevick from '../../../images/secon1.jpg'
// import { Link } from "react-router-dom"

export default function Book() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Books Issued</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Student Name</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Book Quantity</th>
          <th className="widgetLgTh">Return Date</th>
          <th className="widgetLgTh">Status</th>
          <th className="widgetLgTh">Subject</th>
          <th className="widgetLgTh">ISBN NUMBER</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={mevick}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Zenith Noble</span>
          </td>
          <td className="widgetLgDate">9/20/2021</td>
          <td className="widgetLgAmount">2</td>
          <td className="widgetLgDate">9/20/2021</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td className="widgetLgSubject">Physics</td>
          <td className="widgetLgISBN">89765435678909943</td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={mevick}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Zenith Noble</span>
          </td>
          <td className="widgetLgDate">9/20/2021</td>
          <td className="widgetLgAmount">2</td>
          <td className="widgetLgDate">9/20/2021</td>
          <td className="widgetLgStatus">
              <Button type="Pending" />
          </td>
          <td className="widgetLgSubject">Physics</td>
          <td className="widgetLgISBN">89765435678909943</td>
        </tr>
      </table>
    </div>
  );
}
