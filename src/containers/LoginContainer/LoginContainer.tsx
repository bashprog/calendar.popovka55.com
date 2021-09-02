import React from "react";
import Login from "../../components/Login/Login";

const LoginContainer: React.FC = () => {
    return (
        <Login login={() => {return null}} error={false}/>
    )
};

export default LoginContainer;