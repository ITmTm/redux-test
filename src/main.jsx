import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createStore, bindActionCreators} from "redux";

import reducer from "./reducer.js";
import * as actions from "./actions.js"


const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc)
document.getElementById('dec').addEventListener('click', dec)
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
})


createRoot(document.getElementById('root')).render(
    <StrictMode>
      <>
      </>
    </StrictMode>,
)
