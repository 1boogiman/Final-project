import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NAvbar";
import Home from "./components/home";
import Contactme from "./components/contact_me";
import Resume from "./components/resume";
import NotFound from "./components/notFound";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/contact_me" component={Contactme} />
            <Route path="/resume" component={Resume} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
