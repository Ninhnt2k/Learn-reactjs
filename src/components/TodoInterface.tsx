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

export type Todo = {
    id: number,
    title: string,
}

export type editTodo = {
    editTodo: Todo,
}

export type UserItem = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

export type ListUserProps = {
    listUsers: UserItem[];
}

export type InitState = {
    users: UserRedux[]
}

export type UserRedux = {
    id: number;
    name: string;
}



