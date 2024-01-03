import React from 'react';
import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

interface ProfileProps {
    state: { posts: { id: number, likesCount: number, message: string }[] }
}

const Profile: React.FC<ProfileProps> = (props) => {
    console.log('a')
    return (<div className={s.content}>
        <ProfileInfo/>
        <MyPosts state={props.state.posts}/>
    </div>)
}
export default Profile;