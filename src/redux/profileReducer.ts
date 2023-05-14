// import { profileReducer } from './profileReducer';
import { Dispatch } from "redux";
import { PostType } from "../components/Profile/MyPosts/Post/Post";
import { usersAPI } from "../api/api";
import { UserType } from "./usersReducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

// type UserProfileType = {

// }
type ProfileType = {
  posts: PostType[]
  newPostText: string
  profile: any
}

let initialState: ProfileType = {
  posts: [
    { id: '1', message: 'hi, how are you?', likesCount: 0 },
    { id: '2', message: "it's my first", likesCount: 20 },
    { id: '3', message: "it's my first", likesCount: 20 },
    { id: '4', message: "it's my first", likesCount: 20 }
  ],
  newPostText: '',
  profile: null
}

export const profileReducer = (state = initialState, action: ActionsType): ProfileType => {
  switch (action.type) {
    case ADD_POST:
      let newPost: PostType = { id: '5', message: state.newPostText, likesCount: 0 }
      return { ...state, posts: [...state.posts, newPost] };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile};
    default:
      return state
  }

}

type ActionsType = AddPostType | UpdatePostType | SetUserProfileType

export type AddPostType = ReturnType<typeof addPostAC>
export type UpdatePostType = ReturnType<typeof updatePostAC>
export type SetUserProfileType = ReturnType<typeof setUserProfile >

export const addPostAC = () => {
  return { type: ADD_POST } as const
}
export const updatePostAC = (newText: string) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: newText } as const
}
export const setUserProfile = (profile:ProfileType) => {
  return { type: SET_USER_PROFILE, profile } as const
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
 const res = await usersAPI.getProfile(userId)
 dispatch(setUserProfile(res))
 console.log(res)
}
