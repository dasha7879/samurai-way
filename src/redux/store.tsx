import { AddMessageType, ChangeMessageType } from "./dialogsReducer";
import { AddPostType, UpdatePostType, profileReducer } from "./profileReducer";


export type MessageType = {
  id: string
  textMessage: string
}
export type DialogType = {
  id: string
  name: string
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}
export type PropfileType = {
  posts: PostType[]
  newPostText: string;
}
export type DialogsType = {
  messages: MessageType[]
  dialogs: DialogType[],
  newMessageText: string
}
export type SidebarType = {}
export type FriendType = {
  id: string
  name: string
}
export type FriendsType = FriendType[]


// export type RootStateType = {
//   profilePage: PropfileType,
//   dialogsPage: DialogsType,
//   sidebar: SidebarType,
//   friends: FriendsType
// }

// export type storeType = {
//   // _state:RootStateType
//   // getState: ()=> RootStateType
//   subscribe:(observer: ()=>void )=>void
//   _callsubscriber: (state:any)=>void
//   dispatch: (action: ActionsType)=>void
// }

export type ActionsType =  ChangeMessageType | AddMessageType |AddPostType | UpdatePostType


// let store = {
//   // _state: {
//   //   profilePage: {
//   //     posts: [
//   //       { id: '1', message: 'hi, how are you?', likesCount: 0 },
//   //       { id: '2', message: "it's my first", likesCount: 20 },
//   //       { id: '3', message: "it's my first", likesCount: 20 },
//   //       { id: '4', message: "it's my first", likesCount: 20 }
//   //     ],
//   //     newPostText: ''
//   //   },
//   //   dialogsPage: {
//   //     messages: [
//   //       { id: '1', textMessage: 'Hi' },
//   //       { id: '2', textMessage: 'You' },
//   //       { id: '3', textMessage: 'How are you' },
//   //       { id: '4', textMessage: 'hohoho' }
//   //     ],
//   //     dialogs: [
//   //       { id: '1', name: 'Dima' },
//   //       { id: '2', name: 'Sveta' },
//   //       { id: '3', name: 'Victor' },
//   //       { id: '4', name: 'Valery' }
//   //     ],
//   //     newMessageText: ''
//   //   },
//   //   sidebar: {},
//   //   friends: [
//   //     { id: '1', name: 'Dima' },
//   //     { id: '2', name: 'Sveta' },
//   //     { id: '3', name: 'Victor' }
//   //   ]
//   // },
//   // getState() {
//   //   return this._state
//   // },
//   subscribe(observer: () => void) {
//     this._callsubscriber = observer
//   },
//   _callsubscriber(state:any) {
//     console.log('state changed');
//   },


//   dispatch(action: ActionsType) {
//     console.log(action)
//     this._state.profilePage = profileReducer(this._state.profilePage,action)
    
//     // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)

  
//     this._callsubscriber(this._state)

//   }
// }

// const win: any = window
// win.store = store;
// export default store






