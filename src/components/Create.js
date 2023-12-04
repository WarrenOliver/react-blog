import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Emma Clarkson");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('https://pure-depths-42732-665f9d14be7f.herokuapp.com/api/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate("/");
        });
    };
    return (_jsxs("div", { className: "create", children: [_jsx("h2", { children: "Add a New Blog" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { children: "Blog Title:" }), _jsx("input", { type: "text", required: true, value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("label", { children: "Blog Body:" }), _jsx("textarea", { required: true, value: body, onChange: (e) => setBody(e.target.value) }), _jsx("label", { children: "Blog Author:" }), _jsxs("select", { value: author, onChange: (e) => setAuthor(e.target.value), children: [_jsx("option", { value: "Emma Clarkson", children: "Emma Clarkson" }), _jsx("option", { value: "Liam Nguyen", children: "Liam Nguyen" }), _jsx("option", { value: "Aria Patel", children: "Aria Patel" }), _jsx("option", { value: "Noah Kim", children: "Noah Kim" }), _jsx("option", { value: "Sophia Martinez", children: "Noah Kim" }), _jsx("option", { value: "Oliver Smith", children: "Oliver Smith" }), _jsx("option", { value: "Mia Johnson", children: "Mia Johnson" })] }), !isPending && _jsx("button", { children: ">>> blog.create()" }), isPending && _jsx("button", { children: "Creating new blog..." })] }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("h1", { children: title }), _jsx("br", {}), _jsx("p", { children: body }), _jsx("br", {}), _jsxs("p", { children: ["Author: ", author] })] }));
};
export default Create;
