import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import MentorSignup from './components/Mentor/SignUp';
import MentorLogin from './components/Mentor/Login';
import MenteeSignup from './components/Mentee/SignUp';
import MenteeLogin from './components/Mentee/Login';
import Home from './components/Home/Home';

const app=(props)=> {
  let routes = (
 
    <Switch>
    <Route path="/mentor-register" component={MentorSignup} />
    <Route path="/mentee-register" component={MenteeSignup} />
    <Route path="/mentee-login" component={MenteeLogin} />
    <Route path="/mentor-login" exact component={MentorLogin} />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
   
  );
  return (
   
   <Layout>
     {routes}
   </Layout>
   
  );
}

export default app;
