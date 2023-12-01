import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { Blog } from './Types';

const Home = () => {
    // Use the Blog type with useFetch
    const { data: blogs, isPending, error } = useFetch<Blog[]>('http://127.0.0.1:5000/api/blogs');

    return (
        <>
            <div className="home">
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            </div>
        </>
    );
};

export default Home;
