
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


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
    isFetching: boolean
}


const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount:0,
    currentPage:1,
    isFetching: false
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
        case  TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
            
        default:
            return state
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType |  SetCurrentPageType | setTotalUsersCountType | setIsFetchingType

type FollowType = ReturnType<typeof follow>
type UnfollowType = ReturnType<typeof unFollow>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>

export const follow = (userId: number) => {
    return { type: FOLLOW, userId } as const
}
export const unFollow = (userId: number) => {
    return { type: UNFOLLOW, userId } as const
}
export const setUsers = (users: UserType[]) => {
    return { type: SET_USERS, users } as const
}
export const setCurrentPage = (currentPage:number) => {
    return { type:  SET_CURRENT_PAGE , currentPage} as const
}
export const setTotalUsersCount = (totalCount:number) => {
    return { type: SET_TOTAL_USERS_COUNT ,totalCount} as const
}
export const setIsFetching = (isFetching:boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching} as const
}
