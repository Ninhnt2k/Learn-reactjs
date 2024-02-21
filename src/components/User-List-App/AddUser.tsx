import React, {useState} from 'react';
import {User} from "../TodoInterface";
import { toast } from 'react-toastify';

const AddUser: React.FC<User> = ({addUser}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!value) return;
        setValue('');
        addUser(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Enter'
            />
        </form>
    );

}

export default AddUser;
