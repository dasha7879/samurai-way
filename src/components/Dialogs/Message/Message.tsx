import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import s from './../Dialogs.module.css'



 export type MessageType = {
    textMessage: string
}
 export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.textMessage}</div>
    )

}

