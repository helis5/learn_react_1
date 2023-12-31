import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

interface MyPostsProps {
    posts: ({ likesCount: string, id: string, message: string })[]
}

const MyPosts: React.FC<MyPostsProps> = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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