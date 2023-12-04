import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Emma Clarkson");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('https://pure-depths-42732-665f9d14be7f.herokuapp.com/api/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            navigate("/")
        })
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
                    <option value="Emma Clarkson">Emma Clarkson</option>
                    <option value="Liam Nguyen">Liam Nguyen</option>
                    <option value="Aria Patel">Aria Patel</option>
                    <option value="Noah Kim">Noah Kim</option>
                    <option value="Sophia Martinez">Sophia Martinez</option>
                    <option value="Oliver Smith">Oliver Smith</option>
                    <option value="Mia Johnson">Mia Johnson</option>

                    
                </select>
                {!isPending && <button>&gt;&gt;&gt; blog.create()</button>}
                {isPending && <button>Creating new blog...</button>}
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