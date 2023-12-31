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
import state from "./redux/state";

interface AppProps {
    state: {
        messages: { id: string, message: string }[],
        dialogs: { name: string, id: string }[],
        posts: ({ likesCount: string, id: string, message: string })[],
    }
}

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Navbar/>

                <div className={s.App_content}>
                    <Routes>
                        <Route path="/" element={<Profile posts={props.state.posts} />}/>
                        <Route path="/dialogs*" element={<Dialogs messages={state.messages} dialogs={props.state.dialogs} />}/>
                        <Route path="/news*" element={<News />}/>
                        <Route path="/music*" element={<Music />}/>
                        <Route path="/settings*" element={<Settings />}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
