import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile: React.FC<any>= (props) => { //???
    return (
        <div>
            <ProfileInfo  profile = {props.profile}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;