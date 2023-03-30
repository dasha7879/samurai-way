import React from 'react';
import { PostType, PropfileType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

const Profile: React.FC<PropfileType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    )

}
export default Profile;