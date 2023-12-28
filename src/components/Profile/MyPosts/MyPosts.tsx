import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts: React.FC = () => {
    return (<div className={s.all_posts}>
        <div className={s.new_post}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message="Hi, how are you?" />
            <Post message='Its my first post' />
        </div>
    </div>)
}
export default MyPosts;