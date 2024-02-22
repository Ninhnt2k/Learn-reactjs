import React from "react";
import "./ListUser.scss";
import axios from "axios";
import {ListUserProps} from "../TodoInterface";

class ListUser extends React.Component<any, any> {
    state:ListUserProps= {
        listUsers: [],
    }

    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [],
        })
    }

    render() {
        let {listUsers} = this.state;
        return (
            <div className='list-user-container'>
               <h4 className='title'>Fetch All ListUser!</h4>
                <div className='list-user-content'>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index:number) => {
                           return (
                               <div className='child' key={item.id}>
                                    {index + 1} - {item.first_name} - {item.last_name}
                               </div>
                           );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ListUser;
