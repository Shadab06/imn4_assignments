import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';

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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
