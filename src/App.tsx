import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import s from './App.module.scss'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
import News from "./pages/News/News"
import Music from "./pages/Music/Music";
import Settings from "./pages/Settings/Settings"
import Dialogs from "./pages/Dialogs/Dialogs";

interface AppProps {
    state: {
        navbar: {
            friends: { id: number, name: string }[],
        },
        profilePage: {
            posts: { id: number, likesCount: number, message: string }[],
        },
        dialogsPage: {
            messages: { id: number, message: string }[],
            dialogs: { id: number, name: string }[],
        },
    }
}

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Navbar state={props.state.navbar}/>

                <div className={s.App_content}>
                    <Routes>
                        <Route path="/" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path="/news*" element={<News/>}/>
                        <Route path="/music*" element={<Music/>}/>
                        <Route path="/settings*" element={<Settings/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
