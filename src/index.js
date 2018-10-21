import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
//   libraries to create the store and reducers
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

//   call createStore and pass the root reducer
const store = createStore(reducer)
//   wrap main app component in provider component and pass store as prop  
ReactDOM.render(
<Provider store={store}>
<App />
</Provider >,
document.getElementById('root'));
registerServiceWorker();

