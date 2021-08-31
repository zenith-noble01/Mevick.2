import StudentList from './components/admin/pages/studentlist/StudentList'
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
      </Switch>
    </Router>
  );
}

export default App;
