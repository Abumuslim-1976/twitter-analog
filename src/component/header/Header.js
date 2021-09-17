import {} from './Header.css'

export default function Header({like, posts}) {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <h2>Amonov Abumuslim</h2>
            <h4>{posts} posts , {like} likes</h4>
        </div>
    )
}