// @ts-nocheck
import React from 'react';
import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

interface ProfileProps {
    state: { posts: { id: number, likesCount: number, message: string }[] }
}

const Profile: React.FC<ProfileProps> = (props) => {

    return (<div className={s.content}>
        <ProfileInfo/>
        <MyPosts state={props.state.posts}
                 newPostText={props.state.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>)
}
export default Profile;