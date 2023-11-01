import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    useEffect(()=>{
        console.log("test asdfjkasdlfj")
    })

    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
        { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
        { title: 'Another Blog', body: 'lorem ipsum...', author: 'Peach', id: 4 },
        { title: 'JavaScript Fundamentals', body: 'lorem ipsum...', author: 'Mario', id: 5 },
        { title: 'React Hooks Tutorial', body: 'lorem ipsum...', author: 'Toad', id: 6 },
        { title: 'CSS Styling Tricks', body: 'lorem ipsum...', author: 'Peach', id: 7 },
        { title: 'Node.js Backend Development', body: 'lorem ipsum...', author: 'Bowser', id: 8 }
    ]);

    const handleDelete = (id) => {
        // Stores the filtered array temporarily - Returns false if the blog's ID is in the array so we can remove it.
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList
              blogs={blogs}
              title="All Blogs"
              handleDelete={handleDelete}
            />
            
  

            
        </div>
        
    );
}
 
export default Home;