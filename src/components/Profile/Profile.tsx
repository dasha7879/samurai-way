import React from 'react';
import { PostType} from '../../redux/store';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
        
        
    )

}
export default Profile;