import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Yoshi', id: 3}
    ]);
    const title = "boogi8e"
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
        
    );
}
 
export default Home;