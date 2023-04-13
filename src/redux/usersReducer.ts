
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS'


export type UserType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}
export type initialStateType = { 
    users: UserType[] 
}


const initialState: initialStateType = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: state.users.map(u => action.userId == u.id ? { ...u, followed: true } : u) }
        case UNFOLLOW:
            return { ...state, users: state.users.map(u => action.userId == u.id ? { ...u, followed: false } : u) }
        case SET_USERS:
            return { ...state,
                 users: [...state.users, ...action.users] 
                }
        default:
            return state
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>

export const followAC = (userId: string) => {
    return { type: FOLLOW, userId } as const
}
export const unFollowAC = (userId: string) => {
    return { type: UNFOLLOW, userId } as const
}
export const setUsersAC = (users: UserType[]) => {
    return { type: SET_USERS, users } as const
}
