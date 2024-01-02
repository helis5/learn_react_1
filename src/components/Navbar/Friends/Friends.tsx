import React from 'react';
import s from './Friends.module.scss';
import Friend from "./Friend/Friend";
import "../Navbar";

interface FriendsProps {
    state: {
        friends: { id: number, name: string }[],
    }
}

const Friends: React.FC<FriendsProps> = (props) => {
    let friendsElements = props.state.friends.map(f => <Friend name={f.name}/>);
    return (
        <div className={s.friends}>
            {friendsElements}
        </div>
    )
}
export default Friends;