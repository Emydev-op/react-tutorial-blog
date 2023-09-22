import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending]= useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = {title, body, author};
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBlog),
        }).then(()=> {
            setIsPending(false);
        })
    };

    return ( 
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text"
                 value={title}
                 onChange={(e)=> setTitle(e.target.value)}
                 required
                />
                <label>Blog body:</label>
                <textarea 
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                required
                >
                </textarea>
                <label>Blog author:</label>
                <select value={author}  onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;