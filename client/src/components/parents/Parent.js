import "./parent.css"
import { Timeline, PaymentOutlined, Event, HomeWork, TimerSharp, LiveTvOutlined, BookOutlined, CardTravel } from "@material-ui/icons"
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import ID from './components/idcard/ID'


const Parent = () =>{
    const {path, url} = useRouteMatch()
    return(
        <div className="parent">
            <div className="parentDashboard">
                <div className="parentDash">
                    <div className="dashElements">
                        <div className="dashItems">
                            <Link to={`${url}/dashboard`}  className="url">
                                <Timeline />
                                <li>Dashboard</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/payfee`}  className="url">
                                <PaymentOutlined />
                                <li>Fee Payment</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/payfee`}  className="url">
                                <Event />
                                <li>Events</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/homework`}  className="url">
                                <HomeWork />
                                <li>Home Work</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/classtimetable`}  className="url">
                                <TimerSharp />
                                <li>Class Time Table</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/liveclasses`}  className="url">
                                <LiveTvOutlined />
                                <li>Live Classes</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/bookissued`}  className="url">
                                <BookOutlined />
                                <li>Book Issued</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/examtimetable`}  className="url">
                                <TimerSharp />
                                <li> Exam Time Table</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/printId`}  className="url">
                                <CardTravel />
                                <li>Print Id</li>
                            </Link>
                        </div>
                    </div>
                    <div className="parentDashViewer">
                        <Switch>
                            <Route path={`${path}/dashboard`}>
                                <Dashboard />
                            </Route>
                            <Route path={`${path}/printId`}>
                                <ID />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Parent