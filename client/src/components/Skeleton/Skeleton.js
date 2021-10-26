import "./skeleton.css"

const Skeleton = () => {
    console.log("miles");
    return(
        <div className="skeleton">
            <div className="skeletonTop">
                <div className="skeletonImg">
                    <div className="loading">
                        <div className="load"></div>
                    </div>
                </div>
                <div className="skeletonName">
                    <div className="loading">
                        <div className="load"></div>
                    </div>
                </div>
            </div>
            <div className="skeletonTainer">
                <div className="skeletonName"></div>
                <div className="skeletonText">
                    <div className="loading">
                        <div className="load"></div>
                    </div>
                </div>
                <div className="skeletonContainer">
                    <div className="loading">
                        <div className="load"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton