import {} from './SearchPanel.css'
import React, {useState} from 'react'


export default function SearchPanel({onUpdateSearch}) {
    const [, setTerm] = useState('');

    const onUpdateSearchs = (e) => {
        setTerm(e.target.value);
        onUpdateSearch(e.target.value)
    }

    return (
        <div className="search-panel">
            <input
                className="search-panel-input form-control"
                type="text"
                placeholder="Search by posts"
                onChange={onUpdateSearchs}
            />
        </div>
    )


}
