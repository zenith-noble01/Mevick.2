import Admin from './components/admin/Admin'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/main/Main'
import NotFound from './components/NotFound/NotFound'
import About from './components/about/About.'
import Contact from './components/Contact/Contact'
import Blog from './components/blog/Blog'
import Alogin from './components/admin/pages/Login/Login'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <Router>
     <Topbar />
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/admin">
          <Admin />
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
        <Route path="/adminLogin">
          <Alogin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
