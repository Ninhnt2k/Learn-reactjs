import React from 'react';
import {toast} from "react-toastify";

class AddTodo extends React.Component<any> {
    state={
        title: '',
    }

    handleOnChangeTitle = (event:any) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleAddToDo = () => {
        if (!this.state.title) {
            toast.error("Wow error");
            return;
            //if(undefined/null/empty) => false;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: '',
        })
    }

    render() {
        let {title} = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title} onChange={(event) => this.handleOnChangeTitle(event)}/>
                <button type="button" className='add' onClick={() => this.handleAddToDo()}>Add</button>
            </div>
        );
    }
}

export default AddTodo;
