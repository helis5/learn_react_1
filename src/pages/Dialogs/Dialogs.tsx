// @ts-nocheck
import React, {useRef} from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

interface DialogsProps {
    state: { messages: { id: number, message: string }[], dialogs: { id: number, name: string }[], }
}

const Dialogs: React.FC<DialogsProps> = (props) => {

    //преобразование с помощью .map в массив TSX элементов
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={String(d.id)}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <nav className={s.dialogs_items}>
                {dialogsElements}
            </nav>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.new_message}>
                <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText} />
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;