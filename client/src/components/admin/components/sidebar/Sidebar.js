import "./sidebar.css"
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Home from '../../pages/home/Home'
import Post from '../../pages/post/Post'
import StudentList from '../../pages/studentlist/StudentList'
import TeacherList from '../../pages/teacherlist/TeacherList'
import Messages from '../../pages/messages/Messages'
import { Timeline } from '@material-ui/icons'
const Sidebar = () => {
    const {path, url} = useRouteMatch()
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebatList">
                        <li className="sidebarlinks">
                            <Link to={`${url}/dashboard`} className="td">
                            <Timeline/>Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebatList">
                        <li className="sidebarlinks ">
                            <Link to={`${url}/studentList`} className="td">
                                <i className="fa fa-users"></i> Students
                            </Link>
                        </li>
                        <li className="sidebarlinks">
                            <Link to={`${url}/teacherList`} className="td">
                                Teacher
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebatList">
                        <li className="sidebarlinks">
                            Mails
                        </li>
                        <li className="sidebarlinks">
                            <Link to={`${url}/messages`} className="td">
                                Messages
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Posts</h3>
                    <ul className="sidebatList">
                        <Link to={`${url}/post`} className="td">
                        <li className="sidebarlinks">
                            To Official Site
                        </li>
                        </Link>
                        <li className="sidebarlinks">
                           To Teachers
                        </li>
                    </ul>
                </div>
            </div>
            <div className="adminContainer">
                <Switch>
                    <Route path={`${path}/dashboard`}>
                        <Home />
                    </Route>
                    <Route path={`${path}/post`}>
                        <Post />
                    </Route>
                    <Route path={`${path}/studentList`}>
                        <StudentList />
                    </Route>
                    <Route path={`${path}/teacherList`}>
                        <TeacherList />
                    </Route>
                    <Route path={`${path}/messages`}>
                        <Messages />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar
