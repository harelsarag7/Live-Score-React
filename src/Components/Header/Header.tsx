import "./Header.css";
import NavBar from "./NavBar/NavBar";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="header-container">

                <div id="logo" ></div>
            <div className="HeaderLinksDiv">
                <NavBar />
            </div>
            </div>
        </div>
    );
}

export default Header;
