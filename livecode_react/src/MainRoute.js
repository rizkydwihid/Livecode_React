import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import AppHome from './AppHome';
import App from './App';
import Profile from './pages/Profile';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppHome}/>
            {/* <Route exact path="/profile" component={Profile}/> */}
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/seemovie" component={App}/>

        </Switch>
    )
}
export default MainRoute;