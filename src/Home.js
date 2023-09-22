import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [ name, setName ] = useState('mario')

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => res.json())
        .then((data) => setBlogs(data))
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            <button onClick={() => setName('Saske')}>Change</button>  
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;