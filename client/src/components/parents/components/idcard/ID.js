import { CloseOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./id.css"
import zenith from '../../../images/secon1.jpg'
import { CircularProgress } from "@material-ui/core"

const ID = () => {
    const [id, setId] = useState(false)
    const [loading, setLoadiing] = useState(true)

    const handleStatus = () => {
        setId(!id)
        setTimeout(() => {
            setLoadiing(false)
        }, 3000)
    }

    return (
        <div className="id">
            { id ? "" : "if the Your Id card got missing and you couldn't find it back print a new one here"}
                <button onClick={handleStatus} className="idbtn">{ id ? "" : "PRINT"}</button>
            {id ? <div className="idcard">
                <CloseOutlined onClick={() =>setId(false)} className="FilerIconClose" />
                {loading ? <CircularProgress color="black" size="70px"/> : <div className="idContainer">
                    <div className="idLeft">
                        <img src={zenith} alt="" className="idImg" />
                    </div>
                </div>}
            </div> : <div>
                </div>}
        </div>
    )
}

export default ID
