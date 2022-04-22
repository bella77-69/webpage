import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Project from "./pages/Projects/Project";
import Skill from "./pages/Skills/Skill";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Loader/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Router>
      {loading === false ? (
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Project} />
            <Route path="/skills" exact component={Skill} />
          </Switch>
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </Router>
  );
}

export default App;
