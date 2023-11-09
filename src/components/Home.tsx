import useFetch from "./useFetch";
// import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // deconstructing variables I want to have fetched data assigned to.
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

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
