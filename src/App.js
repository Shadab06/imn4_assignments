
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component= { Home } ></Route>
        <Route  path='/resume' component = { Resume } ></Route>
        <Route  path='/projects' component = { Projects } ></Route>
        <Route  path='/contact' component = { Contact } ></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default App;
