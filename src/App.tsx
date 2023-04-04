import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Friends } from './components/Friends/Friends';
import Header from './components/Header/Header';
import { Music } from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import { News } from './components/News/News';
import Profile from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import state, { ActionsType, RootStateType} from './redux/state'
import store from './redux/state';

export type AppStateType = {
  state: RootStateType;
  dispatch:(action: ActionsType)=>void
}

export const App = (props: AppStateType) => {
  let messages = store._state.dialogsPage.messages
  let posts = store._state.profilePage.posts
  let dialogs = store._state.dialogsPage.dialogs
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs} newMessageText={props.state.dialogsPage.newMessageText} dispatch = {props.dispatch} />} />
          <Route path={'/profile'} render={() => <Profile posts={posts} newPostText={props.state.profilePage.newPostText} dispatch = {props.dispatch}/>} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
          <Route path={'/friends'} render={() => <Friends />} />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
