import React from "react";
import { Route, Redirect }  from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return (
        <Route 
        {...theRest}
        render={(props) => {
            if (localStorage.getItem("token")) {
                return <Component {...props} />;
            } else {
                console.log(
                    "PrivateRoute.js: Route.render: redirecting"
                );
                return <Redirect to="/login" />;
            } 
        }}
        />
    );
};

export default PrivateRoute; 