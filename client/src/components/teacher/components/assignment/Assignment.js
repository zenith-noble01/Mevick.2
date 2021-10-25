import { useState } from "react"
import "./assignment.css"
import axios from 'axios'
import admin from "../../../images/secon1.jpg"
import { CloseOutlined, PhotoTwoTone } from "@material-ui/icons"
const Assignment = () => {
    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState("")
    const [tclass, setTclass] = useState(false)

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
            await axios.post("http://https://mevback.herokuapp.com/api/upload", data);
        } catch (err) {}
    }
    try {
        await axios.post("http://https://mevback.herokuapp.com/api/posts", newPost);
        window.location.reload();
    } catch (err) {}
    }
    return (
        <div className="assignment">
            <form className="postContainerT" onSubmit={handleSubmit}>
                <div className="postTop">
                    <img src={admin} alt="" className="adminImg" />
                    <span>Zenith Noble</span>
                </div>
                {file &&(
                        <div className="postImgContainerA">
                            <img src={URL.createObjectURL(file)} alt="" className="postImgtaker" />
                            <CloseOutlined onClick={() => setFile(null)} className="FilerIconClose" />
                        </div>
                )}
                <div className="textcontainer">
                    <textarea className="textField" placeholder="Enter message here" autoFocus={true} onChange={e=> setDesc(e.target.value)}></textarea>
                </div>
                <div className="postFooter">
                    <div className="photoSelection">
                        <label htmlFor="filetaker" className="filetaker">
                            <PhotoTwoTone/> <p>Photo/Video</p>
                        </label>
                        <input type="file" id="filetaker"  style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="postBtnContainerA">
                        <li className="postBtnA" onClick={() => setTclass(!tclass)}>Select Class & post</li>
                        <div className={tclass ?  "goout" : "classContainer"}>
                            <ul className="conta">
                                <li className="teacherClasses">LSS1</li>
                                <li className="teacherClasses">LSS7</li>
                                <li className="teacherClasses">LSS8</li>
                                <li className="teacherClasses">LSS8</li>
                                <li className="teacherClasses">LSS8</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Assignment
