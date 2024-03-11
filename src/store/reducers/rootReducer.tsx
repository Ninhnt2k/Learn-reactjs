import {InitState} from "../../components/TodoInterface";

const initState: InitState = {
    users : [
        {id: 1, name: 'Jenny'},
        {id: 2, name: 'Hoi dan IT'},
        {id: 3, name: 'Lear English'},
    ]
}

const rootReducer= (state = initState, action:any) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('555', action);
            return state;
        default:
            return state;

    }
    return state;

}

export default rootReducer;

