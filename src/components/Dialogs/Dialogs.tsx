import React, { ChangeEvent } from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import { DialogsPropsType } from './DialogsContainer';
import { Redirect } from 'react-router-dom';

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
    let messagesElement = state.messages.map((message) => <Message key={message.id} id={message.id} textMessage={message.textMessage} /> )
    let newMessage = state.newMessageText;

    let sendMessage = () => {
        props.sendMessage()
    }
    let updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.target.value
        props.updateMessageText(messageText)

    }

   
 if(!props.isAuth) return <Redirect to = {'/login'}/>

    return (

        <div className={s.dialogs}>
            <div  className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <div>
                    <textarea onChange={updateMessageText} value={newMessage} name="textarea" placeholder='Enter your message'></textarea>
                </div>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    )
}

