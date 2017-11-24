import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import IndexPage from '../containers/Home/index';
import App from '../App';
import NotFindPage from '../containers/404';

const routes = (
    <Router>
        <App>
          <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route  component={NotFindPage} />
          </Switch>
        </App>
    </Router>
)

export default routes;
