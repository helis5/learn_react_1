// @ts-nocheck
import React, {createContext, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import s from './App.module.scss'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News"
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings"
import Dialogs from "./pages/Dialogs/Dialogs";
import initialState from "./redux/state";

// interface AppProps {
//     state: {
//         navbar: {
//             friends: { id: number, name: string }[],
//         },
//         profilePage: {
//             posts: { id: number, likesCount: number, message: string }[],
//         },
//         dialogsPage: {
//             messages: { id: number, message: string }[],
//             dialogs: { id: number, name: string }[],
//         },
//     }
// }

export const ContextApp = createContext({state: initialState, setState: ()=>{}})

const App: React.FC<AppProps> = (props) => {
    const [state, setState] = useState(initialState);

    console.log('state ', state);

    return (
        <ContextApp.Provider value={{state, setState}} >
            <BrowserRouter>
                <div className={s.App}>
                    <Header/>
                    <Navbar state={state.navbar}/>
                    {/*<button onClick={addPost}>Кнопка</button>*/}
                    <div className={s.App_content}>
                        <Routes>
                            <Route path="/" element={<Profile state={state.profilePage}/>}/>
                            <Route path="/dialogs*" element={<Dialogs state={state.dialogsPage}/>}/>
                            <Route path="/news*" element={<News/>}/>
                            <Route path="/music*" element={<Music/>}/>
                            <Route path="/settings*" element={<Settings/>}/>
                        </Routes>

                    </div>

                </div>
            </BrowserRouter>
        </ContextApp.Provider>

    );
}

export default App;
