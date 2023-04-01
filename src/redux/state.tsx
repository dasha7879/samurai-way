import { rerenderEntiretree } from "../render"

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
  dialogs: DialogType[]

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



let state = {
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
    ]
  },
  sidebar: {},

  friends: [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Sveta' },
    { id: '3', name: 'Victor' }
  ]

}

export let addPost = () => {
  let newPost: PostType = { id: '5', message: state.profilePage.newPostText, likesCount: 0 }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntiretree(state)
}
export let updateNewPostText = (newText: string) => {
  state.profilePage.newPostText = newText
  rerenderEntiretree(state)
}

export default state