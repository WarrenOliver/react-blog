import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
const Home = () => {
    // Use the Blog type with useFetch
    const { data: blogs, isPending, error } = useFetch('http://127.0.0.1:5000/api/blogs');
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "home", children: [error && _jsx("p", { children: error }), isPending && _jsx("p", { children: "Loading..." }), blogs && _jsx(BlogList, { blogs: blogs, title: "All Blogs" })] }) }));
};
export default Home;
