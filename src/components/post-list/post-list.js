import React from 'react';
import PostlistItem from '../post-list-item';
import './post-list.css';

const Postlist = ({posts}) => {
    const elem = posts.map((item) => {
        const {id, ...itemProps} = item
        return(
            <li key={id} className='List-group-item'>
                <PostlistItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="app-list ist-group">
            {elem}
        </ul> 
    )
}

export default Postlist;