import useFetch from "./useFetch";
import BlogList from "./BlogList";
import { Blog } from './Types';

const Home = () => {
    // Use the Blog type with useFetch
    const { data: blogs, isPending, error } = useFetch<Blog[]>('https://pure-depths-42732-665f9d14be7f.herokuapp.com/api/blogs');

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
