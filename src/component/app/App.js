import React, {useState} from "react";
import './App.css';
import Header from "../header/Header";
import SearchPanel from "../searchPanel/SearchPanel";
import SearchStatusFilter from "../searchStatusFilter/SearchStatusFilter";
import PostList from "../postList/PostList";
import PostAddForm from "../postAddForm/PostAddForm";


export default function App() {
    const [posts, setPosts] = useState([
        {label: 'Going to learn React js', important: false, like: false, id: 1},
        {label: 'That is so good', important: false, like: false, id: 2},
        {label: 'I need a beak', important: false, like: false, id: 3}
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    let nextId = 4;

    const onDeleteItem = (id) => {
        setPosts((posts) => {
            let index = posts.findIndex((element) => element.id === id);
            let newArr = [...posts.slice(0, index), ...posts.slice(index + 1)];
            return {
                posts: newArr
            }
        })
    }

    const onAdd = (label) => {
        let post = {
            label: label,
            important: false,
            like: false,
            id: nextId++
        }
        setPosts((posts) => {
            let newArr = [...posts, post];
            return {
                posts: newArr
            }
        })
    }

    const onToggleLike = (id) => {
        setPosts((posts) => {
            const index = posts.findIndex(element => element.id === id);
            const oldItem = posts[index];
            const newItem = {...oldItem, like: !oldItem.like}
            const newArr = [...posts.slice(0, index), newItem, ...posts.slice(index + 1)]
            return {
                posts: newArr
            }
        })
    }

    const onToggleImportant = (id) => {
        setPosts((posts) => {
            const index = posts.findIndex(elem => elem.id === id);
            const oldItem = posts[index];
            const newItem = {...oldItem, important: !oldItem.important};
            const newArr = [...posts.slice(0, index), newItem, ...posts.slice(index + 1)]
            return {
                posts: newArr
            }
        })
    }

    const searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1
        })
    }

    const filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items;
        }
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const visiblePosts = filterPost(searchPost(posts, term), filter)
    let like = posts.filter(post => post.like).length;
    let postsLength = posts.length;

    return (
        <div className="app">
            <Header like={like} posts={postsLength}/>
            <div className="d-flex">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <SearchStatusFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
            <PostList
                posts={visiblePosts}
                onDeleteItem={onDeleteItem}
                onToggleLike={onToggleLike}
                onToggleImportant={onToggleImportant}
            />
            <PostAddForm onAddForm={onAdd}/>
        </div>
    )

}
