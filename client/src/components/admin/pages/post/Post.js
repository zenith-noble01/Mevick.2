import "./post.css"
import Sidebar from '../../components/sidebar/Sidebar'
import admin from '../../../images/secon1.jpg'
import photo from '../../../images/photo.png'
import {useState} from 'react'
import axios from 'axios'

const Post = () => {
    const [file, setFile] = useState(null)
    // const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            desc
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {}
    }
    return (
        <>
        <div className="post">
            <Sidebar />
            <div className="postWrapper">
                <form className="postContainer" onSubmit={handleSubmit}>
                    <div className="postTop">
                        <img src={admin} alt="" className="adminImg" />
                        <span>Admin</span>
                    </div>
                    <div className="textcontainer">
                        <textarea className="textField" placeholder="Enter message here" autoFocus={true} onChange={e=> setDesc(e.target.value)}></textarea>
                    </div>
                    {file &&(
                            <div className="postImgContainer">
                                <img src={URL.createObjectURL(file)} alt="" className="postImgtaker" />
                                <i className="closePost Imgfa fa-times" onClick={() => setFile(null)}></i>
                            </div>
                    )}
                    <div className="postFooter">
                        <div className="photoSelection">
                         <label htmlFor="filetaker" className="filetaker">
                               <img src={photo} alt=""/> <p>Photo/Video</p>
                         </label>
                         <input type="file" id="filetaker"  style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
                        </div>
                        <div className="postBtnContainer">
                            <button className="postBtn" type="submit">post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Post
  