import React from 'react';
import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

interface ProfileProps {
    postData: ({ likesCount: string, id: string, message: string })[]
}

const Profile: React.FC<ProfileProps> = (props) => {

    return (<div className={s.content}>
        <ProfileInfo/>
        <MyPosts postData={props.postData}/>
    </div>)
}
export default Profile;