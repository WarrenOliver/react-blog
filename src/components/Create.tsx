import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario")

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        console.log(blog)
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                {/* Title field */}
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                {/* Body field */}
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                {/* Author field */}
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
            <br /><br /><br />
            <h1>{title}</h1>
            <br />
            <p>{body}</p>
            <br />
            <p>Author: {author}</p>


        </div>
    );
}
 
export default Create;