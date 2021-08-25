import React from "react";
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from "redux";
import { Provider } from "react-redux";
import App from './App';
import thunk from "redux-thunk";
import reducer from './redux/reducers';

//store is given both reducer and thunk(for async work)
let myStore = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(

  <Provider store = {myStore}>
    <App />
  </Provider>

 ,
  document.getElementById('root')
);

