import { ChangeMessageType, SendMessageType } from "./dialogsReducer";
import { AddPostType, UpdatePostType} from "./profileReducer";


 type MessageType = {
  id: string
  textMessage: string
}
type DialogType = {
  id: string
  name: string
}
 type PostType = {
  id: string
  message: string
  likesCount: number
}
 type PropfileType = {
  posts: PostType[]
  newPostText: string;
}
 type DialogsType = {
  messages: MessageType[]
  dialogs: DialogType[],
  newMessageText: string
}
 type SidebarType = {}

 type UserType = {
  id: string
  followed:boolean
  fullName: string
  status: string
  location:{
    country:string
    city:string
  }
}
//  type UsersType = {users:UserType[]}


//  type RootStateType = {
//   profilePage: PropfileType,
//   dialogsPage: DialogsType,
//   sidebar: SidebarType,
//   friends: FriendsType
// }

//  type storeType = {
//   // _state:RootStateType
//   // getState: ()=> RootStateType
//   subscribe:(observer: ()=>void )=>void
//   _callsubscriber: (state:any)=>void
//   dispatch: (action: ActionsType)=>void
// }

 type ActionsType =  ChangeMessageType | SendMessageType |AddPostType | UpdatePostType


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
//  export default store






