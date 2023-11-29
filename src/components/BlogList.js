import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
    return (_jsxs("div", { className: "blog-list", children: [_jsx("h1", { children: title }), blogs.map((blog) => (_jsxs("div", { className: "blog-preview", children: [_jsx(Link, { className: "blog-links", to: `/blogs/${blog.id}`, children: _jsx("h2", { children: blog.title }) }), _jsxs("div", { children: ["Written by: ", blog.author] })] }, blog.id)))] }));
};
export default BlogList;
