import { Publish } from "@material-ui/icons"
import { useState } from "react"
import zenith from '../images/secon1.jpg'
import "./admission.css"
import axios from 'axios'

const Admission = () => {

  const [file, setFile] = useState(null)
  const [studentname, setStudentName] = useState("")
//   const [studentclass, setStudentClass] = useState("")
  const [studentemail, setStudentEmail] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [fathername, setFathername] = useState("")
  const [fatherPhone, setFatherPhone] = useState("")
  const [fatheroccupation, setfatherOccupation] = useState("")
  const [mothername, setMothername] = useState("")
  const [motherPhone, setMotherPhone] = useState("")
  const [motheroccupation, setMotherOccupation] = useState("")
  const [dob, setDob] = useState("")
  const [studentaddress, setStudentAddress] = useState("")
  const [phone, setPhone] = useState("")

  const studentInformation = async (e) => {
      e.preventDefault();
      const infos = {
        gender,
        email,
        studentname,
        studentemail,
        fathername,
        fatherPhone,
        fatheroccupation,
        mothername,
        motherPhone,
        motheroccupation,
        password,
        username,
        dob,
        studentaddress,
       phone,
      }
      if (file) {
        const data = new FormData();
        const fileName = Date.now() + file.name;
        data.append("name", fileName);
        data.append("file", file);
        infos.img = fileName;
        console.log(infos);
        try {
          await axios.post("http://localhost:5000/api/upload", data);
        } catch (err) {}
      }
      try {
        await axios.post("http://localhost:5000/api/students", infos);
        window.location.reload();
      } catch (err) {}
  }
    return (
        <div className="admission">
            <div className="admissionWrapper">
                <form className="formContainer" onSubmit={studentInformation}>
                    <div className="inputWrappers">
                        <div className="tt">
                            <p className="admissionTitle">Mevick Online Registration</p>
                            <hr className="thr" />
                        </div>
                        <div className="admissionNoter">
                            <p>Personal detail <span className="star">*</span></p>
                            <hr className="theLinner" />
                        </div>
                        <div className="name">
                            <div className="newUserItemA">
                                <label>Student Name </label>
                                <input className="names" type="text" required placeholder="Student Name" onChange={(e) =>setStudentName(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Gender</label>
                                <select className="newUserSelect" name="active" id="active"
                                onChange={(e) =>setGender(e.target.value)} >
                                    <option value="yes">Male</option>
                                    <option value="no">Female</option>
                                </select>
                            </div>
                            <div className="newUserItemA">
                                <label>DOB</label>
                                <input className="names" type="date" onChange={(e) =>setDob(e.target.value)}  />
                            </div>
                        </div>
                        <div className="address">
                            <div className="newUserItemA">
                                <label>Address</label>
                                <input className="names" type="text" required placeholder="Address" onChange={(e) =>setStudentAddress(e.target.value)}   />
                            </div>
                            <div className="newUserItemA">
                                <label>Phone</label>
                                <input className="names" type="text" required placeholder="Enter Phone Number" onChange={(e) =>setPhone(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Email</label>
                                <input className="names" type="email" required placeholder="Enter Email Address" onChange={(e) =>setStudentEmail(e.target.value)}  />
                            </div>
                        </div>
                    </div>
                    <div className="inputWrappers">
                        {/* admission details */}
                        <div className="admissionNoter">
                            <p>Admission details <span className="star">*</span></p>
                            <hr className="theLinner" />
                        </div>
                        <div className="class">
                            <div className="newUserItemA">
                                <label>Class</label>
                                <select className="newUserSelect" name="active" id="active">
                                    <option value="yes">Form 4</option>
                                    <option value="no">Form 5</option>
                                    <option value="no">LSA</option>
                                    <option value="no">LSS</option>
                                    <option value="no">USA</option>
                                    <option value="no">USS</option>
                                </select>
                            </div>
                            <div className="newUserItemA">
                                <label>Section</label>
                                <select className="newUserSelect" name="active" id="active">
                                    <option value="yes">Anglohone</option>
                                    <option value="no">Francophone</option>
                                </select>
                            </div>
                            <div className="userDetailsInfo">
                                <span className="span">Choose a Picture</span>
                                <div className="userUpdateUpload">
                                    <img
                                    className="userUpdateImg"
                                    src={file ?  URL.createObjectURL(file) : zenith}
                                    alt=""
                                    />
                                    <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        <div className="father">
                            <div className="newUserItemA">
                                <label>Fathers Name</label>
                                <input className="names" type="text" required placeholder="Fathers Name" onChange={(e) =>setFathername(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Fathers Phone</label>
                                <input className="names" type="text" required placeholder="Fathers Phone" onChange={(e) =>setFatherPhone(e.target.value)} />
                            </div> 
                            <div className="newUserItemA">
                                <label>Fathers Occupation</label>
                                <input className="names" type="text" required placeholder="Fathers Occupation"
                                onChange={(e) =>setfatherOccupation(e.target.value)} />
                            </div>
                        </div>
                        <div className="mother">
                            <div className="newUserItemA">
                                <label>Mothers Name</label>
                                <input className="names" type="text" required placeholder="Mothers Name"
                                onChange={(e) =>setMothername(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Mothers Phone</label>
                                <input className="names" type="text" required placeholder="Mothers Phone"
                                onChange={(e) =>setMotherPhone(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Mothers Occupation</label>
                                <input className="names" type="text" required placeholder="Mothers Occupation"
                                onChange={(e) =>setMotherOccupation(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="inputWrappers">
                         {/* Login details */}
                        <div className="admissionNoter">
                            <p>Login details <span className="star">*</span></p>
                            <hr className="theLinner" />
                        </div>
                        <div className="loginDetaiil">
                            <div className="newUserItemA">
                                <label>Username<span className="star">*</span></label>
                                <input className="names" type="text" required placeholder="Username"
                                onChange={(e) =>setUsername(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Email <span className="star">*</span></label>
                                <input className="names" type="email" placeholder="User Email"
                                onChange={(e) =>setEmail(e.target.value)} />
                            </div>
                            <div className="newUserItemA">
                                <label>Password <span className="star">*</span></label>
                                <input className="names" type="password" placeholder="Password" 
                                onChange={(e) =>setPassword(e.target.value)}/>
                            </div>
                        </div>
                          {/* giving parents the access to login */}
                        <div className="admissionNoter">
                            <p>Parents or Guidiance Login details <span className="star">*</span></p>
                            <hr className="theLinner" />
                        </div>
                        <div className="giveItem">
                            <input className="names" type="checkbox" placeholder="User Email" />
                            <label>Allow Parents to Login <span className="star">*</span></label>
                        </div>
                        <div className="submitBtn">
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admission
