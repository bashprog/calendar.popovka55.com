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
import AddFlyContainer from "./containers/AddFlyContainer/AddFlyContainer";
import ChangeFlyContainer from "./containers/ChangeFlyContainer/ChangeFlyContainer";
import SettingsContainer from "./containers/SettingsContainer/SettingsContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import AddUserContainer from "./containers/AddUserContainer/AddUserContainer";

import {useAtom} from "jotai";
import {authAtom} from "./atoms";
import PopUpContainer from "./containers/PopUpContainer/PopUpContainer";


const App = () => {
    const [auth, updateAuth] = useAtom(authAtom);

    useEffect(() => {

    }, []);

    const client = new ApolloClient({
        uri: "http://localhost:4001/graphql",
        // uri: "http://192.168.0.162:4001/graphql"
    });

    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Provider>
                    <Route path={"/"}>
                        <NavBar/>
                    </Route>
                    <Switch>
                        <Route path={"/login"} exact>
                            <LoginContainer/>
                        </Route>
                        <ProtectedRoute path={"/"} exact component={<HomeContainer/>}/>
                        <ProtectedRoute path={"/schedule"} exact component={<ScheduleContainer/>}/>
                        <ProtectedRoute path={"/addfly"} exact component={<AddFlyContainer/>}/>
                        <ProtectedRoute path={"/changefly/:id"} exact component={<ChangeFlyContainer/>}/>
                        <ProtectedRoute path={"/settings"} exact component={<SettingsContainer />}/>
                        <ProtectedRoute path={"/adduser"} exact component={<AddUserContainer />}/>
                    </Switch>
                    <ProtectedRoute path={"/logout"} exact component={<LogOut/>}/>
                    <PopUpContainer />
                </Provider>
            </ApolloProvider>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));
