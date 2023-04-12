import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

export type DialogItemType = {
    name: string;
    id: string;
}

export const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialog} ${s.active} ${s.item}`}>
            <NavLink to={path}>{props.name}</NavLink>
            <img className={s.img} src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="avatar" />
        </div>)
}



