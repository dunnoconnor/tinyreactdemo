import React from 'react';

function Post(props) {
    return (
        <div>
            <h2>Post from: {props.username}</h2>
            <img alt='react logo' src={props.imageURL} className='post-image'/>
        </div>
    );
}

export default Post;