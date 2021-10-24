import "./teacher.css"
import { Timeline, Event, HomeWork, TimerSharp, LiveTvOutlined, BookOutlined} from "@material-ui/icons"
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Classes from "./components/classes/Classes"
import Assignment from "./components/assignment/Assignment"

// import { useState } from "react"


const Parent = () =>{
    // const [call, setCall] = useState(false)
    const {path, url} = useRouteMatch()
    return(
        <div className="parent">
            <div className= "parentDashboard">
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
                                <Event />
                                <li>Events</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/homework`}  className="url">
                                <HomeWork />
                                <li>Post Home Work</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/Classes`}  className="url">
                                <TimerSharp />
                                <li>My Classes Classes</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/liveclasses`}  className="url">
                                <LiveTvOutlined />
                                <li>Live Classes</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/Bookissued`}  className="url">
                                <BookOutlined />
                                <li>Book Issued</li>
                            </Link>
                        </div>
                        <div className="dashItems">
                            <Link to={`${url}/examtimetable`}  className="url">
                                <TimerSharp />
                                <li>Exam Time Table</li>
                            </Link>
                        </div>
                    </div>
                    <div className="parentDashViewer">
                        <Switch>
                            <Route path={`${path}/dashboard`}>
                                <Dashboard />
                            </Route>
                            <Route path={`${path}/liveclasses`}>
                                <Classes />
                            </Route>
                            <Route path={`${path}/homework`}>
                                <Assignment />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Parent