import React from 'react';
import s from './Post.module.scss';

interface PostProps {
    message: string,
    likesCount: string
}

const Post: React.FC<PostProps> = (props) => {
    return (<div className={s.post}>
        <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph"
            alt=""/>
        {props.message}
        <div>
            <button>Like</button>
            {props.likesCount}
        </div>

    </div>)
}
export default Post;