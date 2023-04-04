const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
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


export type RootStateType = {
  profilePage: PropfileType,
  dialogsPage: DialogsType,
  sidebar: SidebarType,
  friends: FriendsType
}

export type AddPostType = ReturnType<typeof addPostAC>

// export type UpdatePostType = {
//   type: 'UPDATE-NEW-POST-TEXT'
//   newText: string
// }
export type UpdatePostType = ReturnType<typeof updatePostAC>
export type ChangeMessageType = ReturnType<typeof changeMessageAC>
export type AddMessageType = ReturnType<typeof addMessageAC>


export type ActionsType = AddPostType | UpdatePostType | ChangeMessageType | AddMessageType


export const addPostAC = () => {
  return { type: ADD_POST } as const
}
export const updatePostAC = (newText: string) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: newText } as const
}

export const addMessageAC = () => {
  return { type:  ADD_MESSAGE} as const
}
export const changeMessageAC = (newMesssageText:string) => {
  return { type: CHANGE_MESSAGE , newMesssageText:newMesssageText } as const
}

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'hi, how are you?', likesCount: 0 },
        { id: '2', message: "it's my first", likesCount: 20 },
        { id: '3', message: "it's my first", likesCount: 20 },
        { id: '4', message: "it's my first", likesCount: 20 }
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    },
    sidebar: {},
    friends: [
      { id: '1', name: 'Dima' },
      { id: '2', name: 'Sveta' },
      { id: '3', name: 'Victor' }
    ]
  },
  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this.rerenderEntiretree = observer
  },
  rerenderEntiretree() {
    console.log('state changed');
  },
  dispatch(action: ActionsType) {

    if (action.type === 'ADD-POST') {
      let newPost: PostType = { id: '5', message: this._state.profilePage.newPostText, likesCount: 0 }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this.rerenderEntiretree()

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this.rerenderEntiretree()

    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage: MessageType = { id: '5', textMessage: this._state.dialogsPage.newMessageText }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this.rerenderEntiretree()
    } else if (action.type === 'CHANGE-MESSAGE') {
      this._state.dialogsPage.newMessageText = action.newMesssageText
      this.rerenderEntiretree()
    }
  }
}

const win: any = window
win.store = store;
export default store






