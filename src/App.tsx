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
import {postData, dialogsData, messages} from "./ServerData";


//изначальные данные(допустим они пришли с сервера)


const App: React.FC = (props) => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Navbar/>

                <div className={s.App_content}>
                    <Routes>
                        <Route path="/" element={<Profile postData={postData} />}/>
                        <Route path="/dialogs*" element={<Dialogs messages={messages} dialogsData={dialogsData} />}/>
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
