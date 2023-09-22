import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if (!res.ok) {
                throw Error('Couldn\'t connect to server');
            }
            return res.json()
        })
        .then((data) => {
            setBlogs(data); 
            setPending(false)
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setPending(false);
        })
    }, []);

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;