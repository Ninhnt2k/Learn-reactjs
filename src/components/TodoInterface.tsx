import React from 'react';

export type Item = {
    id: number;
    text: string;
    completed: boolean;
}

export type TodoListProps = {
    todos: Item[];
}

export type TodoItemProps = {
    todo: Item;
    completed:boolean;
    onTodoCompleted: (index:number) => void;
}

export type User = {
    addUser:(text:string) => void;
}

export type ListUsers = {
    users: string[];
    deleteUser: (id:number) => void;
}

