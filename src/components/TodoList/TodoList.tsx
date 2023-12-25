import React from 'react';

interface Data {
    toDos: string[];
    deleteTodo: (index:number) => void;
}

function TodoList(props?: Data) {

    const showTodos =
        props?.toDos.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <button onClick={() => props?.deleteTodo(index)}>Delete</button>
                </li>
            );
        })

    return(
        <ul>
            {showTodos}
        </ul>
    );

}

export default TodoList;