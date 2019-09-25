import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";
import UserHome from "./components/UserHome.js";
import IssuesListPage from "./components/IssuesListPage.js";
import NavBar from "./components/Navheader";
import './App.scss';
import PrivateRoute from './components/PrivateRoute';

// IMPORT SUBMIT ISSUE FORM
import SubmitIssueForm from "./components/SubmitIssueForm";

function App() {
  // NEW ISSUE STATE

  const [newIssue, setNewIssue] = useState({});

  // NEW ISSUE SETTER

  const onSubmitIssue = formValues => {
    setNewIssue(formValues);
  };
console.log("hello from app.js");
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <PrivateRoute exact path="/userHome" component={UserHome} />
        <PrivateRoute exact path="/issuesListPage" component={IssuesListPage} />
        <PrivateRoute  path="/userHome" component={NavBar}/>
        <PrivateRoute  path="/issuesListPage" component={NavBar}/>

        {/* ROUTE FOR PAGE WITH FORM TO SUBMIT ISSUE */}
        <PrivateRoute
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
