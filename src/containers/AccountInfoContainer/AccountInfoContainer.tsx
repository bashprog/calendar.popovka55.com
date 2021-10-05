import React from "react";

import AccountInfo from "../../components/AccountInfo/AccountInfo";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

const AccountInfoContainer: React.FC = () => {
    const [auth] = useAtom(authAtom);

    const save = () => {
        let name = (document.getElementById("change-name") as HTMLInputElement).value;
        let email = (document.getElementById("change-email") as HTMLInputElement).value;
        let password = (document.getElementById("change-password") as HTMLInputElement).value;

        console.log(name, email, password);
    };

    const props = {
        _id: auth._id,
        role: auth.role,
        name: auth.name,
        email: auth.email,
        password: auth.password,
        save: save
    };

    return(
        <AccountInfo {... props}/>
    )
};

export default AccountInfoContainer;