import React, { ChangeEvent } from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
// import { Message } from './Message/Message';
// import { addMessageAC, changeMessageAC } from '../../redux/dialogsReducer';
import { DialogType} from '../../redux/store';
import store from '../../redux/reduxStore';
import { Message } from './Message/Message';

type DialogsPropsType = {
    state: DialogType[]
    updateMessageText:(messageText:string)=>void
    addMessage :()=>void
  }



export const Dialogs: React.FC<DialogsPropsType> = (props:DialogsPropsType) => {
    
    let state = store.getState().dialogsPage
    // let state = store.getState().dialogsPage

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />) // подумать как сделать так, чтобы она не взаимодействовала со стейтом
    let messagesElement =  state.messages.map((message) => { return <Message textMessage={message.textMessage} /> })
    let newMessage = state.newMessageText

    let addMessage = () => {
        props.addMessage()
    }
     let updateMessageText = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.target.value
        props.updateMessageText(messageText)
        // props.dispatch(changeMessageAC(messageText))
        
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
                    <textarea onChange={updateMessageText} value = {newMessage } name="textarea" placeholder='Enter your message'></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

