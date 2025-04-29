import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "../src/css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import store from './pages/store.jsx';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
</Provider>
)



