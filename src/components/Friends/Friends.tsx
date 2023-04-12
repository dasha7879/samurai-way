import { FriendsPropsType } from './FriendsContainer';



export const Friends: React.FC<FriendsPropsType> = (props) => {
    let friend = props.friendsPage.map(friend => <div>{friend.name}</div>)
    let addFriend = () => {
        props.addFriend()
    }
    return (
        <div>
            {friend}
            <button onClick={addFriend}>Add friend</button>
        </div>
    )
}
