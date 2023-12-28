import React from 'react';
import s from './Dialogs.module.scss';
import {NavLink} from "react-router-dom";

interface DialogsProps {

}

const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={s.dialogs}>
            <nav className={s.dialogs_items}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='1'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='3'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='5'>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='6'>Valera</NavLink>
                </div>
            </nav>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;