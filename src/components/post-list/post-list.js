import React from 'react';
import PostlistItem from '../post-list-item';
import './post-list.css';

const Postlist = () => {
    return (
        <ul className="app-list ist-group">
            <PostlistItem label="Going to learn React."/>
            <PostlistItem label="It's not as hard as it seems."/>
            <PostlistItem label="I'm hungry.."/>
        </ul>
    )
}

export default Postlist;