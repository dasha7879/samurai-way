
let state = {
  profilePage: {
    posts: [
      { id: '1', message: 'hi, how are you?', likesCount: 0 },
      { id: '2', message: "it's my first", likesCount: 20 },
      { id: '3', message: "it's my first", likesCount: 20 },
      { id: '4', message: "it's my first", likesCount: 20 }
    ],
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

  friends: [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Sveta' },
    { id: '3', name: 'Victor' }
  ]

}

export default state