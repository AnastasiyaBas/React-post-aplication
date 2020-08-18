import React from 'react';
import './post-list-item.css';

const PostlistItem = ({label}) => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justyfy-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}
export default PostlistItem;