import React from 'react';
import s from './MyPosts.module.css'
import Post, { PostType } from './Post/Post';

export type MyPostsType = {
    posts: PostType[]

}

const MyPosts = (props: MyPostsType) => {

    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)
    
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
                {postsElement}
            </div>
        </div>
    )

}
export default MyPosts;