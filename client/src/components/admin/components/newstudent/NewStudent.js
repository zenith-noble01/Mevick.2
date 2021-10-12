import "./newstudent.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Student</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input className="names" type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input className="names" type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>DOB</label>
          <input className="names" type="date" />
        </div>
        <div className="newUserItem">
          <label>POB</label>
          <input className="names" type="text" placeholder="Place Of Birth" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input className="names" type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input className="names" type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
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
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="createBtnStudent">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
