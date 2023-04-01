import React from 'react';
import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type MyPostsType = {
    posts: PostType[]
    callback: (postText: string) => void
}

const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPostHandler = () => {
        let text = newPostElement.current?.value
        // console.log( typeof text)
        if (text != undefined) {
            props.callback(text)
        }
        if (newPostElement.current !== null) {
            newPostElement.current.value = ''
        }


    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea name="textarea" ref={newPostElement}></textarea>
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