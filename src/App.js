import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LogIn from "./containers/Auth/LogIn/LogIn";
import SignUp from "./containers/Auth/SignUp/SignUp";
import Todo from "./containers/Todo/Todo";
import Notes from "./containers/Notes/Notes";
import Motivation from "./containers/Motivation/Motivation";
import Dashbord from "./components/Dashbord/Dashbord";

function App() {
  const [userAuth, setUserAuth] = useState(true);

  return (
    <div>
      {userAuth ? (
        <Dashbord>
          <Switch>
            <Route exact path="/motivation" component={Motivation} />
            <Route path="/todo" component={Todo} />
            <Route path="/notes" component={Notes} />
            <Route component={ErrorPage} />
          </Switch>
        </Dashbord>
      ) : (
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route component={ErrorPage} />
          </Switch>
        </Layout>
      )}
    </div>
  );
}

export default App;
