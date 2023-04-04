import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import { Message } from './Message/Message';
import store, {ActionsType,DialogType, MessageType, addMessageAC, changeMessageAC} from '../../redux/state'
import { change } from 'redux-form';

type DialogsPropsType = {
    messages: MessageType[]
    dialogs: DialogType[]
    dispatch :(action: ActionsType)=>void
    newMessageText: string
  }

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = props.messages.map((message) => { return <Message textMessage={message.textMessage} /> })
     
    let newMessage = React.createRef<HTMLTextAreaElement>()

     let addMessage = ()=>{
    //    props.dispatch({type:'ADD-MESSAGE', newMesssageText:store._state.dialogsPage.newMessageText})
       props.dispatch(addMessageAC())
     }

     let onMessageChange = () => {
        let messageText = newMessage.current?.value
        if (messageText != undefined) {
            // props.dispatch({type:'CHANGE-MESSAGE', newMesssageText:messageText})
            props.dispatch(changeMessageAC(messageText))
        }   
        
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
                    <textarea onChange={onMessageChange} name="textarea" ref = {newMessage}></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}