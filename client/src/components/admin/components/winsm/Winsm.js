import "./winsm.css"
import Win from "../win/Win"
import { useState, useEffect} from 'react'
import axios from 'axios'

const Winsm = () => {
    const [student, setStudent] = useState([])
    useEffect(() => {
      const getStudent = async () =>{
        const res = await axios.get('https://mevick-moon.herokuapp.com/api/dummydata')
        setStudent(res.data)
      }
      getStudent()
    }, [])
    return (
        <div className="winsm">
            <span className="winsmTitile">New students</span>
            <div className="winScrol">
                {student.map((s=>
                    <Win student={s} key={s} />
                ))}
            </div>
        </div>
    )
}

export default Winsm
