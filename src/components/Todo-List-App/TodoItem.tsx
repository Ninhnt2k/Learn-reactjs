import React, {useState} from 'react';

interface Data {
   id: number;
   title: string;
   completed: boolean;
}

const TodoItem = (props?: Data) => {
    const [completed, setCompleted] = useState(Data.completed);

    const todoItem = () => {

    }


    return (
        <div className='todo-item'>

        </div>
    );
}

export default TodoItem;
