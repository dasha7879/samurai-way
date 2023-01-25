import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="textarea"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
            <Post likeCount={0} message = 'hi, how are you?' />
            <Post likeCount={20} message="it's my first" />
            </div>
        </div>
    )

}
export default MyPosts;