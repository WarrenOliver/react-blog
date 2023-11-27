import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const SingleBlogPage = () => {
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/'+ id)
    const navigate = useNavigate();

    const handleDelete = (data) => {
        fetch('http://localhost:8000/blogs' + id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        }).then(() => {
            console.log('Blog Deleted')
            navigate('/')
        })
    }


    return (
        <div className="single-blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                    <div>
                        { blog.body }
                    </div>
                    <br /><br />
                    <button className="delete-button" onClick={() => handleDelete(blog)}>Delete this blog</button>

                </article>
            )}
        </div>
    );
}
 
export default SingleBlogPage;