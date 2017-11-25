import React from 'react';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import Home from '../containers/Home';
import City from '../containers/City';
import Search from '../containers/Search';
import App from '../App';
import NotFindPage from '../containers/404';

const routes = (
    <Router>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/city' component={City} />
            {/*可选参数4.0的写法,之前这样写 (/:keyword)*/}
            <Route exact path='/search/:category/:keyword?' component={Search} />
            <Route  component={NotFindPage} />
          </Switch>
        </App>
    </Router>
)

export default routes;
