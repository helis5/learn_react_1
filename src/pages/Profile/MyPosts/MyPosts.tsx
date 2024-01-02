import React, {useRef} from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

interface MyPostsProps {
    state: ({ likesCount: string, id: string, message: string })[]
}

const MyPosts: React.FC<MyPostsProps> = (props) => {

    let postElements = props.state.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        alert(newPostElement.current?.value);
    };

    return (<div className={s.all_posts}>
        <h3>My posts</h3>
        <div className={s.new_post}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>)
}
export default MyPosts;