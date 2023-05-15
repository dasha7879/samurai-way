import {applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunk from 'redux-thunk'


export type StoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer> 

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})


const composeEnchancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)))


// export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store

export default store