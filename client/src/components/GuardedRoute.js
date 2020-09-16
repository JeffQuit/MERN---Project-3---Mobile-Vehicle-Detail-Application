
import React from 'react';
import { Route, Redirect } from "react-router-dom";

//route protector for the admin page. Login redirect is based on the status of authorized. 
const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

export default GuardedRoute;