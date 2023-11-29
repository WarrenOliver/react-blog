import React from "react";
import { Link } from "react-router-dom";

// Define a type for individual blog entries
interface Blog {
  id: number;
  title: string;
  author: string;
}

// Define a type for the component props
interface BlogListProps {
  blogs: Blog[];
  title: string;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link className="blog-links" to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <div>Written by: {blog.author}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
