import "./studentlist.css"
import Atop from '../../components/Atopbar/ATopbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Student from "../../components/student/Student"
const StudentList = () => {
    return (
        <div className="studentList">
            <Atop />
            <div className="studentListContainer">
                <Sidebar />
                <Student />
            </div>
        </div>
    )
}

export default StudentList
