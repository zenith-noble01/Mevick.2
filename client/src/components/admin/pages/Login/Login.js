import React, { useContext, useState } from "react" 
import "./loogin.css"
import {Visibility, VisibilityOff} from "@material-ui/icons"
import { loginCall } from "../../../../api/adminApiCall"
import { AdminAuthContext } from "../../../../AdminContext/AAuthContex"
import { CircularProgress } from "@material-ui/core"

const Login = () => {

    //CALLING THE DIFFERENT VARIABLES
    const [lock, setLock] = useState(false)
    const [adminname, setAdminName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const {admin, isFetching, dispatch} = useContext(AdminAuthContext)

    //HANDLING THE LOGIN FUNCTION
    const handleLogin = (e)=>{
        e.preventDefault();
        loginCall({adminname, email, password}, dispatch)
        console.log(admin); 
    }
    return (
        <div className="Alogin">
            <div className="ALoLognContainer">
                <p className="secret">You found the secret Admin</p>
                <form className="ParentForm" onSubmit={handleLogin}>
                    <div className="parentItem">
                        <label>Username</label>
                        <input className="names" type="text" placeholder="mevick" required autoFocus="true" onChange={(e) =>setAdminName(e.target.value)} />
                    </div>
                    <div className="parentItem">
                        <label>Email</label>
                        <input className="names" type="email" placeholder="mevik@gmail.com" required onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="parentItem">
                        <label>Password</label>
                        <input className="names" type={!lock ? "password" : "text"} required onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                        {!lock ? <Visibility className="eye" onClick={()=> setLock(!lock)}/> :   <VisibilityOff  className="eye" onClick={()=> setLock(!lock)} />}
                    </div>
                    <button disabled={isFetching}>{isFetching ? <CircularProgress size="20px" color="white"/> : "Sign In"}</button>
                </form>
            </div>
            <div className="seen">
                <p className="secret found">You found the secret Admin</p>
                <p className="but">Opps!! this feature  is not available on mobile devices</p>
            </div>
        </div>
    )
}

export default Login;