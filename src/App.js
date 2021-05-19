// import logo from './logo.svg';
import "./App.css";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            Home Component
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Welcome to your first assignment
// </p>
// <a
//   className="App-link"
//   href="https://www.wix.com/website-template/view/html/2846?siteId=9dabe0d0-1603-4a04-9bd6-7d9d9ca9e9cb&metaSiteId=3e8b1a18-1c30-41cf-87ac-e18816787ea8&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fall%2F2&tpClick=view_button"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Click me
// </a>
// </header>
