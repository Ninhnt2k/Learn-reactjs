import React from 'react';
import {Item} from "../TodoInterface";
import TodoList from "./TodoList";

function Index () {

    const todos: Item[] = [
        { id: 1, text: 'Task 1', completed: false },
        { id: 2, text: 'Task 2', completed: true },
        { id: 3, text: 'Task 3', completed: false },
    ];

    return (
        <div className='index'>
            <TodoList todos={todos} />
        </div>
    );
}

export default Index;