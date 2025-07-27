import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./reducer.js";

import App from "./components/App.jsx";

const store = createStore(reducer);

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </StrictMode>,
)


