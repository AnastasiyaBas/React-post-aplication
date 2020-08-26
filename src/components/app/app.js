import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header'
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React.", important: true, like: false, id: 1},
                {label: "It's not as hard as it seems.",  important: false, like: false, id: 2},
                {label: "I'm hungry..",  important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = (id) => {
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            });
        };
        this.addItem = (body) => {
            const newItem = {
                label: body,
                important: false,
                id: nextId()
            }
            this.setState(({data}) => {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            });
        };  
        this.onToggleImportant = (id) => {
            this.changeStateItem(id, 'important');
        };
        this.onToggleLiked = (id) => {
            this.changeStateItem(id, 'like');
        };
        this.onUpdateSearch = (term) => {
            this.setState({term})
        };
        this.onFilterSelect = (filter) => {
            this.setState({filter})
        };
        this.filterPost = (items, filter) => {
            if(filter === 'like') {
                return items.filter(item => item.like)
            } else {
                return items
            }
        };
        
    }

    changeStateItem(id, item) {
        this.setState(({data,}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, [item]: !old.[item]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.search(term) !== -1
        });
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.filter(item => item && item.hasOwnProperty('label') 
                                                    && item.hasOwnProperty('important') 
                                                    && item.hasOwnProperty('id')).length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <Postlist 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </div>
        )
    }
}

