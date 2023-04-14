import { Dispatch } from "redux"
import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import {Users} from "./Users"
import { UserType, followAC, initialStateType, setUsersAC, unFollowAC } from "../../redux/usersReducer"




type mapStateToPropsType = {
    usersPage: initialStateType
}

type mapDispatchToPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers:(users:UserType[])=> void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType):mapStateToPropsType   => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType  => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId:number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:UserType[])=>{ 
            dispatch(setUsersAC(users))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)