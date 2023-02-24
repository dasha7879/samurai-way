import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import { PostType } from './MyPosts/Post/Post';

import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

 type PropfileType={
    posts: PostType[]
 }
const Profile = (props: PropfileType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )

}
export default Profile;