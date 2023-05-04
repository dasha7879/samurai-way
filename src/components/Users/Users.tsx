import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/images/User-Profile-PNG-High-Quality-Image.png';
import { initialStateType } from '../../redux/usersReducer';
import { NavLink } from 'react-router-dom';

type UsersType = {
    usersPage: initialStateType;
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: number[]
}

const Users: React.FC<UsersType> = (props) => {
    let pagesCount = Math.ceil(props.usersPage.totalUserCount / props.usersPage.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={props.usersPage.currentPage === p ? s.selectedPage : s.page} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    })
                }
            </div>
            {props.usersPage.users.map((user) => (
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
                                    className={s.userPhoto}
                                    src={user.photos.small != null ? user.photos.small : userPhoto}
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? (
                                <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }
                                }>
                                    Unfollow </button>
                            ) : (
                                <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id)
                                }}> follow</button>
                            )}
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
                </div>
            ))}
        </div>
    );
}


export default Users;

