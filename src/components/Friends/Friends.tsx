import React from 'react';
import s from'./Friends.module.css'

export type FriendsType = {
     state: {
       friends: FriendType[]
        
    }
}

export type FriendType={
    id:string
    name:string
}

export const Friends = (props: FriendsType) => {
    let friend = props.state.friends.map(friend => <div>{friend.name}</div>)
    console.log()
    return (
        <div>
            {friend}
        </div>
        )
}
