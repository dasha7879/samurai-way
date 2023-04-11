import React, { ChangeEvent } from 'react';
import  {PostType } from '../../../redux/store';
import s from './MyPosts.module.css'
import Post from './Post/Post';



export type MyPostsType = {
    posts: PostType[],
    newPostText: string
    onPostChange: (text:string)=> void
    addPostHandler:()=>void
    
}


const MyPosts: React.FC<MyPostsType> = (props) => {


    let postsElement = props.posts.map((post) => <Post likesCount={post.likesCount} message={post.message} id={post.id} />)

    let addPostHandler = () => {
        props.addPostHandler()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        if (text != undefined) {
            props.onPostChange(text)
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