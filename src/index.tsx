 import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { RootStateType } from './redux/state';

 let rerenderEntiretree =   
  (state:RootStateType) => {
  ReactDOM.render(
    <App state={state} dispatch = {store.dispatch.bind(store)}/>, document.getElementById('root')
  );
}

rerenderEntiretree(store.getState())
store.subscribe(()=>{rerenderEntiretree(store.getState())})