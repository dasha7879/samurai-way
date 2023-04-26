
const SET_USER_DATA = 'SET-USER-DATA';

export type userDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


let initialState: userDataType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
};

export const authReducer = (state = initialState, action: setUserDataType): userDataType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state,
                ...action.data,
                isAuth:true
            }

        default:
            return state
    }
}


export type setUserDataType = ReturnType<typeof setUserData>


export const setUserData = (userId: number, email: string, login: string) => {
    return { type: SET_USER_DATA,data:{userId, email, login}} as const
}


