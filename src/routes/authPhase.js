import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import isPmDev from '../hooks/IsPMorDev';
import { useParams } from 'react-router-dom';


const PrivateRoute = () => {
    let params = useParams();
    const [result, setResult] =  useState(null)
    setResult(isPmDev(params.id))
    return result === 'None' ? <Navigate to="/profile/1" /> : <Outlet/>;
}

export { PrivateRoute };

/*function PrivateRoute({ component: Component, ...rest }) {
    let params = useParams();
    let result = isPmDev(params.id)
    return (
        <Route {...rest} render={props => {
            if (result === 'None') {
                // not logged in so redirect to login page with the return url
                return <Navigate replace to={{ pathname: '/profile/1', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}*/