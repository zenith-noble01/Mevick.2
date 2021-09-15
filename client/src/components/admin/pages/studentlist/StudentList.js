import "./studentlist.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Student from "../../components/student/Student"
const StudentList = () => {
    return (
        <div className="studentList">
            <div className="studentListContainer">
                <Sidebar />
                <Student />
            </div>
        </div>
    )
}

export default StudentList
