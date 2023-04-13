import { PostType } from "../components/Profile/MyPosts/Post/Post";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

type PropfileType = {
  posts: PostType[]
  newPostText: string;
}

let initialState: PropfileType = {
  posts: [
    { id: '1', message: 'hi, how are you?', likesCount: 0 },
    { id: '2', message: "it's my first", likesCount: 20 },
    { id: '3', message: "it's my first", likesCount: 20 },
    { id: '4', message: "it's my first", likesCount: 20 }
  ],
  newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionsType): PropfileType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = { id: '5', message: state.newPostText, likesCount: 0 }
      return { ...state, posts: [...state.posts, newPost] };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText }
    default:
      return state
  }

}

type ActionsType = AddPostType | UpdatePostType

export type AddPostType = ReturnType<typeof addPostAC>
export type UpdatePostType = ReturnType<typeof updatePostAC>

export const addPostAC = () => {
  return { type: ADD_POST } as const
}
export const updatePostAC = (newText: string) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: newText } as const
}

