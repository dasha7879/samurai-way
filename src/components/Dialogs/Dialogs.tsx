import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { text } from 'stream/consumers';
import s from './Dialogs.module.css'

type DialogItemType = {
    name: string;
    id: string;
}
const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>)
}

type MessageType = {
    textMessage: string
}
const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    )

}

export const Dialogs = () => {

    let dialogsData = [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Sveta' },
        { id: '3', name: 'Victor' },
        { id: '4', name: 'Valery' }
    ]
    let dialogsElement = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        { id: '1', textMessage: 'Hi' },
        { id: '2', textMessage: 'You' },
        { id: '3', textMessage: 'How are you' },
        { id: '4', textMessage: 'hohoho' }
    ]
    let messagesElement = messagesData.map((message)=>{return <Message textMessage={message.textMessage} /> })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
               {messagesElement}               
            </div>
        </div>
    )
}