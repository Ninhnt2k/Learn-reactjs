import React, {useState} from 'react';
import AddUser from "./AddUser";
import ListUser from "./ListUser";

const Index = () => {
    const [users, setUsers] = useState<string[]>([]);

    const addUser = (name:string) => {
        const newUsers = [...users, name];
        setUsers(newUsers);
    }

    const deleteUser = (index:number) => {
        const newUsers = [...users];
        newUsers.splice(index,1);
        setUsers(newUsers);
    }

    return (
        <div className='index'>
            <AddUser addUser={addUser} />
            <h1>List User</h1>
            <ListUser users={users} deleteUser={deleteUser} />
        </div>
    );
}

export default Index;