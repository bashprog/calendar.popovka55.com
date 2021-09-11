import React, {useState, useEffect} from "react";
import Login from "../../components/Login/Login";

import {getCookie} from "../../helpers/cookie";

import {loginByToken} from "../../gql/queries/LoginByToken";
import {loginByPassword} from "../../gql/queries/LoginByPassword";

import {useQuery, useMutation} from "react-apollo";

const LoginContainer: React.FC = () => {
    let token = getCookie("token");



    return (
        <Login login={() => {return null}} error={false}/>
    )
};

export default LoginContainer;