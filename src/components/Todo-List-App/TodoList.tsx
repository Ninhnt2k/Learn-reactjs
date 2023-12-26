import React, {useState} from 'react';
import {Item, TodoListProps} from "./TodoInterface";
import TodoItem from '../Todo-List-App/TodoItem';

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    const [completedTodos, setCompletedTodos] = useState<number[]>([]);

    const handleTodoCompleted = (todoId: number) => {
        setCompletedTodos((prevCompleted) => {
            let index = prevCompleted.findIndex(pre=>pre==todoId);
            if(index == -1) return [...prevCompleted, todoId];
            else {
                let ar: number[] =[...prevCompleted]
                ar.splice(index, 1)
                return [...ar];
            }
        });
    }

    const showData = (todo:Item) => {
         return <TodoItem
             key={todo.id}
             todo={todo}
             completed={completedTodos.includes(todo.id)}
             onTodoCompleted={handleTodoCompleted}
         />;

    }

    return (
        <div className='list-todo'>
            {todos.map((todo) => showData(todo))}
        </div>
    );
}

export default TodoList;