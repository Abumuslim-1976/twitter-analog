import React, {useState} from 'react'

export default function SearchStatusFilter({filter,onFilterSelect}) {
    const [buttons] = useState([
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'}
    ]);

    const btn = buttons.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? 'btn-info' : 'btn-outline-secondary';
        return (
            <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="search-status-filter btn-group">
            {btn}
        </div>
    )

}
