import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

import "./helpers/prototypes";

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";

import {Provider} from "jotai";

import "./main.sass";

import {
    BrowserRouter,
    HashRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import {getCookie, setCookie, deleteCookie} from "./helpers/cookie";

import LoginContainer from "./containers/LoginContainer/LoginContainer";
import ScheduleContainer from "./containers/ScheduleContainer/ScheduleContainer";

const App = () => {
    useEffect(() => {

    }, []);

    const client = new ApolloClient({
        uri: "http://localhost:4001/graphql",
        // uri: "http://153.92.214.247:4001/graphql"
    });

    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Provider>
                    <Route path={"/login"}>
                        <LoginContainer/>
                    </Route>
                    <Route path={"/"}>
                        <ScheduleContainer/>
                    </Route>
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));
