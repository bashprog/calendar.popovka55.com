import React, {useEffect} from "react";

import UserSettings from "../../components/UserSettings/UserSettings";

import {useQuery, useMutation} from "react-apollo";
import {getAllUsers} from "../../gql/queries/getAllUsers";
import {deleteUserById} from "../../gql/mutations/deleteUserById";
import Preloader from "../../components/Preloader/Preloader";

const UserSettingsContainer: React.FC = () => {
    const users = useQuery(getAllUsers);

    useEffect(() => {
        users.refetch();
    })

    const [deleteUser, deleteInfo] = useMutation(deleteUserById);

    const handleDeleteUserById = (id: string) => {
        deleteUser({variables: {_id: id}}).then(users.refetch).catch(err => console.log(err));
    }

    return (
        <>
            {(users.loading || deleteInfo.loading) ? <Preloader/> :
                <UserSettings deleteUser={handleDeleteUserById} users={users?.data?.getAllUsers}/>}
        </>
    )
}

export default UserSettingsContainer;