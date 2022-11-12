import { NavLink } from "react-router-dom";
import "./Page_404.css";

function Page_404(): JSX.Element {
    return (
        <div className="Page_404">
            <div id="img">
                </div>
			<div id="notfound">
                <h1>oops!</h1>
                <h2>Error 404 : Page Not Found</h2>
                <NavLink to="/Home">go back</NavLink>
                {/* <div className="notfound-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
                </div> */}
                </div>
        </div>
    );
}

export default Page_404;
