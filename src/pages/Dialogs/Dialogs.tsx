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

    let dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Andrew'},
        {id: '3', name: 'Svea'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'},
    ];

    return (
        <div className={s.dialogs}>
            <nav className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Svea" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Viktor" id="5"/>
                <DialogItem name="Valera" id="6"/>
            </nav>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}
export default Dialogs;