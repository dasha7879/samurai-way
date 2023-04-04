 import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

 let rerenderEntiretree =   
  () => {
  ReactDOM.render(
    <App state={store._state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root')
  );
}

rerenderEntiretree()
store.subscribe(rerenderEntiretree)