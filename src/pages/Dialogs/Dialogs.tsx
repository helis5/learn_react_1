import React, {useRef} from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

interface DialogsProps {
    state: { messages: { id: string, message: string }[], dialogs: { name: string, id: string }[], }
}

const Dialogs: React.FC<DialogsProps> = (props) => {

    //преобразование с помощью .map в массив TSX элементов
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    const addMessage = () => {
        alert(newPostElement.current?.value);
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
                <textarea ref={newPostElement}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;