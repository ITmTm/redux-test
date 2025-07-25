import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'

import './index.css'

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    default:
      return state;
  }
}

let state = reducer(initialState, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
console.log(state);

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App/>
    </StrictMode>,
)
