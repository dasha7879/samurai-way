import React, { ChangeEvent, useRef } from 'react';
import store, { ActionsType, PostType, addPostAC, updatePostAC } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { type } from 'os';



export type MyPostsType = {
    posts: PostType[],
    dispatch: (action: ActionsType) => void,
    newPostText: string
}


const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)

    let addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        if (text != undefined) {
            props.dispatch(updatePostAC(text))
        }
    }



    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} name="textarea" value={props.newPostText} />
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