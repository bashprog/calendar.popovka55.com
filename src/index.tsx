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

import ProtectedRoute from "./helpers/ProtectedRoute";

import {getCookie, setCookie, deleteCookie} from "./helpers/cookie";
import "./helpers/prototypes";

import LoginContainer from "./containers/LoginContainer/LoginContainer";
import ScheduleContainer from "./containers/ScheduleContainer/ScheduleContainer";
import NavBar from "./components/NavBar/NavBar";
import LogOut from "./containers/LogOut/LogOut"

import {useAtom} from "jotai";
import {authAtom} from "./atoms";
import AddFlyContainer from "./containers/AddFlyContainer/AddFlyContainer";

const App = () => {
    const [auth, updateAuth] = useAtom(authAtom);

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
                    <Route path={"/"}>
                        <NavBar/>
                    </Route>
                    <Switch>
                        <ProtectedRoute path={"/"} exact component={<ScheduleContainer/>}/>
                        <ProtectedRoute path={"/addfly"} exact component={<AddFlyContainer/>}/>
                        <Route path={"/login"} exact>
                            <LoginContainer/>
                        </Route>
                    </Switch>
                    <ProtectedRoute path={"/logout"} exact component={<LogOut/>}/>
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));
