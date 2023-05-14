import { Dispatch } from "redux";
import { usersAPI } from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


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
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: number[]
}


const initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : [...state.followingProgress.filter(id => id != action.userId)]
            }

        default:
            return state
    }
}

type ActionsType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | setTotalUsersCountType | setIsFetchingType | setIsFollowongProgressType

type FollowType = ReturnType<typeof followSucced>
type UnfollowType = ReturnType<typeof unFollowSucced>
type SetUsersType = ReturnType<typeof setUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type setIsFetchingType = ReturnType<typeof setIsFetching>
type setIsFollowongProgressType = ReturnType<typeof setIsFollowingProgress>

export const followSucced = (userId: number) => {
    return { type: FOLLOW, userId } as const
}
export const unFollowSucced = (userId: number) => {
    return { type: UNFOLLOW, userId } as const
}
export const setUsers = (users: UserType[]) => {
    return { type: SET_USERS, users } as const
}
export const setCurrentPage = (currentPage: number) => {
    return { type: SET_CURRENT_PAGE, currentPage } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return { type: SET_TOTAL_USERS_COUNT, totalCount } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return { type: TOGGLE_IS_FETCHING, isFetching } as const
}
export const setIsFollowingProgress = (userId: number, isFetching: boolean) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(userId, true))
        usersAPI.follow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSucced(userId))
            }
            dispatch(setIsFollowingProgress(userId, false))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFollowingProgress(userId, true))
        usersAPI.unFollow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(followSucced(userId))
            }
            dispatch(setIsFollowingProgress(userId, false))
        })
    }
}



