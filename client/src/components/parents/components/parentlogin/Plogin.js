import React, { useState } from "react" 
import { RemoveCircleRounded, RemoveRedEyeSharp} from "@material-ui/icons"
import"./plogin.css"

const Plogin = () => {
    const [password, setPassword] = useState(false)
    const [name, setName] = useState("")
    const [lock, setLock] = useState("")
    const [email, setEmail] = useState("")
    const handleLogin = (e)=>{
        e.preventDefault();
        const info = {
            name,
            email,
            lock
        }
        console.log(info);
    }
    return (
        <div className="plogin">
            <div className="pLoLognContainer">
                <form className="ParentForm" onSubmit={handleLogin}>
                    <div className="parentItem">
                        <label>Username</label>
                        <input className="names" type="text" placeholder="mevick" required autoFocus="true" onChange={(e) =>setName(e.target.value)} />
                    </div>
                    <div className="parentItem">
                        <label>Email</label>
                        <input className="names" type="email" placeholder="mevik@gmail.com" required onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="parentItem">
                        <label>Password</label>
                        <input className="names" type={!password ? "password" : "text"} required onChange={(e)=> setLock(e.target.value)} />
                        {!password ? <RemoveRedEyeSharp className="eye" onClick={()=> setPassword(!password)}/> :   <RemoveCircleRounded  className="eye" onClick={()=> setPassword(!password)} />}
                    </div>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Plogin
