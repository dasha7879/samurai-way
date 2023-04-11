import React from 'react';
import { PostType} from '../../redux/store';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


 type ProfilePropsType = {
    posts: PostType[]
    newPostText: string
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={props.posts}/>
        </div>
        
        
    )

}
export default Profile;