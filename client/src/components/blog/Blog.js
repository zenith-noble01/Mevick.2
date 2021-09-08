import "./blog.css"
import Topbar from '../topbar/Topbar'
import BlogCenter from "../blogCenter/BlogCenter"

const Blog = () => {
    return (
        <div className="blog">
            <Topbar />
            <div className="blogContainer">
                <BlogCenter />
            </div>
        </div>
    )
}

export default Blog
