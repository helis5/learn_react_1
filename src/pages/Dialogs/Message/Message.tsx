import React from 'react';
import s from './../Dialogs.module.scss';

interface MessageProps {
    message: string,
}

const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message;