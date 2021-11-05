import React, { useState } from "react" 
import "./loogin.css"
import {Visibility, VisibilityOff} from "@material-ui/icons"

const Login = () => {

    //CALLING THE DIFFERENT VARIABLES
    const [password, setPassword] = useState(false)
    const [name, setName] = useState("")
    const [lock, setLock] = useState("")
    const [email, setEmail] = useState("")

    //HANDLING THE LOGIN FUNCTION
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
            <div className="ALoLognContainer">
                <p className="secret">You found the secret Admin</p>
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
                        <input className="names" type={!password ? "password" : "text"} required onChange={(e)=> setLock(e.target.value)} placeholder="Password" />
                        {!password ? <Visibility className="eye" onClick={()=> setPassword(!password)}/> :   <VisibilityOff  className="eye" onClick={()=> setPassword    (!password)} />}
                    </div>
                    <button>Sign In</button>
                </form>
            </div>
    </div>
    )
}

export default Login