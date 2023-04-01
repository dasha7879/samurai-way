import React from 'react';
import {PropfileType, addPost, updateNewPostText } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

const Profile: React.FC<PropfileType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} callback={addPost} newPostText={props.newPostText}  updateNewPostText = {updateNewPostText} />
        </div>
    )

}
export default Profile;