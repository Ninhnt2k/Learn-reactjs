import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Index() {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (text: string) => {
        const newTodos = [...todos, text ];
        setTodos(newTodos);
    }

    const deleteTodo = (index:number) => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }

    return (
        <div className='index'>
            <h1>TodoList</h1>
            <TodoForm addTodo={addTodo}/>
            <TodoList toDos={todos} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default Index;