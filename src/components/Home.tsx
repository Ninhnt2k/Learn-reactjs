import React from 'react';
import {connect} from "react-redux";
import {InitState, UserRedux} from "./TodoInterface";

class Home extends React.Component<any, any> {
    handleDeleteUser = (user: UserRedux) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.createUserRedux();
    }

    render() {
        const listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello world from home page with Nengg IT 1111!</div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map((item: UserRedux, index:number) => {
                        return (
                            <div key={item.id}>
                                {index +1} - {item.name}
                                &nbsp; <span className='color' onClick={() => this.handleDeleteUser(item)}>X</span>
                            </div>
                        );
                    } )
                    }

                    <button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>

            </>

        );
    }
}

const mapStateProps = (state: InitState) => {
   return {
       dataRedux: state.users
   }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteUserRedux: (userDelete: UserRedux)=> dispatch({type: 'DELETE_USER', payload: userDelete}),
        createUserRedux: ()=> dispatch({type: 'CREATE_USER'}),
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Home);
