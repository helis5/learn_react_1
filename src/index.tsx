// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state'
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
// import state from './redux/state';

let rerenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
    );
}


rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
