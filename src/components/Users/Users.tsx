import axios from "axios"
import { UsersPropsType } from "./UsersContainer"
import s from './users.module.css'
import userPhoto from '../../assets/images/User-Profile-PNG-High-Quality-Image.png'


export const Users: React.FC<UsersPropsType> = (props) => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items)
        }
        )
    }

    
    return (
        <div>
            {
                props.usersPage.users.map(user => <div key={user.id}>
                    <span>
                        <div>

                            <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                        </div>
                        <div>
                            {user.followed ?
                                <button onClick={() => props.unfollow(user.id)}> Unfollow </button> :
                                <button onClick={() => props.follow(user.id)}> follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'Belarus'}</div>
                            <div>{'Minsk'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    )
}
