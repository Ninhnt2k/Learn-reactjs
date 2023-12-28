import React from 'react';
import {ListUsers} from "../TodoInterface";


const ListUser: React.FC<ListUsers> = ({users, deleteUser}) => {

    const showListUsers = users.map((item, id) => {
        return (
            <li key={id}>
                {item}
                <button onClick={() => deleteUser ? deleteUser(id) : null}>Delete</button>
            </li>
        );
    })

    return (
        <ul>
            {showListUsers}
        </ul>
    );


}

export default ListUser;