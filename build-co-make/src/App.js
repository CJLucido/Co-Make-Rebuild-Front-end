import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";
import UserHome from "./components/UserHome.js";
import IssuesListPage from "./components/IssuesListPage.js";
import NavBar from "./components/Navheader";

// IMPORT SUBMIT ISSUE FORM
import SubmitIssueForm from "./components/submitIssueForm";

import "./App.css";

function App() {
  // NEW ISSUE STATE

  const [newIssue, setNewIssue] = useState({});

  // NEW ISSUE SETTER

  const onSubmitIssue = formValues => {
    setNewIssue(formValues);
  };

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/userHome" component={UserHome} />
        <Route path="/issuesListPage" component={IssuesListPage} />

        {/* ROUTE FOR PAGE WITH FORM TO SUBMIT ISSUE */}
        <Route
          path="/submitIssue"
          render={props => {
            return <SubmitIssueForm onSubmit={onSubmitIssue} />;
          }}
        />
        {/* <Route path="/issue/:id" component={IssuePage}/> */}
      </Switch>
    </div>
  );
}

export default App;
