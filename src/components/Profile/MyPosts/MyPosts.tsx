import { type } from 'os';
import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

export type MyPostsType = {

}
const MyPosts = (props:MyPostsType) => {

    let postsData = [
        { id: '1', message: 'hi, how are you?', likesCount: 0 },
        { id: '2', message: "it's my first", likesCount: 20 }
    ]

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea name="textarea"></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post likesCount={postsData[0].likesCount} message={postsData[0].message} />
                <Post likesCount={postsData[1].likesCount} message={postsData[1].message} />
            </div>
        </div>
    )

}
export default MyPosts;