import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

interface DialogItemProps {
    name: string,
    id: string,
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}

interface MessageProps {
    message: string,
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

interface DialogsProps {

}

const Dialogs: React.FC<DialogsProps> = (props) => {

    //изначальные данные(допустим они пришли с сервера)
    let dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Andrew'},
        {id: '3', name: 'Svea'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
    ];

    let messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo'},
        {id: '4', message: 'LI'},
        {id: '5', message: 'LI'},
        {id: '6', message: 'LI'},
    ];
    //преобразование с помощью .map в массив TSX элементов
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <nav className={s.dialogs_items}>
                {dialogsElements}
            </nav>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;