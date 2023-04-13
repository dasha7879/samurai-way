import React from 'react';
import s from './../Dialogs.module.css'


export type MessageType = {
    id: string
    textMessage: string
  }
export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    )

}

