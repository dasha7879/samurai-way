import React from 'react';
import { PostType } from '../../../../redux/store';
import s from './Post.module.css'

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="avatar" />
            {props.message}
            <div>{props.likesCount}</div>
        </div>
    )

}
export default Post;