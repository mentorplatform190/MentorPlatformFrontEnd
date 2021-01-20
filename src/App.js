import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import MentorSignup from './components/Mentor/SignUp';
import MentorLogin from './components/Mentor/Login';
import MenteeSignup from './components/Mentee/SignUp';
import MenteeLogin from './components/Mentee/Login';
import FindMentor from './components/Find-My-Mentor/FindMentor';
import Home from './components/Home/Home';
import MentorProfile from './components/Mentor/Profile';
import Dashboard from './components/Mentor/Dashboard';
import MenteeReq from './components/Mentee/Request'

const app=(props)=> {
  let routes = (
 
    <Switch>
    <Route path="/mentor-register" component={MentorSignup} />
    <Route path="/mentee-register" component={MenteeSignup} />
    <Route path="/mentee-login" component={MenteeLogin} />
    <Route path="/mentor-login" exact component={MentorLogin} />
    <Route path="/mentor-profile"  component={MentorProfile} />
    <Route path="/auth/mentor-dashboard"  component={Dashboard} />
    <Route path="/mentee-req"  component={MenteeReq} />
    <Redirect exact from="/find-mentor" to="/find-mentor/all" />
    <Route path="/find-mentor/:page?" exact component={FindMentor} />
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
