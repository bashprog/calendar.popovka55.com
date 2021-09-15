import React from "react";
import {Route, Redirect} from "react-router-dom";

import {useAtom} from "jotai";
import {authAtom} from "../atoms";

interface IProtectedRoute {
    Component: any,
    rest: any
}

const ProtectedRoute = ({component, ...rest}: any) => {
    const [auth] = useAtom(authAtom);

    console.log(auth);

    return (
        <>
            <Route {... rest} render={(props) => {
                if (auth.authenticated){
                    return component
                } else {
                    return (
                        <Redirect to={{pathname: "/login", state: {from: props.location}}} />
                    )
                }
            }}/>
        </>
    )
};

export default ProtectedRoute;

