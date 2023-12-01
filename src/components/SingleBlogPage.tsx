import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

// Define the type for a blog
interface Blog {
  id: number;
  title: string;
  author: string;
  body: string;
  // Add other properties of the blog as needed
}

const SingleBlogPage = () => {
    // Using 'useParams' with TypeScript
    const { id } = useParams<{ id: string }>();
    const { data: blog, isPending, error } = useFetch<Blog>('http://127.0.0.1:5000/api/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://127.0.0.1:5000/api/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            console.log('Blog Deleted');
            navigate('/');
        })
    }

    return (
        <div className="single-blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <br /><br />
                    <button className="delete-button" onClick={handleDelete}>&gt;&gt;&gt; blog.delete()</button>
                </article>
            )}
        </div>
    );
}

export default SingleBlogPage;
