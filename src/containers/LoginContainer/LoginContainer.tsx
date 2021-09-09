import React from "react";
import Login from "../../components/Login/Login";

import {getCookie} from "../../helpers/cookie";

const LoginContainer: React.FC = () => {
    let token = getCookie("token");



    return (
        <Login login={() => {return null}} error={false}/>
    )
};

export default LoginContainer;