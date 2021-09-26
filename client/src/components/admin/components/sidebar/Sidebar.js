import "./sidebar.css"
import Pusher from "../pusher/Pusher"
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Posts from '../../pages/post/Post'
const Sidebar = () => {
    const {path, url} = useRouteMatch()
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebatList">
                        <li className="sidebarlinks active">
                            Home
                        </li>
                        <li className="sidebarlinks">
                            analytics
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebatList">
                        <li className="sidebarlinks ">
                            <Link to='/studentlist' className="td">
                               Students
                            </Link>
                        </li>
                        <li className="sidebarlinks">
                            Teachers
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
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Posts</h3>
                    <ul className="sidebatList">
                        <Link to={`${url}/posts`} className="td">
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
            <Pusher>
                <Switch>
                    <Route path={`${path}/posts`} >
                        <Posts />
                    </Route>
                </Switch>
            </Pusher>
        </div>
    )
}

export default Sidebar
