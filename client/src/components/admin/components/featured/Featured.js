import "./featured.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItems">
                <span className="featuredTitle">Students Growth</span>
                <div className="featureStudentContainer">
                    <span className="featureStudent">12k</span>
                    <span className="featuredStudentRate">-1000
                    <ArrowDownwardIcon />
                    </span>
                </div>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Teacher Growth</span>
                <div className="featureStudentContainer">
                    <span className="featureStudent">12k</span>
                    <span className="featuredStudentRate">-1000
                    <ArrowDownwardIcon />
                    </span>
                </div>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Parents Growth</span>
                <div className="featureStudentContainer">
                    <span className="featureStudent">12k</span>
                    <span className="featuredStudentRate">-1000
                    <ArrowUpwardIcon />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Featured
