import "./blog.css"
import BlogCenter from "../blogCenter/BlogCenter"
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { CircularProgress } from "@material-ui/core"
import Skeleton from "../Skeleton/Skeleton"


const Blog = () => {
    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState()
    useEffect(() =>{
        const fetchPost = async () =>{
            try {
                const res = await axios.get('http://localhost:5000/api/posts')
                setPosts(
                    res.data.sort((p1, p2) => {
                        return new Date(p2.createdAt) - new Date(p1.createdAt);
                    }))
            } catch (error) {
                console.log(error);
                setIsError(error)
                console.log("miels");
            }
        }
        fetchPost()
    }, [])
    
    // point break
    // console.log(posts)

    return (
        <div className={isError ? "blogError" : "blog" }>
            {isError ?
                <div className="error">
                    <Skeleton />
                    {/* <CircularProgress size="70px" color="white" /> */}
                </div>
                :
                <div className="blogContainer">
                <BlogCenter posts={posts} />
                </div>
            }
        </div>
    )
}

export default Blog
