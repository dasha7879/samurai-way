import { DialogsType, MessageType } from "./store";
import { Reducer } from "react";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';


let initialState:DialogsType = {
    messages: [
        { id: '1', textMessage: 'Hi' },
        { id: '2', textMessage: 'You' },
        { id: '3', textMessage: 'How are you' },
        { id: '4', textMessage: 'hohoho' }
      ],
      dialogs: [
        { id: '1', name: 'Dima' },
        { id: '2', name: 'Sveta' },
        { id: '3', name: 'Victor' },
        { id: '4', name: 'Valery' }
      ],
      newMessageText: ''
}
export const dialogsReducer = (state = initialState , action: ActionsType):DialogsType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = { id: '5', textMessage: state.newMessageText }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ""}
        case 'CHANGE-MESSAGE':
            return {...state, newMessageText: action.newMesssageText}
        default:
            throw new Error("I don't understand this type")
    }
}



export type ActionsType = ChangeMessageType | AddMessageType

export type ChangeMessageType = ReturnType<typeof changeMessageAC>
export type AddMessageType = ReturnType<typeof addMessageAC>


export const addMessageAC = () => {
    return { type: ADD_MESSAGE } as const
}
export const changeMessageAC = (newMesssageText: string) => {
    return { type: CHANGE_MESSAGE, newMesssageText } as const
}

