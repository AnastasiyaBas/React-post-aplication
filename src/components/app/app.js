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
                6,
                {label: "Going to learn React.", important: true, like: false, id: 1},
                {label: "It's not as hard as it seems.",  important: false, like: false, id: 2},
                {label: "I'm hungry..",  important: false, like: false, id: 3},
                [],
                {l:'e'}
            ]
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
            this.setState(({data}) => {
                const index = data.findIndex(elem => elem.id === id);
                const old = data[index];
                const newItem = {...old, important: !old.important};
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            });
        };
        this.onToggleLiked = (id) => {
            this.setState(({data,}) => {
                const index = data.findIndex(elem => elem.id === id);
                const old = data[index];
                const newItem = {...old, like: !old.like};
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                return {
                    data: newArr
                }
            });
        };
    }

    render() {
        const liked = this.state.data.filter(item => item.like).length;
        const allPosts = this.state.data.filter(item => item && item.hasOwnProperty('label') && item.hasOwnProperty('important') && item.hasOwnProperty('id')).length;

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <Postlist 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

