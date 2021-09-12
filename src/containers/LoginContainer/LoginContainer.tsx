import React, {useState, useEffect} from "react";
import Login from "../../components/Login/Login";

import {getCookie} from "../../helpers/cookie";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";
import Preloader from "../../components/Preloader/Preloader";

const LoginContainer: React.FC = () => {
    const [auth, changeAuth] = useAtom(authAtom);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth.authenticated) {
            auth.loginByToken("7YuvMDj0hGmU1ZVDA5G94TjW319Z09Ic").then(() => {setLoading(false)});
        }

    }, []);

    let token = getCookie("token");

    return (
        <>
            {loading ? <Preloader/> : <Login login={() => {return null}} error={false}/>}
        </>
    )
};

export default LoginContainer;