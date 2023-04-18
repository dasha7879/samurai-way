
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'


export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | String
    followed: boolean
}
export type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount:number
    currentPage:number
}


const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount:0,
    currentPage:1
}

export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: state.users.map(u => action.userId == u.id ? { ...u, followed: true } : u) }
        case UNFOLLOW:
            return { ...state, users: state.users.map(u => action.userId == u.id ? { ...u, followed: false } : u) }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case  SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case  SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
            
        default:
            return state
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType |  SetCurrentPageACType | setTotalUsersCountACType

type FollowType = ReturnType<typeof followAC>
type UnfollowType = ReturnType<typeof unFollowAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: number) => {
    return { type: FOLLOW, userId } as const
}
export const unFollowAC = (userId: number) => {
    return { type: UNFOLLOW, userId } as const
}
export const setUsersAC = (users: UserType[]) => {
    return { type: SET_USERS, users } as const
}
export const setCurrentPageAC = (currentPage:number) => {
    return { type:  SET_CURRENT_PAGE , currentPage} as const
}
export const setTotalUsersCountAC = (totalCount:number) => {
    return { type: SET_TOTAL_USERS_COUNT ,totalCount} as const
}
