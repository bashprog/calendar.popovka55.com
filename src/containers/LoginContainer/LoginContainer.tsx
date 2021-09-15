import React, {useState, useEffect} from "react";
import Login from "../../components/Login/Login";

import {getCookie} from "../../helpers/cookie";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";
import Preloader from "../../components/Preloader/Preloader";

import { useHistory } from "react-router-dom";

const LoginContainer: React.FC = () => {
    const [auth, changeAuth] = useAtom(authAtom);
    const [loading, setLoading] = useState(true);
    const [error, changeError] = useState(false);

    let token = getCookie("token");

    console.log(token);

    let history = useHistory();

    useEffect(() => {
        if (!auth.authenticated && token && token != "") {
            auth.loginByToken(`${token}`).then(() => {
                setLoading(false)
            }).then(() => {
                if (auth.authenticated)
                    history.push("/")
            });
        } else {
            setLoading(false);
        }
    }, []);

    const loginByPass = () => {
        setLoading(true);

        let email = document.getElementById('login') as HTMLInputElement;
        let password = document.getElementById('password') as HTMLInputElement;

        auth.loginByPassword(`${email.value}`, `${password.value}`).then(() => {
            setLoading(false);

            if (auth.getInfo().error) {
                changeError(true);
                return;
            }

            if (auth.getInfo().authenticated){
                changeError(false);
                history.push("/")
            }
        })
            .catch(() => {setLoading(false); auth.serverError();})
    };

    return (
        <>
            {loading ? <Preloader/> : <Login login={() => {loginByPass()}} error={error}/>}
        </>
    )
};

export default LoginContainer;