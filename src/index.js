import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

import {rootReducer} from "./redux/reducers/root.reducer"

// scss
import "antd/dist/antd.css"
import "./css/main.scss"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
reportWebVitals()
