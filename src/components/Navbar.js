import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("nav", { className: "navbar", children: [_jsx("a", { href: "/", children: _jsx("h1", { children: "Warren's Blog" }) }), _jsxs("div", { className: "links", children: [_jsx(Link, { to: "/react-blog", children: "Home" }), _jsx(Link, { to: "/create", children: "New Blog" })] })] }));
};
export default Navbar;
