import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/projects.js" exact>
            <Projects />
          </Route>

          <Route path="/resume.js" exact>
            <Resume />
          </Route>

          <Route path="/contact.js" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
