import  { Dispatch } from 'redux';
import { addMessageAC, changeMessageAC } from '../../redux/dialogsReducer';
import  { RootStateType } from '../../redux/reduxStore';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText

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