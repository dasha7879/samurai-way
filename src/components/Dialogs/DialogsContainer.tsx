import { Dispatch } from 'redux';
import { addMessageAC, changeMessageAC } from '../../redux/dialogsReducer';
import { RootStateType } from '../../redux/reduxStore';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { DialogsType } from '../../redux/store';


type mapStateToPropsType = {
    dialogsPage: DialogsType
}

type mapDispatchToPropsType = {
    addMessage: () => void,
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
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessageText: (messageText: string) => {
            dispatch(changeMessageAC(messageText))
        }
    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer