import React from 'react';
import s from './../Friends.module.scss';


interface FriendProps {
    name: string
}

const Friend: React.FC<FriendProps> = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.circle}></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}
export default Friend;