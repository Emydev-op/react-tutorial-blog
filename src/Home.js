import { useState } from "react";

const Home = () => {

    const [blog, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blog.map((list) => (
                <div className="blog-preview" key={list.id}>
                    <h2>{ list.title }</h2>
                    <p>Written by {list.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;