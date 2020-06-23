import { BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import Route from './Route';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/main" component={Main} />
        <Route path="/register" component={SignUp} isWelcome />
        <Route path="/login" component={SignIn} isWelcome />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/reset" component={ResetPassword} />
        <Route path="/profile" component={Profile} />

        <Route path="/editprofile" component={EditProfile} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
