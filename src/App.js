import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleBlogPage from './components/SingleBlogPage';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: 'App', children: [_jsx(Navbar, {}), _jsx("div", { className: "content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/create", element: _jsx(Create, {}) }), _jsx(Route, { path: "/blogs", element: _jsx(Home, {}) }), _jsx(Route, { path: "/blogs/:id", element: _jsx(SingleBlogPage, {}) }), _jsx(Route, { path: "*", element: _jsx(PageNotFound, {}) })] }) })] }) }));
}
export default App;
