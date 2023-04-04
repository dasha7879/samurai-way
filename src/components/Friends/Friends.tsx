import React from 'react';
import store from '../../redux/state';


export const Friends= () => {
    let friend = store._state.friends.map(friend => <div>{friend.name}</div>)
    console.log()
    return (
        <div>
            {friend}
        </div>
        )
}
