import React from 'react';
import {TodoItemProps} from "./TodoInterface";

const TodoItem: React.FC<TodoItemProps> = ({todo,completed, onTodoCompleted })=> {
    const handleCheckboxChange = () => {
        onTodoCompleted(todo.id);
    }

    return (
        <div className='todo-item'>
            <span>{todo.text}</span>
            <input type="checkbox" checked={completed} onChange={handleCheckboxChange}/>
        </div>
    );
}

export default TodoItem;