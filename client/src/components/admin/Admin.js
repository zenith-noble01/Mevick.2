import './admin.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import { Route, Switch  } from 'react-router-dom'
import StudentList from './pages/studentlist/StudentList'


const Admin = () => {
    return (
        <div className="admin">
            <div className="adminContainer">
                <Sidebar />
                <Home />
                <Switch>
                    <Route path="/studentlist">
                        <StudentList />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Admin
