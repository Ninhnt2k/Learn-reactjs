import {InitState} from "../../components/TodoInterface";

const initState: InitState = {
    users : [
        {id: 1, name: 'Jenny'},
        {id: 2, name: 'Hoi dan IT'},
        {id: 3, name: 'Lear English'},
    ]
}

const rootReducer = (state = initState, action:any) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state,users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return {
                ...state, users: [...state.users,　user]
            }
            break;
        default:
            return state;
    }
    return state;

}

export default rootReducer;

