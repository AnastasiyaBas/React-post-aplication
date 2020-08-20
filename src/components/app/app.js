import React from 'react';
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    const data = [
        {label: "Going to learn React.", important: true, id: 'plkojjj'},
        {label: "It's not as hard as it seems.",  important: false, id: 'wprs'},
        {label: "I'm hungry..",  important: false, id: 'wpad'}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <Postlist posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;
