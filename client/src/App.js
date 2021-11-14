import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './components/admin/Admin'
import AdminLogin from './components/admin/pages/Login/Login'
import Main from './components/main/Main'
import NotFound from './components/NotFound/NotFound'
import About from './components/about/About.'
import Contact from './components/Contact/Contact'
import Blog from './components/blog/Blog'
import Topbar from './components/topbar/Topbar'
import EditStudent from './components/admin/components/editStudent/EditStudent'
import NewStudent from './components/admin/components/newstudent/NewStudent'
import Admission from './components/admission/Admission'
import Parent from './components/parents/Parent'
import Plogin from './components/parents/components/parentlogin/Plogin'
import Teacher from './components/teacher/Teacher'
import Job from './components/jobs/Job'

function App() {
  const  user = true;
  // const Admin = true;
  return (
    <Router>
     <Topbar />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/admin">
          {user ? <Admin /> : <Main />}
        </Route>
        <Route path="/AdminLogin">
          <AdminLogin />
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
        <Route path="/ParentsLogin">
          <Plogin />
        </Route>
        <Route path="/admission">
          <Admission />
        </Route>
        <Route path="/parent">
          <Parent />
        </Route>
        <Route path="/teacher">
          <Teacher />
        </Route>
        <Route path="/Jobs">
          <Job />
        </Route>
        <Route path="/Newstudent">
          {user ? <NewStudent /> : <Main />}
        </Route>
        <Route path="/students/:studentID">
          {user ?   <EditStudent /> : <Main /> }
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
