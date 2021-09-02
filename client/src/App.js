import StudentList from './components/admin/pages/studentlist/StudentList'
import TeacherList from './components/admin/pages/teacherlist/TeacherList'
import Post from './components/admin/pages/post/Post'
import Notifications from './components/admin/pages/Notifications/Notification'
import Admin from './components/admin/Admin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/studentlist">
          <StudentList />
        </Route>
        <Route path="/teacherlist">
          <TeacherList />
        </Route>
        <Route path="/admin/notifications">
          <Notifications />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
