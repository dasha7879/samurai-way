import { MessageType } from "../components/Dialogs/Message/Message";

const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';

type DialogsType = {
    messages: MessageType[]
    dialogs: DialogType[],
    newMessageText: string
  }

  type DialogType = {
    id: string
    name: string
  }

let initialState: DialogsType = {
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
export const dialogsReducer = (state = initialState, action: ActionsType): DialogsType => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: MessageType = { id: '5', textMessage: state.newMessageText }
            return { ...state, messages: [...state.messages, newMessage], newMessageText: "" }
        case CHANGE_MESSAGE:
            return { ...state, newMessageText: action.newMesssageText }
        default:

            return state
    }
}

export type ActionsType = ChangeMessageType | SendMessageType

export type ChangeMessageType = ReturnType<typeof changeMessageAC>
export type SendMessageType = ReturnType<typeof sendMessageAC>


export const sendMessageAC = () => {
    return { type: SEND_MESSAGE } as const
}
export const changeMessageAC = (newMesssageText: string) => {
    return { type: CHANGE_MESSAGE, newMesssageText } as const
}

