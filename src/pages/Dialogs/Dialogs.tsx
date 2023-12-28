import React from 'react';
import s from './Dialogs.module.scss';

interface DialogsProps {

}

const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={s.dialogs}>
            Dialogs
        </div>
    )
}
export default Dialogs;