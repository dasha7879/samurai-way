import React from 'react';
import { FriendsType } from '../../redux/state';

export const Friends: React.FC<FriendsType> = (props) => {
    let friend = props.friends.map(friend => <div>{friend.name}</div>)
    console.log()
    return (
        <div>
            {friend}
        </div>
        )
}
