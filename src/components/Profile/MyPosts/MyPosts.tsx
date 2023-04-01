import React from 'react';
import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type MyPostsType = {
    posts: PostType[]
    callback: () => void
    newPostText:string
    updateNewPostText:(newText: string)=>void;
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPostHandler = () => {
            props.callback()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text != undefined) {
            props.updateNewPostText(text)
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