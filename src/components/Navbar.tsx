import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/react-blog"><h1>Warren's Blog</h1></a>
            <div className="links">
                <Link to="/react-blog">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;