import "./Header.css";
import NavBar from "./NavBar/NavBar";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="HeaderH1Div">
                <h1>Live Score</h1>
            </div>
            <div className="HeaderLinksDiv">
                <NavBar />
            </div>
        </div>
    );
}

export default Header;
