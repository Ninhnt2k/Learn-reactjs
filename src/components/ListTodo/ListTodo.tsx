import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import {toast} from 'react-toastify';
import {Todo} from "../TodoInterface";

class ListTodo extends React.Component<any> {
    state = {
        listTodos: [
            {id: 1, title: 'Doing homework'},
            {id: 2, title: 'Making videos '},
            {id: 3, title: 'Fixing bugs'},
        ],
        editTodo: {
            id: 0,
            title: ''
        },
    }

    addNewTodo = (todo: Todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo.title],
        })
        toast.info("Added successfully!");
    }

    handleDeleteTodo = (todo: Todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo,
        })
        toast.success("Delete successfully");
    }

    handleEditTodo = (todo: Todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {},
            })
            toast.success("Updated successfully");
            return;

        }


        //edit
        this.setState({
            editTodo: {...todo},
        })
    }

    handleOnChangeEditTodo = (event: any) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>Hello world with React.JS</p>
                <div className='list-todo-container'>
                    <AddTodo addNewTodo={this.addNewTodo}/>
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>{index + 1} -
                                           <input value={editTodo.title}
                                                  onChange={(event) => this.handleOnChangeEditTodo(event)}/>
                                       </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>

                                    }
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}
                                    </button>
                                    <button className='delete' onClick={() => this.handleDeleteTodo(item)}>Delete
                                    </button>
                                </div>

                            );
                        })
                        }

                    </div>
                </div>
            </>
        );
    }
}

export default ListTodo;
