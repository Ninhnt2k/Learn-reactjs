import React, { useState } from 'react';

type Data = {
    addTodo:(text:string) => void;
}

const TodoForm = (props?: Data) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!value) return;
        setValue('');
        props?.addTodo(value);
        // console.log(111, this.state.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;