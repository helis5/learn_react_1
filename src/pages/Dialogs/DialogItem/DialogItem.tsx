import React from 'react';
import s from './../Dialogs.module.scss';
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


export default DialogItem;