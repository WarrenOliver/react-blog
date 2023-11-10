import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link className="blog-links" to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            </Link>
          <div>Written by: {blog.author}</div>
          <div>Blog Preview: {blog.body}</div>
          
        </div>
      ))}
    </div>
  );
};

export default BlogList;
