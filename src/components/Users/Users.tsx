import { UsersPropsType } from "./UsersContainer"
import s from './users.module.css'


export const Users: React.FC<UsersPropsType> = (props) => {
if(props.usersPage.users.length=== 0){
    props.setUsers([
        { id: '1', photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg', followed: false, fullName: 'Dima', status: 'i am DDD', location: { country: 'Belarus', city: 'Minsk' } },
        { id: '2', photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg', followed: true, fullName: 'Daha', status: 'i am DDD', location: { country: 'Belarus', city: 'Minsk' } },
        { id: '3', photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg', followed: false, fullName: 'Valya', status: 'i am DDD', location: { country: 'Belarus', city: 'Minsk' } },
        { id: '4', photoUrl: 'https://avatarzo.ru/wp-content/uploads/squid-game-anime.jpg', followed: true, fullName: 'Pasha', status: 'i am DDD', location: { country: 'Belarus', city: 'Minsk' } }
    ]
    )
}
   

    return (
        <div>
            {
                props.usersPage.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto} src={user.photoUrl} alt="" />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => props.unfollow(user.id)}> Unfollow </button> :
                                <button onClick={() => props.follow(user.id)}> follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    )
}
