import React from 'react';
import state  from '../../redux/state';

export const Friends= () => {
    let friend = state.friends.map(friend => <div>{friend.name}</div>)
    console.log()
    return (
        <div>
            {friend}
        </div>
        )
}
