import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts: React.FC = () => {

    let postData = [
        {id: '1', message: 'Hi, how are you?', likesCount: '12'},
        {id: '2', message: 'Its my first post', likesCount: '11'},
    ];

    let postElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (<div className={s.all_posts}>
        <h3>My posts</h3>
        <div className={s.new_post}>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>)
}
export default MyPosts;