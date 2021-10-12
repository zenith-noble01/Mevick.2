import "./blog.css"
import BlogCenter from "../blogCenter/BlogCenter"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        const fetchPost = async () =>{
            const res = await axios.get('http://localhost:7000/api/posts')
            console.log(res)
            setPosts(
            res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
           }));
        }
        fetchPost()
    }, [])


    return (
        <div className="blog">
            <div className="blogContainer">
                <BlogCenter posts={posts} />
            </div>
        </div>
    )
}

export default Blog
