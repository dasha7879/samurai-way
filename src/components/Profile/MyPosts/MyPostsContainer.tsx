import { addPostAC, updatePostAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { RootStateType } from '../../../redux/reduxStore';
import { Dispatch } from 'redux';
import { PostType } from '../../../redux/store';

type mapStateToPropsType ={
    posts:PostType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    onPostChange:(text: string)=>void
    addPostHandler:()=>void

}

export type MyPostsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChange: (text: string) => dispatch(updatePostAC(text)) ,
        addPostHandler: () => dispatch(addPostAC()) 
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer