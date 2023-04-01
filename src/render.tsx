import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, addPost } from './redux/state';

export let rerenderEntiretree = (state: RootStateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />, document.getElementById('root')
  );
}