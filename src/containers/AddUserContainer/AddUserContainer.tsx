import React from "react";

import AddUser from "../../components/AddUser/AddUser";

import {useMutation} from "react-apollo";
import {addUser} from "../../gql/mutations/addUser";
import Preloader from "../../components/Preloader/Preloader";

const AddUserContainer: React.FC = () => {
    const [addUserMut, addInfo] = useMutation(addUser);

    const save = () => {
        let name = (document.getElementById("new-name") as HTMLInputElement).value;
        let email = (document.getElementById("new-email") as HTMLInputElement).value;
        let password = (document.getElementById("new-password") as HTMLInputElement).value;

        addUserMut({variables: {name: name, email: email, password: password}}).then(r => console.log(r)).catch(err => console.log(err));
    }

    return (
        <>
            {addInfo.loading ? <Preloader/> : <AddUser save={save}/>}
        </>
    )
};

export default AddUserContainer;