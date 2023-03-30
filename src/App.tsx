import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs} from './components/Dialogs/Dialogs';
import { Friends } from './components/Friends/Friends';
import Header from './components/Header/Header';
import { Music } from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import { News } from './components/News/News';
import Profile from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import  state, { RootStateType } from  './redux/state'


const App = () => {
let friends = state.friends
let messages = state.dialogsPage.messages
let posts = state.profilePage.posts
let dialogs= state.dialogsPage.dialogs
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path={'/dialogs'} render={() => <Dialogs messages={messages} dialogs={dialogs}/>} />
          <Route path={'/profile'} render={() => <Profile posts={posts} />} />
          <Route path={'/news'} render={() => <News />} />
          <Route path={'/music'} render={() => <Music />} />
          <Route path={'/settings'} render={() => <Settings />} />
          <Route path={'/friends'} render={() => <Friends friends= {friends} />} />
          {/* <Dialogs /> */}
          {/* <Profile /> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
