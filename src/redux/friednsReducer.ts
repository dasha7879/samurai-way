import { FriendsType } from "./store";

const ADD_FRIEND = 'ADD-FRIEDND';
const initialState: FriendsType = [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Sveta' },
    { id: '3', name: 'Victor' }
]

export const friednsReducer = (state = initialState, action: ActionsType): FriendsType => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = { id: '5', name: 'Yosif' }
            return [...state, newFriend];
        default:
            return state
    }
}

type ActionsType = AddFriendType

type AddFriendType = ReturnType<typeof addFriendAC>

export const addFriendAC = () => {
    return { type: ADD_FRIEND } as const
}
