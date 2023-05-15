import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileUsersPropsType } from './ProfileContainer';

const Profile: React.FC<ProfileUsersPropsType>= (props) => { 
    
    return (
        <div>
            <ProfileInfo  profile = {props.profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;