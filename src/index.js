import React from 'react'
import ReactDOM from 'react-dom'
import './api/server'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    // Render a `<Provider>` around the entire `<App>`,
    // and pass the Redux store to as a prop
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
