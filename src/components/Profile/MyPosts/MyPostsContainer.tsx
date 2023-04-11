import { addPostAC, updatePostAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootStateType } from '../../../redux/reduxStore';
import { Dispatch } from 'redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChange: (text: string) => {
            let action = updatePostAC(text)
            dispatch(action)
        },
        addPostHandler: () => { dispatch(addPostAC()) }

    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer