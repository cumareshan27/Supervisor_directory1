import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Residents from "./components/Residents";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registerresident" component={Residents} />
          <Route exact path="/Profile" component={Profile} />
          {/* <Route exact path="/registersupervior" component={Supervisors} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Login}/>
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
