import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import s from './../Dialogs.module.css'



 export type MessageTextType = {
    textMessage: string
}
 export const Message : React.FC<MessageTextType> = (props) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    )

}

