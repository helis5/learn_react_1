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


function App() {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Navbar/>

                <div className={s.App_content}>
                    <Routes>
                        <Route path="/" Component={Profile}/>
                        <Route path="/dialogs*" Component={Dialogs}/>
                        <Route path="/news*" Component={News}/>
                        <Route path="/music*" Component={Music}/>
                        <Route path="/settings*" Component={Settings}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
