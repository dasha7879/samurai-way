import React, { ChangeEvent } from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import store, {ActionsType, DialogsType,addMessageAC, changeMessageAC} from '../../redux/state'

type DialogsPropsType = {
    dispatch:(action: ActionsType)=>void
    state: DialogsType
    // newMessageText: string
  }



export const Dialogs: React.FC<DialogsPropsType> = (props:DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.state.messages.map((message) => { return <Message textMessage={message.textMessage} /> })
     
    let newMessage = props.state.newMessageText;

     let addMessage = ()=>{
       store.dispatch(addMessageAC())
     }

     let onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.target.value
        props.dispatch(changeMessageAC(messageText))
        
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
                    <textarea onChange={onMessageChange} value = {newMessage } name="textarea" placeholder='Enter your message'></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}