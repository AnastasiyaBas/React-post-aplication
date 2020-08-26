import React from 'react';
import PostlistItem from '../post-list-item';
import './post-list.css';

const Postlist = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elem = posts.filter(item => item && item.hasOwnProperty('label') 
                                            && item.hasOwnProperty('important') 
                                            && item.hasOwnProperty('id'))
    .map(item => {
        return(
            <li key={item.id} className='List-group-item'>
                <PostlistItem 
                    label={item.label} 
                    important={item.important} 
                    onDelete={() => onDelete(item.id)} 
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleLiked={() => onToggleLiked(item.id)}
                />
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