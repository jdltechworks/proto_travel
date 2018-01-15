import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from '../containers/App'
import Home from '../containers/Home'
import User from '../containers/User'

import Auth from '../containers/Auth'
import Login from '../containers/Login'
import Register from '../containers/Register'

import NotFound from '../containers/NotFound'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/accounts" component={Auth}>
            <Route path="login" component={Login} />
            <Route path="register" component={Register} />
        </Route>
        <Route path="*" component={NotFound} />
    </Route>
)

export default routes
