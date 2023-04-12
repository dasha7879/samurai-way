import { Dispatch } from "redux"
import { addFriendAC } from "../../redux/friednsReducer"
import { FriendsType } from "../../redux/store"
import { RootStateType } from "../../redux/reduxStore"
import { connect } from "react-redux"
import { Friends } from "./Friends"



type mapStateToPropsType = {
    friendsPage: FriendsType
}

type mapDispatchToPropsType = {
    addFriend: () => void
}

export type FriendsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType) => {
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addFriend: () => {
            dispatch(addFriendAC())
        }
    }

}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer 