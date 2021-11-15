import React from "react";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import {Redirect} from "react-router-dom";

const LogOut = () => {
    const [auth, changeAuth] = useAtom(authAtom);

    auth.logout();

    return (
        <Redirect to={'/login'} />
    );
};

export default LogOut;