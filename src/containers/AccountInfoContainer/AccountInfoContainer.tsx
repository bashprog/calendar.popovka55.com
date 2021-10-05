import React, {useState} from "react";

import AccountInfo from "../../components/AccountInfo/AccountInfo";

import {useAtom} from "jotai";
import {authAtom} from "../../atoms";

import {useMutation} from "react-apollo";
import {updateUser} from "../../gql/mutations/updateUser";
import Preloader from "../../components/Preloader/Preloader";

const AccountInfoContainer: React.FC = () => {
    const [auth] = useAtom(authAtom);

    const [props, changeProps] = useState({
        _id: auth._id,
        role: auth.role,
        name: auth.name,
        email: auth.email,
        password: auth.password,
    });

    const [updateUserMut, updateInfo] = useMutation(updateUser);

    const save = () => {
        let name = (document.getElementById("change-name") as HTMLInputElement).value;
        let email = (document.getElementById("change-email") as HTMLInputElement).value;
        let password = (document.getElementById("change-password") as HTMLInputElement).value;

        updateUserMut({
            variables: {
                _id: auth._id,
                name: name,
                email: email,
                password: password
            }
        }).then((res) => {
            console.log(res);
            auth.loginByToken(auth.token).then(r => changeProps(res.data.updateUser));
        })
    };

    return (
        <>
            {(updateInfo.loading && Object.keys(props)) ? <Preloader/> : <AccountInfo {...props} save={save}/>}
        </>
    )
};

export default AccountInfoContainer;