export type InitState = {
    users: User[]
}

export type User = {
    id: number;
    name: string;
}

const initState: InitState = {
    users : [
        {id: 1, name: 'Jenny'},
        {id: 2, name: 'Hoi dan IT'}
    ]
}

const rootReducer= (state = initState, action:any) => {

    return state;

}

export default rootReducer;

