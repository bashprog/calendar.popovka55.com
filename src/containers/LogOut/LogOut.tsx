import React from "react";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import {useHistory} from "react-router-dom";

const LogOut = () => {
    const [auth, changeAuth] = useAtom(authAtom);

    auth.logout();

    let history = useHistory();
    history.push("/login");

    return null;
};

export default LogOut;