import PostListItem from "../postListItem/PostListItem";
import {} from './PostList.css'

export default function PostList({posts, onDeleteItem, onToggleLike, onToggleImportant}) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostListItem
                    key={post.id}
                    {...post}
                    onDelete={() => onDeleteItem(post.id)}
                    onToggleLike={() => onToggleLike(post.id)}
                    onToggleImportant={() => onToggleImportant(post.id)}
                />
            ))}
        </div>
    )
}