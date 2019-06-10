import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './Login/Login';
import ListGuestLedger from './ListGuestLedger/ListGuestLedger';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/listguest" component={ListGuestLedger} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
