import "./first.css"
import Topbar from '../topbar/Topbar'

const First = () => {
    return (
        <div className='first'>
            <Topbar />
            <div className="firstContainer">
                <h1>Mevick Bilingual Grammer School</h1>
                <h4>Knowledge-Hardwork-Success</h4>
               <button>Contact</button>
            </div>
            {/* <div className="btnContact">
            </div> */}

            {/* <div className="socialMedia">
                <p>facebook</p>
                <p>facebook</p>
                <p>facebook</p>
                <p>facebook</p>
            </div> */}
        </div>
    )
}

export default First
