import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { text } from 'stream/consumers';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import state from '../../redux/state'
import { PostType } from '../Profile/MyPosts/Post/Post';

type DialogsType = {
    state: {
        dialogsPage: {
            messages: MessageType[]
            dialogs: DialogType[]
        }

    }

}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    textMessage: string
}


export const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.state.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.state.dialogsPage.messages.map((message) => { return <Message textMessage={message.textMessage} /> })

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