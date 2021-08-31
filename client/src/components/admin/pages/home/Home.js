import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import WinLg from "../../components/winlg/WinLg"
import Winsm from "../../components/winsm/Winsm"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
           <Featured />
           <Chart />
           <div className="homewin">
               <Winsm />
               <WinLg />
           </div>
        </div>
    )
}

export default Home
