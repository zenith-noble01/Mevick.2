import "./blogcenter.css"
import Apost from "../Apost/Apost"

const BlogCenter = ({posts}) => {
    return (
        <div className="blogCenter">
            {posts.map((p) =>(
                <Apost post={p} />
            ))}
        </div>
    )
}

export default BlogCenter
