import {} from './PostAddForm.css'
import React, {useState} from "react";

export default function PostAddForm({onAddForm}) {
    const [text, setText] = useState('');

    const writeText = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddForm(text);
        setText('');
    }

    return (
        <form className="post-add-form d-flex" onSubmit={onSubmit}>
            <input
                className="post-add-form-label form-control"
                type="text"
                placeholder="What are you thinking about ?"
                onChange={writeText}
                value={text}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Add form
            </button>
        </form>
    )


}