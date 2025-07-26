import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createStore} from "redux";

import reducer from "./reducer.js";
import {inc, dec, rnd} from "./actions.js"


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);


document.getElementById('inc').addEventListener('click', () => {
  dispatch(inc());
})
document.getElementById('dec').addEventListener('click', () => {
  dispatch(dec());
})
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  dispatch(rnd(value),);
})


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <>
      </>
    </StrictMode>,
)
