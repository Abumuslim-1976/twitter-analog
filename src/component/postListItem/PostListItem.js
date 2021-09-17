import {} from './PostListItem.css'

export default function PostListItem({important, like, onToggleLike, onToggleImportant, onDelete, label}) {
    return (
        <ul className="list-group post">
            <div className="d-flex">
                <div className="post-list-item">
                    <li className="list-group-item">
                        <span className=
                                  {important ? 'post-list-item-span important' : 'post-list-item-span'}
                              onClick={onToggleLike}>{label}
                        </span>
                    </li>
                </div>
                <div className="app-list-item d-flex justify-content-between align-items-center">
                    <button
                        className='btn btn-star'
                        type="submit"
                        onClick={onToggleImportant}>
                        <i className={important ? 'fas fa-star important' : 'fas fa-star'}></i>
                    </button>
                    <button className="btn btn-trash" type="submit" onClick={onDelete}><i
                        className="fas fa-trash"></i></button>
                    <button
                        className={like ? 'btn btn-heart like' : 'btn btn-heart'}
                        type="submit"><i
                        className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </ul>
    )
}

