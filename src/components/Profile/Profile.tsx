import React from 'react';
import {ActionsType, PostType} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


 type ProfilePropsType = {
    posts: PostType[]
    dispatch :(action: ActionsType)=>void
    newPostText: string
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} newPostText={props.newPostText}  dispatch={props.dispatch} />
        </div>
    )

}
export default Profile;