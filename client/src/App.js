import StudentList from './components/admin/pages/studentlist/StudentList'
import TeacherList from './components/admin/pages/teacherlist/TeacherList'
import Post from './components/admin/pages/post/Post'
import Notifications from './components/admin/pages/Notifications/Notification'
import Admin from './components/admin/Admin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main'
import NotFound from './components/NotFound/NotFound'
import About from './components/about/About.'
import Contact from './components/Contact/Contact'
import Blog from './components/blog/Blog'

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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
