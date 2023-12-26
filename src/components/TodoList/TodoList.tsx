import React from 'react';

interface Data {
    toDos: string[];
    deleteTodo?: (index:number) => void;
}

const TodoList: React.FC<Data> = ({toDos, deleteTodo})=> {

    const showTodos =
        toDos.map((item, index) => {
            return (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteTodo ? deleteTodo(index) : null}>Delete</button>
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