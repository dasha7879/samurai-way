import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs, DialogType, MessageType } from './components/Dialogs/Dialogs';
import { Friends, FriendType } from './components/Friends/Friends';
import Header from './components/Header/Header';
import { Music } from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { PostType } from './components/Profile/MyPosts/Post/Post';
import Profile from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
// import  state from  './redux/state'

export type StateType = {
  state: {
    profilePage: {
      posts: PostType[]
    }
    dialogsPage: {
      messages: MessageType[]
      dialogs: DialogType[]
    },
    friends: FriendType[]
  }
}


const App = (props: StateType) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <Dialogs state={props.state}/>} />
          <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
          <Route path={'/friends'} render={() => <Friends state={props.state} />} />
          {/* <Dialogs /> */}
          {/* <Profile /> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
