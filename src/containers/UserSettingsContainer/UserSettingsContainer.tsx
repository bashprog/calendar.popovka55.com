import React from "react";

import UserSettings from "../../components/UserSettings/UserSettings";

import {useQuery} from "react-apollo";
import {getAllUsers} from "../../gql/queries/getAllUsers";

const UserSettingsContainer: React.FC = () => {
    const users = useQuery(getAllUsers);

    return(
        <UserSettings users={users?.data?.getAllUsers}/>
    )
}

export default UserSettingsContainer;