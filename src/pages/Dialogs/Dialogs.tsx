import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

interface DialogsProps {
    messages: { id: string, message: string }[],
    dialogsData: { name: string, id: string }[]
}

const Dialogs: React.FC<DialogsProps> = (props) => {

    //преобразование с помощью .map в массив TSX элементов
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

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