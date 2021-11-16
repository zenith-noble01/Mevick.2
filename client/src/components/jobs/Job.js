import React from 'react'
import './job.css'

const Job = () => {
    return (
        <div className="job">
            <form className="jobContainer">
                <div className="nma">
                    <input type="text" className="indent1" placeholder="Username" required />
                    <input type="email" className="indent1" placeholder="Email" required />
                </div>
                <div className="nma">
                    <input type="text" className="indent" placeholder="Phone" required/>
                </div>
                <div className="nma">
                    <div className="newUserItemA">
                        <label>Select Your Teaching Subject</label>
                        <select className="newUserSelectJob" name="active" id="active"  >
                            <option value="Maths">Mathematics</option>
                            <option value="Maths">Physics</option>
                            <option value="Maths">Computer Science</option>
                            <option value="Maths">Chemistry</option>
                        </select>
                    </div>
                </div>
                <div className="nma">
                    <textarea placeholder="Description of Profile" ></textarea>
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Job
