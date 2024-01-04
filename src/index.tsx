// @ts-nocheck
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {addPost} from "./redux/state";
import state from './redux/state'
import {rerenderEntireTree} from "./render";


// const root = ReactDOM.createRoot(
//     document.getElementById('root') as HTMLElement
// );
//
// export let rerenderEntireTree = () => {
//     root.render(
//         <React.StrictMode>
//             <App state={state} addPost={addPost}/>
//         </React.StrictMode>
//     );
// }

rerenderEntireTree(state);

// reportWebVitals();
