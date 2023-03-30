import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { text } from 'stream/consumers';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import state, { DialogsType, DialogType, MessageType } from '../../redux/state'

// type DialogsType = {
//     state: {
//         dialogsPage: {
//             messages: MessageType[]
//             dialogs: DialogType[]
//         }
//     }
// }




export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map((message) => { return <Message textMessage={message.textMessage} /> })
     
    let newMessage = React.createRef<HTMLTextAreaElement>()
     let addMessage = ()=>{
        let messageText = newMessage.current?.value
        alert(messageText)
     }
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
             <div>
                <div>
                    <textarea name="textarea" ref = {newMessage}></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}