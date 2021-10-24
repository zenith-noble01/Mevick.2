import { CloseOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./id.css"
import zenith from '../../../images/secon1.jpg'
import logo from '../../../images/logo.png'
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
                <button className="btnPrint">{loading? <CircularProgress size="20px" color="white" /> :  "Print Id"}</button>
                <CloseOutlined onClick={() =>setId(false)} className="FilerIconClose" />
                {loading ? <CircularProgress size="70px" color="white" />
                :
                <div className="idContainer">
                    <div className="idTop">
                        <img src={logo} className="idlogo" alt="" />
                        <p>Mevick Id Card</p>
                    </div>
                    <div className="idMiles">
                        <div className="idLeft">
                            <img src={zenith} alt="" />
                        </div>
                        <div className="idRight">
                            <p>Name : <span>Zenith Noble</span></p>
                            <p>ID: <span>45678907654323456</span></p>
                            <p>Session: <span>2021-2022</span></p>
                            <p>Class: <span>LSS</span></p>
                            <p>Mobile: <span>653 43 95 74</span></p>
                            <button>The Principal Signature</button>
                        </div>
                    </div>
                </div>}
            </div> : <div>
                </div>}
        </div>
    )
}

export default ID
