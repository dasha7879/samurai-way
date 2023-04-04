import React from 'react';
import store, { ActionsType, PostType, addPostAC, updatePostAC} from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { type } from 'os';



export type MyPostsType = {
    posts: PostType[],
    dispatch :(action: ActionsType)=>void,
    newPostText:string
}


const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPostHandler = () => {
            // props.dispatch(store._state.profilePage.newPostText)
            // props.dispatch({type:'ADD-POST', newPostText: store._state.profilePage.newPostText})
            props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text != undefined) {
            // props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
            props.dispatch(updatePostAC(text))
        }
    }



    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea  onChange={onPostChange} name="textarea" ref={newPostElement} value ={props.newPostText}/>
                </div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}
export default MyPosts;