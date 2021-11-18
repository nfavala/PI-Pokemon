import loader from "../../images/loading.gif";
import "./Loader.scss";

function Loader() {
    return(
        <div className="spinner">
            <img src={loader} alt= 'Loading...' width='200' height='200' />
            <span className='loading'>Loading...</span>
        </div>
    )
}

export default Loader;