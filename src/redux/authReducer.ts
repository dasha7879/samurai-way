import { Dispatch } from "redux";
import { authAPI } from "../api/api";

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


export const setUserData = (id: number, email: string, login: string) => {
    return { type: SET_USER_DATA,data:{id, email, login}} as const
}


export const getUserData = ()=>(dispatch:Dispatch)=>{
    authAPI.me().then((response:any)=>{
        if(response.data.resultCode === 0 ){
            let {id,email,login} = response.data.data
                 dispatch(setUserData(id,email,login))
                }
        console.log(response)
      })
}
// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then((response) => {
//     if(response.data.resultCode === 0 ){
//         let {id,email,login} = response.data.data
//        return this.props.setUserData(id,email,login)
//     }
// });


    
