import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const SingleBlogPage = () => {
    // Using 'useParams' with TypeScript
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('https://pure-depths-42732-665f9d14be7f.herokuapp.com/api/blogs/' + id);
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('https://pure-depths-42732-665f9d14be7f.herokuapp.com/api/blogs/' + id, {
            method: "DELETE"
        }).then(() => {
            console.log('Blog Deleted');
            navigate('/');
        });
    };
    return (_jsxs("div", { className: "single-blog-details", children: [isPending && _jsx("div", { children: "Loading..." }), error && _jsx("div", { children: error }), blog && (_jsxs("article", { children: [_jsx("h2", { children: blog.title }), _jsxs("p", { children: ["Written By: ", blog.author] }), _jsx("div", { children: blog.body }), _jsx("br", {}), _jsx("br", {}), _jsx("button", { className: "delete-button", onClick: handleDelete, children: ">>> blog.delete()" })] }))] }));
};
export default SingleBlogPage;
