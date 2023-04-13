import { Dispatch } from 'redux';
import { sendMessageAC, changeMessageAC } from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/reduxStore';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

type MessageType = {
    id: string
    textMessage: string
}

type DialogType = {
    id: string
    name: string
}
type DialogsType = {
    messages: MessageType[]
    dialogs: DialogType[],
    newMessageText: string
}

type mapStateToPropsType = {
    dialogsPage: DialogsType
}

type mapDispatchToPropsType = {
    sendMessage: () => void,
    updateMessageText: (messageText: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateMessageText: (messageText: string) => {
            dispatch(changeMessageAC(messageText))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer