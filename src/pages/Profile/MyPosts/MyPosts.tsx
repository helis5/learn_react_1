// @ts-nocheck

import React, {useContext, useRef, useState} from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import {ContextApp} from "../../../App";
import {log} from "util";
import {updateNewPostText} from "../../../redux/state";

interface MyPostsProps {
    state: ({ id: number, likesCount: number, message: string })[],
}


const MyPosts: React.FC<MyPostsProps> = (props) => {

    // const stateApp = useContext(ContextApp);
    //
    // const addPost = () => {
    //     // state.profilePage.posts.push({ id: 5, likesCount: 5, message: 'newPost' });
    //     stateApp.setState({
    //         ...stateApp.state,
    //         profilePage: {
    //             ...stateApp.state.profilePage,
    //             posts: [...stateApp.state.profilePage.posts, {id: 5, likesCount: 5, message: 'newPost'}]
    //         }
    //     })
    // }

    let postElements = props.state.map(p => <Post message={p.message} likesCount={String(p.likesCount)}/>);

    let newPostElement = useRef<HTMLTextAreaElement>(null);


    // const [count, setCount] = useState({value: 1});

    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (<div className={s.all_posts}>
        <h3>My posts</h3>
        <div className={s.new_post}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            {/*<button onClick={()=>setCount(10)}>Add post</button>*/}
            <button onClick={addPost}>Add post</button>
            {/*<div>{count.value}</div>*/}

        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>)
}
export default MyPosts;